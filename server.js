const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression')

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 999;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(compression())

app.use(cors());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'client/build')));

    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname,'client/build','index.html'))
    });
};

app.listen(port, error => {
    if (error) throw error
    console.log('Server running on port' + port);
});
app.get('/',(req,res) => {
    res.status(200).json({API:'up'})
});
app.post('/payment', (req,res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency:'usd'
    };
    stripe.charges.create(body,(stripeErr,stripeRes) => {
        if(stripeErr) {
            res.status(500).json({error:stripeErr});
        } else {
            res.status(200).json({success:stripeRes})
        }
    })
})