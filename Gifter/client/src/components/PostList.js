import React, { useEffect, useState } from 'react';

export const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/Post')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <img src={post.imageUrl} alt={post.title} />
                    <p>
                        <strong>{post.title}</strong>
                    </p>
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    );
};