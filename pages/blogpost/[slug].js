import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../styles/[slug].module.css';
import * as fs from 'fs';

const Slug = ({ blog }) => {
    return (
        <div className={styles.blog_container}>
            <h2>Title: {blog.title}</h2>
            <hr />
            <div className={styles.details}>{blog.content}</div>
            <h3>Writer: {blog.author} </h3>
        </div>
    );
};
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-next-js' } },
        ],
        fallback: false, // can also be true or 'blocking'
    }
}
export async function getStaticProps(context) {
    const { slug } = context.params;
    const blog = await fs.promises.readFile(`blog_data/${slug}.json`, 'utf-8');
        return {
            props: {
                blog: JSON.parse(blog),
            }
        }
    }

export default Slug;