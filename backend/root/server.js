const { validateUserSignUpSchema, validateUserLoginSchema } =  require("./middleware");
const { User }  = require("./model");
const express  = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup", validateUserSignUpSchema, async (req, res)=> {
    const {username, email, password} = req.headers;
    try{
        await User.create({
            username: username,
            email: email,
            password: password,
        });

        res.json({
            msg:"SignUp Succesfull, try Logging In!"
        })
    }
    catch(err){
        console.log(err)
    }
})

app.post("/login", validateUserLoginSchema, async (req, res)=> {
    const { email, password } = req.headers;
    try{
        const storedPassword = await User.findOne({email});
        console.log(storedPassword);
        if(storedPassword===null){
            res.status(404).json({
                msg: "No such user exists, SignUp first"
            })
        }
        else if(storedPassword.password===password){
            res.json({
                msg: "Login Successful!"
            })
        }
        else{
            res.status(404).json({
                msg: "Wrong password!"
            })
        }
    }
    catch(err){
        res.status(500).json({
            msg: "Some error occurred"
        })
        console.log(err);
    }
})

app.listen(3000, ()=> {
    console.log("listening on port 3000");
})