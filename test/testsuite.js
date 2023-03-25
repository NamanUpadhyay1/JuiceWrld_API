const axios = require('axios')
const { expect } = require('chai')
//const utils = require('./utils')
const register = require('../api/register')
const cardDetails = require('../api/cardDetails')
const loginApi = require('../api/login')
const shippingAddress = require('../api/shippingAddress')
const checkoutButton = require('../api/checkoutButton')

let email

describe('JuiceWlrd Registration api', async()=>
{
    it('Registration POST Request', async()=>
    {
        email = await register.registerPostRequest()
    })

    it('Login POST Request', async()=>
    {
        await loginApi.loginPOSTRequest(email)
    })

    it('Shipping Address POST Request', async()=>
    {
        await shippingAddress.shippingAddressPOSTApi(email)
    })

    it('Fast Delivery GET Request', async()=>
    {
        await cardDetails.fastDeliveryGET()
    })

    it('Card Details POST Request', async()=>
    {
        await cardDetails.cardDetailsPOST(email)
    })

    it('Check Out button POST Request', async()=>
    {
        await checkoutButton.checkOutPOSTRequest(email)
    })
})
