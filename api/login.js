const axios = require('axios')
const { expect } = require('chai')
const utils = require('../test/utils')
const loginUrl = 'https://juice-shop.herokuapp.com/rest/user/login'


class Login {
    static async loginPOSTRequest(newEmail) {

        const response = await axios.post(loginUrl,
            {
                "email": newEmail,
                "password": "password123"
            }).then(async function (response) {
                console.log((response.data))
                let token = response.data.authentication.token
                console.log('TOKEN-------', token);

                expect(response.status).to.equal(200, 'incorrect status code for Login POST api')
                return token;
            })
        return response;
    }
}
module.exports = Login
