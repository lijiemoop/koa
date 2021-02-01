const RouterController = require('../Router')

class UserController extends RouterController {
  constructor() {
    super()
    this.router.get('/', this.getUser)
  }
  getUser(ctx, next) {
    ctx.body = {
      userName: '1'
    }
  }
}

module.exports = new UserController().router