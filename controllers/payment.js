const stripe = require("stripe")("sk_test_51Lwj4oDcBksgiExXHEZXoBWaSobEdpCHKSlOE1fB7ylVmO2JkSTYz48A2icK3pMt9yhbFZuNp898efwIWhpF8bH100VYiZ5Lxn");

const payment = async (req, res) => {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(req.body.amount), // Specify amount here
      currency: req.body.currency // Specify currency here
    });
    // Return client secret
    res.send({
      clientSecret: paymentIntent.client_secret
    });
}

module.exports = {
    payment
}
