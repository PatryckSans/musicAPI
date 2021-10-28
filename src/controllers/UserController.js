const User = require('../models/User');

module.exports = {
    async store(req, res){
        const {name, password, email} = req.body;

        const user = await User.create({ name, password, email});
        return res.json(user);

    }
}