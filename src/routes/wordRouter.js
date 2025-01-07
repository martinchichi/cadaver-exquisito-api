import express from 'express';
import { wordControllerFactory } from '../factories/controllerFactory.js';

const router = express.Router();
const wordController = wordControllerFactory();

router.post('/words', wordController.addWord);
router.get('/words/phrase', wordController.getPhrase);
router.get('/words/stats', wordController.getStats);
router.delete('/words/:word', wordController.deleteWord);
router.post('/words/generate/:count', wordController.generateWords);

export { router as wordRouter };