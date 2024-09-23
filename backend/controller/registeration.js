const CompanySchema = require("../schema/CompanySchema");
const UserSchema = require("../schema/UserSchema");

const sendEmail = require("./EmailController");
const bcrypt = require('bcrypt');
const passwordGenerator = require('generate-password');
exports.registerCompany= async(req,res)=>{
  try {
    const {
        companyName,
        registrationNo,
        email,
        companyGstNo,
        companyPan,
        companyService,
        companyRepresentative,
        companyAddress,
      } = req.body;
    
      const existingUser = await CompanySchema.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: 'Company  already exists with same email' });
      }
      

        
      const randomPassword = passwordGenerator.generate({
        length: 6,
        numbers: true,
      });
  
       console.log(randomPassword)
      
      const hashedPassword = await bcrypt.hash(randomPassword, 10);
       console.log(hashedPassword)

        const newRegistration = new CompanySchema({
          companyName,
          registrationNo,
          email,
          companyGstNo,
          companyPan,
          companyService,
          companyRepresentative,
          companyAddress,
        
        });
        
        const savedRegistration = await newRegistration.save();
        const newuser= new UserSchema({
          username:email,
          password:hashedPassword,
          role:'company'
        })

        const user =await newuser.save()
        // console.log(user)

        const emailData = {
          to: email,
          text: `Hey User, Your account has been created.\n\nUsername: ${email}\nPassword: ${randomPassword}`,
          subject: 'Registration of Company',
        };
        sendEmail(emailData);
        res.status(201).json(savedRegistration);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

