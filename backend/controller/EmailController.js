const nodemailer = require("nodemailer");

const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {


  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",   
    port: 587,
    secure: false, 
    auth: {
      user: process.env.MAIL_ID, 
      pass: process.env.MAIL_PASS, 
    },
  });
 

  let info = await transporter.sendMail({
    from: "Employee Verifier", 
    to: data.to, 
    subject: data.subject, 
    text: data.text, 
  });

//   console.log("Message sent: %s", info.messageId);
//   console.log("Message sent: %s", info);
  
});

module.exports = sendEmail;
