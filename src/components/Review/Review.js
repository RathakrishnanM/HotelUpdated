

// import React, { useState } from 'react';
// import './Review.css';

// const Review = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [review, setReview] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic for handling the review data (e.g., sending it to a server)
//     console.log('Review submitted:', { name, email, review });
//     // Reset the form after submission
//     setName('');
//     setEmail('');
//     setReview('');
//   };

//   return (
//     <div className="review-container">
//       <h2>We value your <span>feedback!please </span>share your thoughts by entering your review below</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Review:
//           <textarea
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Submit Review</button>
//       </form>
//     </div>
//   );
// };

// export default Review;
// ReviewForm.js
import React, { useState } from 'react';
import './ReviewForm.css';
const Review= () => {
  const [username, setUsername] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0); 
  const [showReviews, setShowReviews] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  

  const handleSubmit = async (e) => {
    console.log('Username:', username);
console.log('Review:', review);

    e.preventDefault();

    try {
      // Send review to the backend
      const response = await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, comment: review }),
      });

      if (response.ok) {
        console.log('Review submitted successfully!');
        // You can also update the UI or show a success message here
      } else {
        console.error('Failed to submit review:', response.statusText);
        // Handle error, show an error message, etc.
      }
    } catch (error) {
      console.error('Error submitting review:', error.message);
      // Handle error, show an error message, etc.
    }
  };
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleGetReviews = async () => {
    try {
      const response = await fetch('http://localhost:5000/reviews');
      if (response.ok) {
        const data = await response.json();
        setAllReviews(data);
        setShowReviews(true);
      } else {
        console.error('Failed to fetch reviews:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error.message);
    }
  };
  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Your Reviews values us Most</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', marginBottom: '20px', boxSizing: 'border-box' }}
            />
          </label>
          <br />
          <label>
            Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', marginBottom: '20px', boxSizing: 'border-box' }}
            />
          </label>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Rate the experience</h2>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                cursor: 'pointer',
                fontSize: '24px',
                color: star <= rating ? '#FFD700' : '#808080',
              }}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
          <br />
          <button type="submit" style={{ backgroundColor: '#6d2480', color: 'white', padding: '14px 28px', fontSize: '18px', borderRadius: '4px', cursor: 'pointer' }}>
            Submit Review
          </button>
        </form>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleGetReviews} style={{ backgroundColor: '#007BFF', color: 'white', padding: '12px 24px', fontSize: '16px', borderRadius: '4px', cursor: 'pointer' }}>
          Get All Reviews
        </button>
      </div>

      {showReviews && (
        <div>
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>All Reviews</h2>
          {allReviews.map((review) => (
            <div key={review._id}>
              <p>{review.username}</p>
              <p>{review.comment}</p>
             
              <hr />
            </div>
          ))}
        </div>
      )}
    
    </div>
  );
};

export default Review;
