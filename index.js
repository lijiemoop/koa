const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views')
const path = require('path')
const router = require('./router')

const app = new Koa()

app.use(serve(path.join(__dirname, '/public')))
app.use(views(path.join(__dirname, '/public')), { extension: 'html' })
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(1993)
console.log("demo in run")