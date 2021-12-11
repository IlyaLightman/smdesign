const fs = require('fs')

const { getProducts } = require('./index')

const fileName = 'test.txt'

const check = async () => {
    const products = getProducts()

    console.log(fileName)
    let productsCount = 0

    for await (let prod of products) {
        fs.appendFileSync(fileName, JSON.stringify(prod, null, '\t') + '\n')
        productsCount++
    }

    console.log(productsCount)
}

check()
