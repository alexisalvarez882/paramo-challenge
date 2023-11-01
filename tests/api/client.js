const request = require('supertest');
const defaults = require('superagent-defaults');

const defaultHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json"
};

/**
 * This class is the base request module which will be called by
 all the api route modules using Supertest dependency
 (library to make HTTP requests from node.js
 * */
class Client
{
    constructor(headers = {}) {
        this.superagent = request('https://www.balldontlie.io');
        this.request = defaults(this.superagent);
        this.setupHeaders(Object.assign({}, defaultHeaders, headers));
        this.setupEvents();
    }

    setupHeaders(headers) {
        Object.entries(headers).forEach(entry => {
            const [key, value] = entry;
            this.request.set(key, value);
        });
    }

    setupEvents() {
        if(process.env.DEBUG_REQUESTS === 'true') {
            this.request.on('request', function (req) {
                console.log(req.method, req.url, req.header);
            });
        }
    }
}

module.exports = Client;