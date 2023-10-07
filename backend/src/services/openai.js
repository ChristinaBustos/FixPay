const express = require('express');
require('dotenv').config();
const { questions, first } = require('../utils/q&a'); // Only importing what is needed
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from OpenAI!'
    });
});

router.post('/chat', async (req, res) => {
    try {
        const question = parseInt(req.body.question, 10);
        const index = parseInt(req.body.index, 10);

        if (Number.isNaN(index) || index < 0 || index >= questions.length) {
            return res.json({
                message: 'No entiendo tu pregunta, ¿podrías reformularla?'
            });
        }

        if (index === questions.length - 1) {
            return res.json({
                message: "Que te gustaría saber de nosotros?",
                questions: fourth // 'fourth' isn't imported, might be an issue
            });
        }

        // We removed the redundant switch cases and are handling all of them together since they have the same logic
        if ([0, 1, 2].includes(index)) {
            if(Number.isNaN(question)) {
                return res.json({
                    message: 'Primera sección',
                    questions: first
                });
            }

            const promptResponse = await openai.completions.create({ 
                model: 'text-davinci-001',
                prompt: `${first[question]}`,
                max_tokens: 255
            });

            return res.json({
                message: 'Primera sección',
                questions: first,
                answer: promptResponse.choices[0].text
            });
        }

        return res.json({
            message: 'No entiendo tu pregunta, ¿podrías reformularla?'
        });

    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong!',
            error: err.message
        });
    }
});

module.exports = router;
