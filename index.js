import express from 'express'
import hisory from 'connect-history-api-fallback'

let port = process.env.PORT || 3000

const app = express()

app.use(express.static(__dirname + '/dist'))

app.use(hisory({ index: '/dist/index.html'}))

app.use(express.static(__dirname + '/dist'))

app.listen(port, () => console.log(`App listening on port ${port}`))