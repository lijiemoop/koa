const RouterController = require('./Router')
const UserController = require('./userController')
const PREFIX = '/api/'

class IndexController extends RouterController {
  constructor() {
    super()
    this.router.use(`${PREFIX}user`, UserController.routes(), UserController.allowedMethods())
    this.router.get(/.*/, this.render)
  }
  async render(ctx, next) {
    ctx.type = 'text/html;charset=utf-8'
    await ctx.render('index')
  }
}
module.exports = new IndexController().router
