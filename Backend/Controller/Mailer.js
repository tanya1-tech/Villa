
import nodemailer from 'nodemailer';

function Mailer(email,pin){

    
let transporter = nodemailer.createTransport({

  service: 'gmail',
  auth: {
    user: 'sahilpatel.abhayprashalcampus@gmail.com',
    pass: 'dlafdacmevfjkycg'
  }
});

let mailOptions = {
  from: 'sahilpatel.abhayprashalcampus@gmail.com',
  to: email,
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome to our service </h1><h2>You have successfully Register in our Website</h2>'+"<p>Your credintial is Mail:"+email+"</p>"+"<p>Your Password is :"+pin+"</p>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    
}

export default Mailer