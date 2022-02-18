const nodemailer = require("nodemailer");
const config = require("./auth.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (name, email, password) => {
    console.log("Check");
    transport.sendMail({
        from: "The Smith School",
        to: email,
        subject: "Has sido aceptado en The Smith School",
        html: `<h2>Felicitaciones, has sido aceptado en The Smith School</h2>
                <h3>Hola ${name}</h3>
                <h4>A continuacion te enviamos las credenciales para que accedas a nuestra plataforma</h4>
                <p>Email: ${email}</p>
                <p>Contraseña: ${password}</p>
                </div>`,
    }).catch(err => console.log(err));
  };