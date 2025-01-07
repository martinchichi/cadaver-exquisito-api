// src/services/WordService.js
import axios from 'axios';

export class WordService {
    constructor(wordRepository) {
        this.wordRepository = wordRepository;
    }

    validateWord(word) {
        if (!word || typeof word !== 'string' || !/^[a-záéíóúñ]+$/i.test(word)) {
            throw new Error('Invalid word');
        }
        return word.toLowerCase();
    }

    async addWord(word) {
        const validatedWord = this.validateWord(word);
        return await this.wordRepository.addWord(validatedWord);
    }

    async getPhrase() {
        const words = await this.wordRepository.getAllWords();
        return words.join(' ');
    }

    async getStats() {
        const words = await this.wordRepository.getAllWords();
        return words.reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, {});
    }

    async deleteWord(word) {
        const validatedWord = this.validateWord(word);
        return await this.wordRepository.deleteWord(validatedWord);
    }

    async generateWords(count) {
        const response = await axios.get(`https://texto.deno.dev/palabras?cantidad=${count}`);
        const { palabras } = response.data;
        
        for (const word of palabras) {
            await this.addWord(word);
        }
        
        return palabras;
    }
}