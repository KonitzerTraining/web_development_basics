// auth.js
const auth = require('basic-auth');

module.exports = (req, res, next) => {
    var user = auth(req);

    if (typeof user === 'undefined' || user.name !== 'myuser' || user.pass !== 'mypass') {
        // We will discuss this line later in this section.
        res.header('WWW-Authenticate', 'Basic realm="Access to the API"');
        return res.status(401).send({ error: 'Unauthorized' });
    }

    next();
};