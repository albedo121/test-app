const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;

var format = require('date-format');


//<--------SERVER START-------->
app.listen(PORT,() => {
    console.log(`Server is running at ${PORT}`)
})


//<--------HOME PAGE-------->
app.get("/", (req,res) => {
    res.status(200).send(`Welcome to my server`)


 //<--------FACEBOOK-------->  
app.get("/api/facebook" , (req,res) => {
    const facebook = {
        SocialApp: "Facebook", 
        Username: "vishal.singhfb", 
        Friends: 150, 
        Date: format.asString('dd:MM:yyyy', new Date())
    };
    res.status(200).json(facebook);
})    


//<--------INSTAGRAM-------->
app.get("/api/instagram" , (req,res) => {
    const instagram = {
        SocialApp: "Instagram", 
        Username: "vishal.k947", 
        Followers: 200, 
        Follows: 100,  
        Date: format.asString('dd:MM:yyyy', new Date())
    };
    res.status(200).json(instagram);
})


//<--------PARAM-------->
app.get("/api/:token" , (req,res) => {
    
    res.status(200).json({paramm: req.params.token});

})    






})