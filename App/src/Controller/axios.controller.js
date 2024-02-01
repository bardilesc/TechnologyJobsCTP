const axios = require('axios');

class AxiosController {
    constructor(url) {
        this.url = url;
    }

    async consultarGet() {
        try {
            const response = await axios.get(this.url);
            console.log('GET request successful');
            console.log('Response data:', response.data);
        } catch (error) {
            console.error('Error making GET request:', error.message);
        }
    }

    async crearPost(payload) {
        try {
            const response = await axios.post(this.url, payload);
            console.log('POST request successful');
            console.log('Response data:', response.data);
        } catch (error) {
            console.error('Error making POST request:', error.message);
        }
    }

    async actualizarPut(resourceId, payload) {
        try {
            const response = await axios.put(`${this.url}/${resourceId}`, payload);
            console.log('PUT request successful');
            console.log('Response data:', response.data);
        } catch (error) {
            console.error('Error making PUT request:', error.message);
        }
    }

    async eliminarDelete(resourceId) {
        try {
            const response = await axios.delete(`${this.url}/${resourceId}`);
            console.log('DELETE request successful');
            console.log('Response data:', response.data);
        } catch (error) {
            console.error('Error making DELETE request:', error.message);
        }
    }
}

module.exports = AxiosController;