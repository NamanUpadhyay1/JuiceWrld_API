const baseUrl = 'https://api.chucknorris.io/'
const axios = require('axios')
const { expect } = require('chai')

class Utils
{
    static async statusCodeValidate(variable, code)
    {
        await expect(variable.status).to.be.equal(code)
    }

    static async urlValidate(variable, url)
    {
        expect(variable.data.url).to.contain(url)
    }
}
module.exports = Utils