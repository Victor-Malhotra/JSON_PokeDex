# Emanuel/Victors
## _The Guide to charmader, Evolutions included_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

These steps are here to show the process to make a pokedex about charmander to his final evolution.

- We will start with using HTML,Scss,Javascript,Jquery, and JSON 
- Will have a Pokedex like view at the start
- ✨Magic ✨      of the pokemon world

## Features

- Having a colorful forest background
- Correct images of the Pokemon in Question
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown into a safe and contained place
- Export documents as Markdown, HTML and PDF


> The overriding design goal for this is to make a pokedex
> formatting is important because it is within my idea to make it
> as close as possible to the original. 
> The markdown is formatted document should be
> publishable as-is, formatting instructions and other things below.


## Tech Used or could be used

Dillinger uses a number of open source projects to work properly:

- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [node.js] - evented I/O for the backend
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery]

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub as well as itself for uploading work.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install requirements.

```sh
cd dillinger
Github accounts
The teacher that requested the project
original owner or vice owner
```

## Development

Step 1 : start laying the foundational plan for making the pokedex by checking what things would or would not be needed for it production.

step 2 : Design and creation of the pokedex will come under way

step 3 : then testing before the final steps are taken to ensure complete working order

step 4 : Work will be submitted and finalized before hand to make sure there will no error coming through the testing section

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
