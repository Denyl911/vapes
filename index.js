import express from 'express'
import hisory from 'connect-history-api-fallback'
import path from 'path'

let port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.resolve(__dirname, '..',  'dist')))

app.use(hisory({ index: path.resolve(__dirname + '..',  'dist', 'index.html')}))

app.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.listen(port, () => console.log(`App listening on port ${port}`))