const utils = require('../test/utils')
const axios = require('axios')
const checkoutUrl = 'https://juice-shop.herokuapp.com/rest/basket/11/checkout'
const Login  = require('./login')
const { expect } = require('chai')

class CheckOut {
    static async checkOutPOSTRequest(email) 
    {
        let token = await Login.loginPOSTRequest(email)
        const headers = 
        {
            'Authorization': `Bearer ${token}`
        }
        const bodyRequest =
        {
            "couponData": "bnVsbA==",
            "orderDetails":
            {
                "paymentId": "24",
                "addressId": "24",
                "deliveryMethodId": "1"
            }
        }
        const response = await axios.post(checkoutUrl, bodyRequest, 
            {
                headers:headers
            })
            console.log(JSON.stringify(response.data))
            expect(response.status).to.equal(200, 'incorrect status code for Check Out Button POST api')
    }
}
module.exports = CheckOut