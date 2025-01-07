// src/factories/controllerFactory.js
import { WordController } from '../controllers/WordController.js';
import { WordService } from '../services/WordService.js';
import { WordRepository } from '../repositories/WordRepository.js';

export const wordControllerFactory = () => {
    const wordRepository = new WordRepository();
    const wordService = new WordService(wordRepository);
    return new WordController(wordService);
};