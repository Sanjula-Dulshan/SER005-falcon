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
    partialsDir: path.resolve("./proofViews/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./proofViews/"),
};

transporter.use("compile", hbs(handleBar));

const proofRequestMail = async (email, name) => {
  var mailOptions = {
    from: "Falcon ",
    to: email,
    subject: "Falcon",
    text: "hi",
    template: "email",
    context: {
      name: name,
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

export default proofRequestMail;
