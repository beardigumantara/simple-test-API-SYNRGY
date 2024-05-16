const multer = require('multer');
const path = require('path');

const mUpload = multer({storage: multer.memoryStorage()});