const {validateUserSignUpSchema} =  require("./middleware");
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

app.post("/login", (req, res)=> {
})

app.listen(3000, ()=> {
    console.log("listening on port 3000");
})