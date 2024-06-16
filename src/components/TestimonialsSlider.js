import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TestimonialsSlider.css';

const TestimonialsSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonialsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(testimonialsData);
    };

    fetchTestimonials();
  }, []);

  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="testimonial">
            <p>{testimonial.text}</p>
            <p><strong>{testimonial.author}</strong></p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialsSlider;