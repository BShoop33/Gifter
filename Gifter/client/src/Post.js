import React, { useEffect, useState } from "react";
import { Card, CardBody, CardImg } from "reactstrap"
import { Link } from "react-router-dom";

export const Post = ({ post }) => {

    const [comments, setComments] = useState([]);

    let identity = post.id;

    useEffect(() => {
        fetch(`/api/post/?q=${post.id}`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])

    return (
        <Card className="m-4" style={{ width: 1000 }}>
            <p className="text-left px-2 font-weight-bold">Posted by: {post.userProfile.name}</p>
            <p className="text-left px-2 font-weight-bold">Date Created: </p>
            <CardImg className="px-4" src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <strong>{post.title}</strong>
                </p>
                <p>{post.caption}</p>
                <p>{identity}</p>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
            </CardBody>
        </Card>
    );
};