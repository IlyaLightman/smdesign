const Shopify = require('@shopify/shopify-api').Shopify
require('dotenv').config()

const [clientDomain, apiKey] = [process.env.DOMAIN, process.env.API_KEY]
const client = new Shopify.Clients.Rest(clientDomain, apiKey)

const getProducts = async function* () {
    let nextPage = {
        path: 'products', query: { limit: 1 }
    }

    while (nextPage) {
        const data = (await client.get(nextPage))
        nextPage = data.pageInfo.nextPage

        yield data.body.products[0]
    }
}

module.exports = { getProducts }
