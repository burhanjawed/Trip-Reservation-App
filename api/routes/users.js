import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users end point');
});

export default router;
