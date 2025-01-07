// src/controllers/WordController.js
export class WordController {
    constructor(wordService) {
        this.wordService = wordService;
    }

    addWord = async (req, res, next) => {
        try {
            const { word } = req.body;
            const result = await this.wordService.addWord(word);
            res.status(200).json(result);
        } catch (error) {
            if (error.message === 'Invalid word') {
                res.status(422).json({ errorMsg: error.message });
            } else {
                next(error);
            }
        }
    };

    getPhrase = async (req, res, next) => {
        try {
            const phrase = await this.wordService.getPhrase();
            res.status(200).json({ phrase });
        } catch (error) {
            next(error);
        }
    };

    getStats = async (req, res, next) => {
        try {
            const stats = await this.wordService.getStats();
            res.status(200).json(stats);
        } catch (error) {
            next(error);
        }
    };

    deleteWord = async (req, res, next) => {
        try {
            const { word } = req.params;
            const result = await this.wordService.deleteWord(word);
            if (result.deleted) {
                res.status(200).json({ word: result.word });
            } else {
                res.status(404).json({ errorMsg: 'Word not found' });
            }
        } catch (error) {
            if (error.message === 'Invalid word') {
                res.status(422).json({ errorMsg: error.message });
            } else {
                next(error);
            }
        }
    };

    generateWords = async (req, res, next) => {
        try {
            const { count } = req.params;
            const words = await this.wordService.generateWords(parseInt(count));
            res.status(200).json(words);
        } catch (error) {
            next(error);
        }
    };
}