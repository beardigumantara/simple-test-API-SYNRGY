const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dtpbuuaiz',
    api_key: '717975836575424',
    api_secret: 'gJ0HApuEG4nZiVsz8ja1a9bb6x8',
    secure: true
});



module.exports = cloudinary;