const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')
require('dotenv').config()

// Connect to DB
async function dbConnector(fastify, options) {
    try {
        const url = process.env.DB_URL
        const db = await mongoose
                .connect(url, {
                    useNewUrlParser: true
                })
        console.log("Database is connected")
        fastify.decorate('mongo', db)
    } catch (err) {
        console.log(err)
    }
}

module.exports = fastifyPlugin(dbConnector)