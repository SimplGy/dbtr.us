# downByTheRiver.us

This is a blog about my van conversion project.

I tried [wintersmith.io](wintersmith.io) for this. It's pretty good.
The way it handles sibling images in blog posts is much better than Jekyll. It's also better at the way it manages blog excerpts (the first snippet of text to show on the main page).

Don't think I'd use Jade again though. Whatever time it saves me on typing I lose trying to figure out something silly about spacing or syntax.

Requires `wintersmith` globally installed:

    npm install -g wintersmith

To run in development mode:

    npm start
    # or...
    wintersmith preview

To shrink images:

    # Inside a blog post folder
    sips -Z 1200 *.jpg

To build assets into a static site:

    wintersmith build

The app is hosted on aws. To deploy, aws needs to be configured using a json file you create called `.aws.config.json`. This isn't checked in to git because it has secret keys:

    {
    	"bucket": "www.downbytheriver.us",
    	"accessKeyId": "ACCESS_KEY_ID",
    	"secretAccessKey": "SECRET"
    }

Then you can build and deploy in one line with:

    npm run deploy

    

    