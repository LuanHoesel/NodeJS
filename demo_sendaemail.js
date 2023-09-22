var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'luanhoesel@gmail.com',
    pass: 'nmqu nvuh jtiv txvy'
  }
});

var mailOptions = {
  from: 'luanhoesel@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'LuanHoesel 2B nmqu nvuh jtiv txvy  !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
