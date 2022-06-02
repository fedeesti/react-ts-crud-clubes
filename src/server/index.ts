import express from 'express';
import teams from '../data/equipos.db.json';

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/v1/teams', (_req, res) => {
  res.status(200).json(teams);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
