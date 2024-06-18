import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, 'blogPosts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
        setLoading(false);
      } else {
        console.log('No such document!');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!post) {
    return <div className="blog-post">Post not found</div>;
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;