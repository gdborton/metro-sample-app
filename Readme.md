## metro-script-module support
This is a fork of the metro-sample app to repro for an issue filed against metro.

### To see the issue

1. `npm install`
1. `node devServer.js`
1. open `http://localhost:3000/dev.html`
1. Notice that we're using [`type="module"` in our script tag in dev.html](dev.html).
1. open the devtools console and notice the error