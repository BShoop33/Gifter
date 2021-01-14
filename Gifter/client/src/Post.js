import React from "react";

import { Card, CardBody, CardImg } from "reactstrap"

export const Post = ({ post }) => {
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
            </CardBody>
        </Card>
    );
};