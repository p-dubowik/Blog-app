import { Container } from "react-bootstrap";
import PostEditForm from "../../features/PostEditForm/PostEditForm";

const PostEdit = () => {
    return (
        <Container>
            <h1>Edit Post</h1>

            <PostEditForm />
        </Container>
    )
}

export default PostEdit;