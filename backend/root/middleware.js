const { z } = require("zod");

const usernameSchema = z.string()
                        .min(1, {message: "username required"});
const emailSchema = z.string().email()
                        .min(1, {message: "email required"});
const passwordSchema = z.string()
                        .min(1, {message: "password required"})
                        .min(4, {message: "atleast 4 characters required"});

function validateUserSignUpSchema(req, res, next){
    const {username, email, password} = req.headers;
    try{
        if(usernameSchema.parse(username).success && emailSchema.parse(email).success
        && passwordSchema.parse(password).success){
            next();
        }
    }
    catch(err){
        res.status(403).send({
            msg: "Some error happened"
        })
        console.log(err);
    }
}

function validateUserLoginSchema(req, res, next){
    const { email, password } = req.headers;
    try{
        console.log("in try block");
        if(email.length > 0 && password.length>0){
            next();
        }
        else{
            res.status(404).send({
                msg: "Invalid input"
            })
        }
    }
    catch(err){
        res.status(403).send({
            msg: "Some error happened"
        })
        console.log(err);
    }
}

module.exports = {validateUserSignUpSchema, validateUserLoginSchema};
