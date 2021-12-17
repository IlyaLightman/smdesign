const fs = require('fs')
require('dotenv').config()

const { getProducts } = require('./index')

const fileName = process.env.TEST_FILE

const check = async () => {
    const products = getProducts()

    console.log(fileName)
    let productsCount = 0

    const fileStream = fs.createWriteStream(fileName)

    for await (let page of products) {
        page.forEach(prod => {
            fileStream.write(`${JSON.stringify(prod, null, '\t')} \n`)
            productsCount++
        })
    }

    console.log(productsCount)
}

check()
