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
    partialsDir: path.resolve("./resetOtpView/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./resetOtpView/"),
};

transporter.use("compile", hbs(handleBar));

const resetMail = async (email, name, otp) => {
  console.log("otp: ", otp);
  var mailOptions = {
    from: "Falcon ",
    to: email,
    subject: "Falcon",
    text: "hi",
    template: "email",
    context: {
      name: name,
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

export default resetMail;
