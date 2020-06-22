const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Expenses } = require('../Models/expenses');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    Expenses.find((err, docs) => {
        if (!err) { console.log(docs); res.send(docs); }
        else { console.log('Error in Retriving Colleges :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Expenses.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges :' + JSON.stringify(err, undefined, 2)); }
    });
});

/*router.get('/code/:code1', (req, res) => {
    console.log('3');
    Expenses.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});*/

// router.post('/', (req, res) => {
//     var expenseInfo = new Expenses({
//         given_by: req.body.given_by,
//         given_to: req.body.given_to,
//         group_name: req.body.group_name,
//         amount: req.body.amount,
//         });
//     expenseInfo.save((err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Expense Save :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

router.post("/",(req,res) =>{
		
    
    var expenseInfo = new Expenses({
        given_by: req.body.given_by,
        given_to: req.body.given_to,
        group_name: req.body.group_name,
        amount: req.body.amount,
        });
    
    console.log(expenseInfo.given_by);
    console.log(expenseInfo.given_to);
    Expenses.find({given_by:expenseInfo.given_by,given_to:expenseInfo.given_to},function(err,t){
        console.log(t.length);
        if(t.length == 0){
            expenseInfo.save((err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Expense Save :' + JSON.stringify(err, undefined, 2)); }
            });
        }
        else{
                    // res.send({ "message": false});
                    console.log(req.body.amount);
                    // console.log(t);
                    // console.log(t[0]);

                    t[0].amount = t[0].amount + req.body.amount;
                    t[0].save();
                    // Expenses.update({given_by:req.body.given_by,given_to:req.body.given_to},{$inc : {amount : req.body.amount}});

                    
                    // expenseInfo.update({"given_by":req.body.given_to,"given_to":req.body.given_by},{$inc : {"amount" : -req.body.amount}});
                    //console.log(req.body.amount);
                    res.send();
        }
    });
    
})




router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var expenseInfo = new Expenses({
            given_by: req.body.given_by,
            given_to: req.body.given_to,
            group_name: req.body.group_name,
            amount: req.body.amount,
            });
        Expenses.findByIdAndUpdate(req.params.id, { $set:expenseInfo }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    Expenses.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            console.log('Hey there');
            res.send(doc); }
        else { console.log('Error in College Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;