Test task for Smart Design

To test the function, run `node test`

First you have to install the dependencies by running `npm i`
and create `.env` file according to the `.env.example`
with the domain and API key

_getProducts_ - async generator that returns a page
of products with the quantity specified in the config
with each call. 
It uses **Shopify** client

_check_ function in `test.js` writes the results of using generator
_getProducts_ to the file
