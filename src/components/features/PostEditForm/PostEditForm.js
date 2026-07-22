import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";


const PostEditForm = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const post = useSelector(state => state.posts.find(post => post.id === id));
    console.log(post)

    const handleSubmit = updatedPost => {
        dispatch(editPost({...updatedPost, id: id}));
        navigate('/')
    }

    if(!post) return <Navigate to="/" />


    return (
        <PostForm action={handleSubmit} actionText='Edit post' {...post} />
    )
};

export default PostEditForm;