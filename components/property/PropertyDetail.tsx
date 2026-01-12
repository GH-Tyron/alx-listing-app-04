import ReviewSection from "./ReviewSection";

interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    image: string;
}

interface PropertyDetailProps {
    property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Property Image */}
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg"
            />

            {/* Property Info */}
            <div className="mt-6">
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <p className="text-gray-500 mt-2">{property.location}</p>

                <p className="mt-4 text-lg">{property.description}</p>

                <p className="mt-4 text-xl font-semibold">
                    ${property.price} / night
                </p>
            </div>

            {/* Reviews */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                <ReviewSection propertyId={property.id} />
            </div>
        </div>
    );
}
