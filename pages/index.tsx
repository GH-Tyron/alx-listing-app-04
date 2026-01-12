import { useEffect, useState } from "react";
import api from "@/lib/axios";
import PropertyCard from "@/components/property/propertyCard";

interface Property {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await api.get("/properties");
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
