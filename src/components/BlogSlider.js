import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BlogSlider.css';

const BlogSlider = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <Carousel>
      {posts.map((post, index) => (
        <Carousel.Item key={index}>
          <div className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BlogSlider;