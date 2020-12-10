const {body, check} = require('express-validator');

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

        case 'addBook': {
            return [
                check('bookName', "Invalid book name").isLength({min: 1}),
                check('author', "Invalid author").isLength({min: 1}),
                check('genre', "Invalid genre").isLength({min: 1}),
                check('status', "Invalid status").isLength({min: 6}),
            ];
        }
            break;
    }
}
