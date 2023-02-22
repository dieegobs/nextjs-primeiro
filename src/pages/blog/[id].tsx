import { Post } from "@/types/Post";

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


export const getStatickPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    const paths = posts.map(post => ({
        params: {
            id: post.id.toString()
        }
    }));

    return { paths, fallback: false }
}

export const getStatickProps = async() => {

}