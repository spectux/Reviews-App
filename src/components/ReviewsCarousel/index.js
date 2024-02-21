import {useState} from 'react'
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  const handlePrevReview = () => {
    setCurrentReviewIndex(prevIndex =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    )
  }

  const handleNextReview = () => {
    setCurrentReviewIndex(prevIndex =>
      prevIndex === reviewsList.length - 1 ? prevIndex : prevIndex + 1,
    )
  }

  return (
    <div className="reviews-carousel-container">
      <h1 className="review-heading">Reviews</h1>
      <div className="review">
        <img
          src={reviewsList[currentReviewIndex].imgUrl}
          alt={reviewsList[currentReviewIndex].username}
          className="profile-image"
        />
        <h2 className="username">{reviewsList[currentReviewIndex].username}</h2>
        <p className="company">{reviewsList[currentReviewIndex].companyName}</p>
        <p className="description">
          {reviewsList[currentReviewIndex].description}
        </p>
      </div>
      <div className="arrow-buttons">
        <button
          className="arrow-button"
          onClick={handlePrevReview}
          disabled={currentReviewIndex === 0}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-icon"
          />
        </button>
        <button
          className="arrow-button"
          onClick={handleNextReview}
          disabled={currentReviewIndex === reviewsList.length - 1}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow-icon"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
