const baseUrl = 'https://juice-shop.herokuapp.com'
const axios = require('axios')
const { expect } = require('chai')
const utils = require('../test/utils')
const fastDeliveryUrl = baseUrl + '/api/Deliverys/1'
const cardDetailsUrl = 'https://juice-shop.herokuapp.com/api/Cards'
const Login  = require('./login')

class CardDetails
{
    static async fastDeliveryGET()
    {
        const response = await axios.get(fastDeliveryUrl)
        .then((response) =>
        {
            console.log('_____________'+JSON.stringify(response.data));
        })
    }

    static async cardDetailsPOST(email)
    {
        let token = await Login.loginPOSTRequest(email)
        const headers = 
        {
            'Authorization': `Bearer ${token}`
        }
        const bodyRequest = 
        {
            "fullName": "naman",
            "cardNum": 4111111111111111, 
            "expMonth": "2",
            "expYear": "2083"
        }
        const response = await axios.post(cardDetailsUrl, bodyRequest,
            {
                headers: headers
            })
        console.log(response.data);
        expect(response.status).to.equal(201, 'incorrect status code for Card Details POST api')
    }
}
module.exports = CardDetails