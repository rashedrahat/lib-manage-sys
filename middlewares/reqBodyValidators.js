const {body} = require('express-validator');

exports.validate = (method) => {
    switch (method) {
        case 'register': {
            return [
                body('name', "Invalid name").isLength({min: 1}),
                body('email', "Invalid email").isEmail(),
                body('password', "Invalid password").isLength({min: 4}),
            ];
        }
            break;

        case 'login': {
            return [
                body('email', "Invalid email").isEmail(),
                body('password', "Invalid password").isLength({min: 4}),
            ];
        }
            break;
    }
}
