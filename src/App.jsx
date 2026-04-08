import { Routes, Route } from "react-router-dom";
import './App.css'

import Header from './components/Header'
{/*import Posts from './components/Posts'*/}
import Footer from './components/Footer'
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostsPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <>
    <Header />
    {/*<Posts />*/}
    <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/post/:id" element={<IndividualPostsPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
