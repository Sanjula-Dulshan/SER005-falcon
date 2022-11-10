import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

//initialize nodemailer
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sliit.rmt@gmail.com",
    pass: "mvvarvjzcwfxwuft",
  },
});

const handleBar = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

transporter.use("compile", hbs(handleBar));

const sendMail = async (email, username, otp) => {
  console.log("otp: ", otp);
  var mailOptions = {
    from: "SLIIT Research Management",
    to: email,
    subject: "SLIIT Research Management",
    text: "hi",
    template: "email",
    context: {
      username: username,
      otp: otp,
    },
  };

  //send mail to user
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendMail;
