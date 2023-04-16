var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

console.log(req.body)

  var email = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'Quintiyaku@gmail.com',
    subject: 'PAGINA WEB',
    html: email + " se contactó a través de la web y requiere una respuesta al mismo correo. <br> Su mensaje fue : " + mensaje + " "

  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  var info = await transporter.sendMail(obj);

res.render('index', {
message: 'Mensaje enviado correctamente.'
});

});

module.exports = router;
