import Blogpost from "./Blogpost";

const Postlist = () => {
    const posts = [
        {
            title: "Introduction to HTML", 
            author: "Mr. Samuel",
            content: "HTML stands for Hyper Text Markup Language", 
            date: "2024-10-15"
        }, 
        {
            title: "Introduction to CSS", 
            author: "Mr. Joshua",
            content: "CSS stands for Cascading Style Sheet ", 
            date: "2024-10-20"
        }, 

        {
            title: "Introduction to Javascript", 
            author: "Mr. Phillip",
            content: "Javascript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images and pretty much everything else", 
            date: "2024-10-25"
        }, 
        {
            title: "Introduction to Typescript", 
            author: "Mr. Joshua",
            content: "Typescript is a free and open source high level programming language developed by Microsoft that adds static typing with optional type annotations to Javascript", 
            date: "2024-10-30"
        }, 

        {
            title: "Introduction React", 
            author: "Mr. Samuel",
            content: "React is a Javascript library for building user interfaces", 
            date: "2024-10-18"
        }, 
    ]; 
    return (
        <div className="post-list">
            {posts.map((post, index) => (
            <Blogpost
                key = {index}
                title = {post.title}
                author = {post.author}
                content = {post.content}
                date = {post.date}
                />
            ))}
        </div>
    );
};

export default Postlist; 