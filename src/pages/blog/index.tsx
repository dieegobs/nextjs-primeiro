import { Post } from '../../types/Post';


type Props = {
    posts: Post[]
}


const Blog = ( {posts}: Props) => {
    return (
        <div>
            <h1>Blog</h1>

            <ul>
                {posts.map((post, index) => (
                    <li key={index}> {post.title} </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    return {
        props: {
            posts
        },
        revalidate: 7200
    }
}


export default Blog;