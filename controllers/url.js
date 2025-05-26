const { nanoid } = require('nanoid');
const Url = require('../models/url');

async function generateNewShortUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: 'URL required' });
    }

    const shortID = nanoid(8);

    await Url.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.render('home', { id: shortID });
}

async function getAnalytics(req, res) {
    shortId = req.params.shortId;
    const result = await Url.findOne({ shortId });
    return res.json({ totalclicks: result.visitHistory.length, visitHistory: result.visitHistory});
}

module.exports = { generateNewShortUrl, getAnalytics };