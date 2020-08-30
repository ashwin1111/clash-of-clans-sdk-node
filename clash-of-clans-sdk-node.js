
const fetch = require('node-fetch');
const apiBase = 'https://developer.clashofclans.com/api';
const loginEndpoint = '/login/';
const listTokens = '/apikey/list/';
const createKeys = '/apikey/create/';
const revokeKey = '/apikey/revoke/';


module.exports = class ClashOfClansSDK {
  /**
   * @param {string} email Email for Clash of Clans Developer Account
   * @param {string} password Password for Clash of Clans Developer Account
   * @returns email, password and cookies
   */
  constructor(email, password) {
    return new Promise(async (resolve) => {
      this.email = email;
      this.password = password;
      this.responseCookies = null;

      await this.authenticate();
      resolve(this);
    });
  }

  async postRequest(apiEndpoint = null, payload = null) {
    return fetch(apiBase + apiEndpoint, {
      headers: {
        'accept': '*/*',
        'accept-language': 'en-IN,en;q=0.9',
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest',
        'cookie': this.responseCookies ? this.responseCookies : ''
      },
      'credentials': 'same-origin',
      'referrer': 'https://developer.clashofclans.com/',
      'referrerPolicy': 'no-referrer-when-downgrade',
      'body': payload ? JSON.stringify(payload) : '{}',
      'method': 'POST',
      'mode': 'cors'
    })
  }


  async authenticate() {
    try {
      const payload = {
        email: this.email,
        password: this.password
      };

      const res = await this.postRequest(loginEndpoint, payload);
      this.responseCookies = res.headers.get('set-cookie');
    } catch (err) {
      return err;
    }
  }

  
  /**
   * @returns token object
   */
  async listTokens() {
    try {
      const res = await this.postRequest(listTokens);
      return res.json();
    } catch (err) {
      return err;
    } 
  }

  /**
   * @param {Object} key Payload for creating token
   * @returns newly created key object
   */
  async createTokens(key) {
    try {
      const res = await this.postRequest(createKeys, key);
      return res.json();
    } catch (err) {
      return err;
    } 
  }


  /**
   * @param {string} keyId ID of a key which has to be deleted
   * @returns status of delete
   */
  async deleteKey(keyId) {
    try {
      const payload = {
        id: keyId
      };
      const res = await this.postRequest(revokeKey, payload);
      return res.json();
    } catch (err) {
      return err;
    } 
  }
}
