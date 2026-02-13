import express from 'express';
import cors from 'cors';

import dictionaryRouter from './routes/urbanDictionary.js';

const PORT = process.env.PORT || 5000;

const app = express();

// Routes
app.use('/api', dictionaryRouter);

// Enable cors
app.use(cors());

app.use(express.static('/public'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
