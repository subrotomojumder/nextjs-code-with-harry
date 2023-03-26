import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/blogs.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as fs from 'fs';

export async function getStaticProps(context) {
  let files = await fs.promises.readdir("blog_data");
  const allCount = files.length;
  const allblogs = [];
  let blog;
  for (let i = 0; i < 3; i++) {
    const item = files[i];
    blog = await fs.promises.readFile('blog_data/' + item, 'utf-8');
    allblogs.push(JSON.parse(blog));
  }

  return {
    props: {
      blogs: allblogs,
      allCount: allCount,
    }
  }
}
const Blogs = ({ blogs, allCount }) => {
const [pegiBlogs, setPegiBlogs] = useState(blogs)
const [count, setCount] = useState(4);

 const fetchData = async() => {
   const res = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
   const data = await res.json();
   setCount(count + 2)
   setPegiBlogs(data);
  };

  return (
    <div className={styles.blog_container}>
      <h1>All blogs container</h1>
      <h4>Popular Blogs</h4>
      <main>
        <InfiniteScroll
          dataLength={pegiBlogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={allCount !== pegiBlogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {pegiBlogs.map((blog, i) =>
            <div key={blog.slug+i} className={styles.single_blog}>
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className={styles.blogH3}>{blog.title}</h3>
              </Link>
              <p>{blog.content.slice(0, 150) + "...."}</p>
              <p className={styles.author}>{blog.author}</p>
            </div>
          )}
        </InfiniteScroll>

      </main>
    </div>
  );
};

export default Blogs;