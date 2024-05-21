const express = require('express');
const bookRouter = require('./routes/bookRouter');
const app = express();

app.use(express.json()); // 
app.use('/books', bookRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
