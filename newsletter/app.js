const express = require("express");
const app = express();
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");
const { Console } = require("console");
const { subscribe } = require("diagnostics_channel");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    const fname = req.body.fName;
    const lname = req.body.lName;
    const email = req.body.email;

   
    const options = {
        method: "POST",
        auth: "rahul:28bcc63156739abaad408c10186809ce-us17"
    }
    const url = "https://us17.api.mailchimp.com/3.0/lists/070647f680"
    const data = {
        member: [{
            email_address: email,
            status: "subscribe",
            merge_fields: {
                FNAME: fname,
                LNAMR: lname
            }
        }]
    }
    const jsonData = JSON.stringify(data);

    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });
    })
    request.write(jsonData);
    request.end();
});

app.listen(3000, function () {
    console.log("server running successfully");
})







// audiencce id 070647f680.
// api id 28bcc63156739abaad408c10186809ce-us17
