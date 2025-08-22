import axios from "axios";
import { useState, useEffect } from "react";
import { ReviewSectionProps, Review } from "@/app/interfaces";
import { ReviewCard } from "../Cards/ReviewCard";

const ReviewSection = ({ productId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/products/reviews/${productId}`
        );
        setReviews(response.data as Review[]);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId, baseUrl]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="flex flex-row items-start justify-center flex-wrap px-[79px] gap-[40px]">
      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length > 0 ? (
        reviews.map((review) => <ReviewCard key={review.id} {...review} />)
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewSection;
