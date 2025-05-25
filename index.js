const express = require('express');
const urlRoutes = require('./routes/url');
const { connectDB } = require('./connection');
const Url = require('./models/url');

const app = express();
const port = 8001;

app.use(express.json());

connectDB('mongodb://127.0.0.1:27017/short-url').then(() => {
    console.log('coneected to DB')
})

app.use('/url', urlRoutes);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: { timestamp: Date.now()}
            }
        }
    )
    res.redirect(entry.redirectUrl);
})

app.listen(port, () => {
    console.log(`Server running at post ${port}`);
})

