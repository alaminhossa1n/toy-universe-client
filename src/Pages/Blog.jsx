import useTitle from "../hooks/TitleHooks";

const Blog = () => {
    useTitle('Toy - Blog')
    return (
        <div>
            <h2>This is blog</h2>
        </div>
    );
};

export default Blog;