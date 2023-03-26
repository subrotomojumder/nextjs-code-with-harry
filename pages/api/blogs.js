// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let files = await fs.promises.readdir("blog_data");
  files = files.slice(0, parseInt(req.query.count))
  const allblogs = [];
  let blog;
  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    blog = await fs.promises.readFile('blog_data/'+ item, 'utf-8');
    allblogs.push(JSON.parse(blog));
  }
  res.status(200).json(allblogs)
  // fs.readdir('blog_data', (err, data) => {
  //   if (err) {
  //     res.status(500).json({ error: "something went wrong" })
  //   }
  //   res.status(200).json(data)
  // })
}
