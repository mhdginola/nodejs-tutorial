import express from 'express';
import * as controller from '../controllers/index.js';

const router = express.Router();

router.get('/', controller.readMany);
router.post('/', controller.create);

export default router;
