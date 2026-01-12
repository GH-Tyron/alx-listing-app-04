import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
    const { query } = useRouter();
    const { id } = query;

    const [property, setProperty] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        async function fetchProperty() {
            try {
                const res = await api.get(`/properties/${id}`);
                setProperty(res.data);
            } catch (err) {
                console.error("Failed to fetch property", err);
            } finally {
                setLoading(false);
            }
        }

        fetchProperty();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!property) return <p>Property not found</p>;

    return <PropertyDetail property={property} />;
}
