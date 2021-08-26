const fastify = require('fastify');
const PORT = process.env.PORT || 3000;
const db = require('./config/db')
const routes = require('./routes/postRoutes');

const app = fastify({
    logger: true
})

// Connected to DB
app.register(db)

// Router 
routes.forEach((route, index) => {
    app.route(route)
})
app.get("/", async() => {
    return {
        Message: "Fastify is On Fire"
    }
})

// Function To run the server 
const start = async() => {
    try {
        await app.listen(PORT)
        app.log.inf(`server listening on ${PORT}`)
    } catch (error) {
        app.log.error(err)
        process.exit(1)
    }
}
start();