# downByTheRiver.us

This is a blog about my van conversion project.

I tried [wintersmith.io](wintersmith.io) for this. It's pretty good.
The way it handles sibling images in blog posts is much better than Jekyll. It's also better at the way it manages blog excerpts (the first snippet of text to show on the main page).

Don't think I'd use Jade again though. Whatever time it saves me on typing I lose trying to figure out something silly about spacing or syntax.

To run in development mode:

    wintersmith preview

To shrink images:

    # Inside a blog post folder
    sips -Z 1200 *.jpg

To build:

    wintersmith build

To deploy:


