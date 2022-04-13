const express = require('express')
const app = express()

app.listen(8000, function (err){
    if (err)
        console.log(err);
    else
        console.log("Everything Working!");
})

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://maramiri:L6VGvaycSePfJ0yS@cluster0.iodd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const unicornSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    loves: [String]
});
const unicornModel = mongoose.model("unicorns", unicornSchema);



app.post("/findUnicornByName", function (req, res) {
    console.log("req. has been recieved")
    console.log(req.body.unicornName)

    unicornModel.find({
        name: req.body.unicornName
    }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });


})

app.post("/findUnicornByFood", function (req, res) {
    console.log("req. has been recieved")
    console.log(req.body.appleIsChecked)
    console.log(req.body.carrotIsChecked)
    alist = []
    if (req.body.appleIsChecked == "checked")
        alist.push("apple")

    if (req.body.carrotIsChecked == "checked")
        alist.push("carrot")

    unicornModel.find({
        loves: {
            $all: alist
        }
    }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });


})

app.post("/findByWeight", function (req, res) {
    console.log("req. has been recieved")
    console.log(req.body.lowerWeight)
    console.log(req.body.higherWeight)
    unicornModel.find({
        $and: [
            {weight:{$gte: req.body.lowerWeight}},
            {weight:{$lt: req.body.higherWeight}},
        ]
    }, function (err, unicorns) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + unicorns);
        }
        res.send(unicorns);
    });


})

// app.post("/filter_f", function (req, res) {
//     console.log("req. has been recieved")
//     console.log(req.body.name_)
//     console.log(req.body.weight_)
//     alist = []
//     if (req.body.name_ == "checked")
//         alist.push("name")

//     if (req.body.weight_ == "checked")
//         alist.push("weight")

//     unicornModel.find({
//         name: {
//             $in: alist
//         },
//         weight: {
//             $in: alist
//         }
//     }, function (err, unicorns) {
//         if (err) {
//             console.log("Error " + err);
//         } else {
//             console.log("Data " + unicorns);
//         }
//         res.send(unicorns);
//     });


// })

app.use(express.static("./public"))