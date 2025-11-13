//create a server
import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Hello from Express.js server!');
});
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});
app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}! Welcome to our server.`);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);
app.use(express.urlencoded({ extended: true }));
app.get('/form ', (req, res) => {
    res.sendFile()
});;        
