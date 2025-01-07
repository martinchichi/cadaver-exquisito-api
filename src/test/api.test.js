import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

describe('Word API Tests', () => {
    test('Add valid word', async () => {
        const response = await axios.post(`${API_URL}/words`, { word: 'hello' });
        expect(response.status).toBe(200);
        expect(response.data).toBe('hello');
    });

    test('Add invalid word', async () => {
        try {
            await axios.post(`${API_URL}/words`, { word: '123' });
        } catch (error) {
            expect(error.response.status).toBe(422);
        }
    });

    test('Get phrase', async () => {
        const response = await axios.get(`${API_URL}/words/phrase`);
        expect(response.status).toBe(200);
        expect(typeof response.data.phrase).toBe('string');
    });
});