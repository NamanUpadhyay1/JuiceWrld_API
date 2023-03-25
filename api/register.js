const baseUrl = 'https://juice-shop.herokuapp.com'
const registerUrl = baseUrl + '/api/Users/'
const axios = require('axios')
const { expect } = require('chai')
const utils = require('../test/utils')


class Register {
    static async registerPostRequest() {

        const date = new Date().getTime()
        const email = `naman${date}@gmail.com`
        const data = {
            "email": email,
            "password": "password123",
            "passwordRepeat": "password123",
            "securityAnswer": "asdasdasd",
            "securityQuestion": { "id": 1, "question": "Your eldest siblings middle name?" }
        }

        const response = await axios.post(registerUrl,data)
        .then(async function(response) {
                console.log(response.data);
                expect(response.status).to.equal(201, 'incorrect status code for Registration POST api')
                let email = response.data.data.email
               return email
            })
            return response
        
    }
}
module.exports = Register