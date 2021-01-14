import React, { useEffect, useState } from 'react';
import { Post } from "../Post"
import { Jumbotron } from "reactstrap"

export const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    useEffect(() => {
        if (searchTerms === "") {
            console.log(searchTerms)
            console.log("true")
            fetch('/api/Post')
                .then(res => res.json())
                .then(data => setPosts(data));
        }
        else {
            console.log(searchTerms)
            console.log("false")
            fetch(`/api/Post/search?q=${searchTerms}`)
                .then(res => res.json())
                .then(data => setPosts(data));
        }
    }, [searchTerms]);

    const handleSearchChange = (event) => {
        setSearchTerms(event.target.value)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Jumbotron className="ml-4 mb-n3 py-2 font-weight-bold" style={{ width: 600, height: 50 }}><u>Search Posts:</u>
                    <input type="text"
                        className="ml-4"
                        onChange={handleSearchChange}
                        style={{ width: 400 }}
                        placeholder="Enter your search terms here . . ."
                    />
                </Jumbotron>
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};