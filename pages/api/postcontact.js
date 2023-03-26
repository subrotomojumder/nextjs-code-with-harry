import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const preFiles = await fs.promises.readdir('contactdata');
        fs.promises.writeFile(`contactdata/${preFiles.length + 1}.json`, JSON.stringify(req.body));
        res.status(200).json({ message: "you success!" });
    } else {
        res.status(200).json({ message: "It's create just contact message post" });
    }
};