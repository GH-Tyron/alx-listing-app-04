import { useEffect, useState } from "react";
import api from "@/lib/axios";

interface ReviewSectionProps {
    propertyId: string;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const res = await api.get(`/properties/${propertyId}/reviews`);
                setReviews(res.data);
            } catch (err) {
                console.error("Error fetching reviews", err);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, [propertyId]);

    if (loading) return <p>Loading reviews...</p>;

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.id}>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
}
