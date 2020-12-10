const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, app__basedir + "/assets/uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname + "_" + Date.now());
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single("bookImage");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
