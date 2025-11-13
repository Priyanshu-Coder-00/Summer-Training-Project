//express validator
//install -> npm install express-validator
//valid , clean, safe
import express from 'express';
import { body, validationResult } from 'express-validator';
const app = express();
//route
app.post('/user', 
    body('username').isAlphanumeric().withMessage('Username must be alphanumeric'),
  body('email').isEmail().withMessage('Invalid email address'),
    (req, res) => {         
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('User is valid');
    }
);
app.get('/form', (req, res) => {
  res.send('Hello World');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});