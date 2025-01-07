// src/repositories/WordRepository.js
export class WordRepository {
    constructor() {
        this.words = [];
    }

    async addWord(word) {
        this.words.push(word);
        return word;
    }

    async getAllWords() {
        return [...this.words];
    }

    async deleteWord(word) {
        const initialLength = this.words.length;
        this.words = this.words.filter(w => w !== word);
        return {
            deleted: this.words.length < initialLength,
            word
        };
    }
}

