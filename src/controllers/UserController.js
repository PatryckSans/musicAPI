const User = require('../models/User')
const jwt = require('jsonwebtoken')
// const token = jwt.sign({ foo: 'bar' }, 'secret')

module.exports = {
  async store(req, res) {
    const { name, password, email } = req.body

    const user = await User.create({ name, password, email })
    return res.json(user)
  },
  async login(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
      where: { email, password },
    })

    console.log(email, password)
    console.log(user)

    if (user.toJSON()) {
      const token = jwt.sign({ id: user.toJSON().user_id }, process.env.SECRET, {
        expiresIn: 86400, // expires in 1day
      })
      return res.json({ auth: true, token: token })
    }
    res.status(500).json({ message: 'Login inválido!' })
  },
}
