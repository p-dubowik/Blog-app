import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addPost } from "../../../redux/postsRedux";

const PostAddForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        author: '',
        publishedDate: '',
        shortDescription: '',
        content: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //use Date for making id
        dispatch(addPost({
            ...form,
            id: Date.now(),
        }));

        navigate('/');
    }


    return (
        <Form>

            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
            </Form.Group>

            
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Published Date</Form.Label>
                <Form.Control
                    type="date"
                    name="publishedDate"
                    value={form.publishedDate}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Short Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="2"
                    name="shortDescription"
                    value={form.shortDescription}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Main Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="10"
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button type="submit" onClick={handleSubmit}>Add Post</Button>


        </Form>
    )
}

export default PostAddForm;