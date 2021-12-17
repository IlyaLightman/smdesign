const Shopify = require('@shopify/shopify-api').Shopify
require('dotenv').config()

const [
    clientDomain,
    apiKey,
    productsLimit
] = [process.env.DOMAIN, process.env.API_KEY, process.env.PRODUCTS_LIMIT]

const client = new Shopify.Clients.Rest(clientDomain, apiKey)

const getProducts = async function* () {
    let nextPage = {
        path: 'products', query: { limit: productsLimit }
    }

    while (nextPage) {
        const data = (await client.get(nextPage))
        nextPage = data.pageInfo.nextPage

        yield data.body.products
    }
}

module.exports = { getProducts }
