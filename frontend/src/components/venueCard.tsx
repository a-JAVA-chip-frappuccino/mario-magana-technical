import { Venue } from "@frontend/app/api/venue/route";
import Image from "next/image";

type VenueCardProps = {
    venue: Venue;
};

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
    return (
        <div >
            <Image
                src={venue.image_url}
                alt={venue.name}
                width={400}
                height={300}
            />
            <div>
                <h3>{venue.name}</h3>
                <p>{venue.city}, {venue.state}</p>
                <p>{venue.country}</p>
                <p>${venue.price} per night</p>
                <p>{venue.description}</p>
            </div>
        </div>
    );
};