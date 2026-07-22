import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostForm from "./components/pages/PostForm/PostFrom";
import PostEditForm from "./components/pages/PostEditForm/PostEditForm";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from "react-bootstrap";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";


function App() {
  return (
    <>
      <Header />

    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostForm />} />
        <Route path="/post/edit/:id" element={<PostEditForm />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
    
      <Footer />
    </>
  );
}

export default App;
