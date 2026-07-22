import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { useState } from "react";
import { deletePost } from "../../../redux/postsRedux";


const Post = () => {
    const { id } = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === Number(id)));

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleDelete = () => {
        dispatch(deletePost(Number(id)));
        handleClose();
    }

    if(!post) return <Navigate to="/" />
    return (
    <>
        <Container className="mt-4">
            <Card>
                <Card.Body className="p-4">
                    <Row className="mb-4">
                        <Col>


                            <Card.Title className="mb-4">
                                {post.title}
                            </Card.Title>

                            <Card.Text>
                                <strong>Author:</strong> {post.author}
                            </Card.Text>

                            <Card.Text>
                                <strong>Published:</strong> {post.publishedDate}
                            </Card.Text>

                            
                                    </Col>

                            <Col xs='auto' className="d-flex align-items-start gap-2">
                                <Button as={NavLink} to={`/post/edit/${post.id}`} variant="outline-primary">
                                Edit
                                </Button>

                                <Button variant="outline-danger" onClick={handleShow}>
                                Delete
                                </Button>

                        </Col>
                    </Row>

                    <Card.Text>
                        {post.content}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>

        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                This operation will completely remove your post from the app. Are you sure you want to do that?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="danger" onClick={handleDelete}>Confirm</Button>
            </Modal.Footer>
        </Modal>

    </>
  );
}

export default Post;