import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogPosts'));
        const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-grid">
        {posts.map(post => (
          <div key={post.id} className="blog-post">
            <Link to={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;