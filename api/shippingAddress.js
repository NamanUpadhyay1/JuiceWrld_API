const axios = require('axios')
const utils = require('../test/utils')
const newEmail = require('../test/testsuite')
const shippingUrl = 'https://juice-shop.herokuapp.com/api/Addresss/'
const { expect } = require('chai')
const Login  = require('./login')
let responseData

class ShippingAddress
{
    static async shippingAddressPOSTApi(email)
    {
        let token = await Login.loginPOSTRequest(email)
        const headers = 
        {
            'Authorization': `Bearer ${token}`
        }
        const bodyRequest = 
        {
                "city": "test",
                "country": "india",
                "fullName": "naman",
                "mobileNum": 1234567890,
                "state":"test",
                "streetAddress": "test",
                "zipCode": 123456
        }
        const response = await axios.post(shippingUrl, bodyRequest, 
            {
                headers: headers
            })
        console.log(JSON.stringify(response.data));
        expect(response.status).to.equal(201, 'incorrect status code for Shipping Address POST api')
        
    }
    
}
module.exports = ShippingAddress