import React from 'react';

const BlogPost = ({ title, author, content, date }) => {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-meta">
        by <span className="blog-author">{author}</span> on {formattedDate}
      </p>
      <p className="blog-content">{content}</p>
    </div>
  );
};

export default BlogPost;
