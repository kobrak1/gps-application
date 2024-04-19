const app = require('./app')  // the actual express application
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
    logger.info(`server running on port ${config.PORT}`)
})