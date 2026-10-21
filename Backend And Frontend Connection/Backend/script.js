
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route — sends jokes to React
app.get('/api/jokes', (req, res) => {
    res.json([
        {
            id: 1,
            joke: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
            id: 2,
            joke: 'Why did the developer go broke? Because he used up all his cache!'
        },
        {
            id: 3,
            joke: 'There are 10 kinds of people: those who understand binary and those who don’t.'
        }
    ]);
});

// Features route
app.get('/features', (req, res) => {
    res.send('Welcome to the Features Page!');
});

// Game route
app.get('/game', (req, res) => {
    res.send('Welcome to the Game Page!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
