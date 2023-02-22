import { GetStaticProps } from 'next';
import { Post } from "@/types/Post";
import { ParsedUrlQuery } from 'querystring';

type Props = {
    post: Post
}

const BlogItem = (  { post }: Props) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </div>
    );
}




export default BlogItem;


export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    const paths = posts.map(post => ({
        params: {
            id: post.id.toString()
        }
    }));

    return { paths, fallback: 'blocking' }
}


interface IParams extends ParsedUrlQuery {
    id: string
}
export const getStaticProps: GetStaticProps = async(context) => {
    
    const {id} = context.params as IParams;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}