interface PropertyCardProps {
    property: {
        id: string;
        title: string;
        price: number;
        image: string;
    };
}

export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <div className="border rounded p-4">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>${property.price} / night</p>
        </div>
    );
}
