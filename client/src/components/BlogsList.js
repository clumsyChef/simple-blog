const BlogsList = (props) => {
    const { title, content } = props;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default BlogsList;
