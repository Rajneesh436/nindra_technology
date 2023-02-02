require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path  = require("path");
const { log } = require("console");
require("./connection/mongoDB");
const Schemaplay = require("./model/schema");
const Registration = require("./model/registration");
const { nextTick } = require("process");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth")


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, "./drumKit")));

app.get("/",(req, res)=>{
    res.render("login")
})

app.get("/drum",auth, async (req, res)=>{
    res.sendFile(__dirname+"/drumKit/drumindex.html")
})

app.post("/graph", auth, async (req, res)=>{
    const number = await Registration.countDocuments();
    // console.log(number);
    const w_rate = (number*100)/w;
    const a_rate = (number*100)/a;
    const s_rate = (number*100)/s;
    const d_rate = (number*100)/d;
    const j_rate = (number*100)/j;
    const k_rate = (number*100)/k;
    const l_rate = (number*100)/l;
    res.render("index",{
        w:w,
        a:a,
        s:s,
        d:d,
        j:j,
        k:k,
        l:l,
        number:number,
        w_rate:w_rate,
        a_rate:a_rate,
        s_rate:s_rate,
        d_rate:d_rate,
        j_rate:j_rate,
        k_rate:k_rate,
        l_rate:l_rate

    })
})


app.post("/senddata",  async (req, res)=>{
    console.log(req.body);
    w = req.body.w;
    a = req.body.a;
    s = req.body.s;
    d = req.body.d;
    j = req.body.j;
    k = req.body.k;
    l = req.body.l;
    

    // const number = await Schemaplay.countDocuments();
    // console.log(number);

    const w_doc = await Schemaplay.findOne({key:"w"})
    w += w_doc.total_plays
    w_doc.total_plays = w
    // w_doc.unique_plays = number;
    w_doc.save()
    console.log("updated value w "+ w);


    const a_doc = await Schemaplay.findOne({key:"a"});
        a += a_doc.total_plays;
        a_doc.total_plays = a;
        // a_doc.unique_plays = number;
        a_doc.save();
        
    const s_doc = await Schemaplay.findOne({key:"s"});
        s += s_doc.total_plays;
        s_doc.total_plays = s;
        // s_doc.unique_plays = number;
        s_doc.save();

    const d_doc = await Schemaplay.findOne({key:"d"});
        d += d_doc.total_plays;
        d_doc.total_plays = d;
        // d_doc.unique_plays = number;
        d_doc.save();

    const j_doc = await Schemaplay.findOne({key:"j"});
        j += j_doc.total_plays;
        j_doc.total_plays = j;
        // d_doc.unique_plays = number;
        j_doc.save();

    const k_doc = await Schemaplay.findOne({key:"k"});
        k += k_doc.total_plays;
        k_doc.total_plays = k;
        // k_doc.unique_plays = number;
        k_doc.save();

    const l_doc = await Schemaplay.findOne({key:"l"});
        l += l_doc.total_plays;
        l_doc.total_plays = l;
        // l_doc.unique_plays = number;
        l_doc.save();

});


app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

const registration = await Registration.findOne({username});
if (!registration) {
    return res.send("User not found ");
}

const isMatch = await bcrypt.compare(req.body.password , registration.password)
// console.log(req.body.passwordlogin);
// console.log(vendor.passwordregister);
// console.log(isMatch);
const token = await registration.generateAuthToken();
console.log("login token is--");
console.log(token);
//saving token into browser's cookie
res.cookie("jwt",token);
if (isMatch) {
    res.redirect("/drum");
}
else {
    res.send("Failed to log in. Check your log in credentials...");
}

})


app.post("/sign-up", async (req, res) => {
    try {
        const registration = new Registration(req.body);
        console.log(req.body);

        //before saving we are calling a pre function in schema(registration.js);
        const registrationdata = await registration.save();
        const token = await registration.generateAuthToken();

        //saving token into browser's cookie
        res.cookie("jwt",token);
        res.redirect("/drum");
        // res.send(drum);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
})


app.get("/logout",auth, async(req, res)=>{
    try{
        console.log("req.use is---");
        // console.log(req.user);

        // req.user.tokens = req.user.tokens.filter((currentElement)=>{
        //         return currentElement.token !== req.token;
        //     })

        res.clearCookie("jwt");
        console.log("Logout Successfully...");
        // res.render("login");
        // await req.user.save();
        // res.sendFile(__dirname+"/vendor-form.html");
        res.render("login")

    }catch(e){
        res.send("Can't logout")
    }
})


app.listen(3000, ()=>{
    console.log("listening on port no 3000");
})

