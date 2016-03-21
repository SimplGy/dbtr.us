/*
 Syncs the `build` directory with aws.
 Bucket, region, and key configuration comes from a json file.
 */
var awsConfig = require('./.aws-config.json');
var s3 = require('s3');
var _ = require('underscore');

console.log('Creating s3 client');

var client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: awsConfig // any other options are passed to new AWS.S3() See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
});

var params = {
  localDir: "./build",
  deleteRemoved: true, // default false, whether to remove s3 objects with no corresponding local file.
  s3Params: { Bucket: awsConfig.bucket } // other options supported by putObject, except Body and ContentLength. See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
};



console.log('Starting uploader');

var uploader = client.uploadDir(params);

uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', function() {
  if (uploader.progressAmount == 0) { return }
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log("");
  console.log(_.pick(uploader, 'progressTotal', 'filesFound', 'deleteTotal' ));
  console.log("Done uploading.");
});