import { Container } from "react-bootstrap";
import PostAddForm from "../../features/PostAddForm/PostAddForm";

const PostAdd = () => {
    return (
        <Container>

            <h1>Add post</h1>

            <PostAddForm />
            
        </Container>
    )
}

export default PostAdd;