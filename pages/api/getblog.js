import * as fs from 'fs';

export default function handler(req, res) {
    // console.log(req.query.slug);
    fs.readFile(`blog_data/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {
           return res.status(500).json({ error: "no such blog found" })
        }
        res.status(200).json(JSON.parse(data));
    });
};