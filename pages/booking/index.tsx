import { useState } from "react";
import api from "@/lib/axios";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await api.post("/bookings", formData);
            alert("Booking confirmed!");
        } catch {
            setError("Failed to submit booking.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* inputs omitted for brevity */}
            <button disabled={loading}>
                {loading ? "Processing..." : "Confirm & Pay"}
            </button>

            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}
