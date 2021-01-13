import React, { useEffect, useState } from "react";
import { Row, Col, Button, Jumbotron, Form } from "reactstrap"
import { useHistory } from "react-router-dom";
import Moment from "react-moment";

export const PostForm = () => {
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [userProfileId, setUserProfileId] = useState("");
    const [date, setDateCreated] = useState("");
    const history = useHistory();


    // const dateToFormat = '1976-04-19T12:59-0500';
    const addPost = (post) => {
        return fetch('/api/Post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
            .then(res => res.json());
    }

    const submit = (e) => {
        const post = {
            imageURL,
            title,
            caption,
            userProfileId: +userProfileId,
            date
        };

        addPost(post)
        //     .then((p) => {
        //     history.push("/");
        // });
    };

    return (
        <>
            <Jumbotron className="ml-4 mt-4 py-2 font-weight-bold" style={{ width: 600, height: 300 }}><u>Create Post</u>
                <Form>
                    <Row className="mt-3">
                        <Col md={1}>
                            <label className="font-weight-bold">UserId</label>
                        </Col>
                        <Col className="ml-4" md={1}>
                            <input style={{ width: 400 }} onChange={(e) => setUserProfileId(e.target.value)} type="text" placeholder="Enter your user id here . . ."></input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={1}>
                            <label className="font-weight-bold">Title</label>
                        </Col>
                        <Col className="ml-4" md={1}>
                            <input style={{ width: 400 }} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter your title here . . ."></input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={1}>
                            <label className="font-weight-bold">Image</label>
                        </Col>
                        <Col className="ml-4" md={1}>
                            <input style={{ width: 400 }} onChange={(e) => setImageURL(e.target.value)} type="file"></input>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col md={1}>
                            <label className="font-weight-bold">Caption</label>
                        </Col>
                        <Col className="ml-4" md={1}>
                            <input style={{ width: 400 }} onChange={(e) => setCaption(e.target.value)} type="text" placeholder="Enter your caption here . . ."></input>
                        </Col>
                    </Row>
                </Form>
                <Row className="ml-1 mt-3">
                    <Button
                        onClick={submit}
                        color="success"
                        type="submit"
                        style={{ width: 80 }}
                    >
                        Save
            </Button>
                    <Button

                        color="danger"
                        type="submit"
                        className="ml-4"
                        style={{ width: 80 }}
                    >
                        Cancel
            </Button>
                </Row>
            </Jumbotron>
        </>
    );
};