
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup, Button, Row, Col, Card } from "react-bootstrap";

const Home = () => {

    const posts = useSelector(getAllPosts);

    return(
        <Row className="mt-4">

            {posts.map(post => (
                <Col key={post.id} md='4'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text><strong className="bold">Author: </strong>{post.author}</Card.Text>
                            <Card.Text><strong className="bold">Published: </strong>{post.publishedDate}</Card.Text>

                            <Card.Text className="mt-4">{post.shortDescription}</Card.Text>

                            <Button>Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>

            ))}
        </Row>

    );
}

export default Home;