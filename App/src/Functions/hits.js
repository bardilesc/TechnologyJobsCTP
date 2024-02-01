const axios = require('axios');

class hits {
    constructor(url) {
        this.url = url;
    }

    async getLasHits() {
        var URL = this.url+"Hola"
        return [URL, "quetal"]
    }
}

module.exports = hits;