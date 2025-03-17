import { NextRequest, NextResponse } from "next/server";

export type Venue = {
    id: number;
    name: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    description: string;
    image_url: string;
    price: number;
    is_new: boolean;
}

const venueImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1509228468518-180dd4864904",
];

const venues: Venue[] = [
    ...Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `Venue ${i + 1}`,
        address_1: `${Math.floor(Math.random() * 9999)} ${['Main St', 'Broadway', 'Ocean Dr', 'Sunset Blvd', 'Maple Ave'][i % 5]}`,
        address_2: i % 4 === 0 ? `Suite ${Math.floor(Math.random() * 500)}` : "",
        city: ["New York", "Los Angeles", "Chicago", "Miami", "Seattle", "Chattanooga", "Tuscaloosa"][i % 7],
        state: ["NY", "CA", "IL", "FL", "WA", "TN", "AL"][i % 7],
        country: "USA",
        postalCode: `${10000 + i}`,
        description: [
            "Elegant venue for special occasions",
            "Beautiful beachfront venue with stunning views",
            "Rustic venue surrounded by nature",
            "Modern space in the heart of the city",
            "Picturesque winery with indoor and outdoor spaces"
        ][i % 5],
        image_url: venueImages[i % venueImages.length],
        price: Math.floor(Math.random() * 500) + 50,
        is_new: i % 10 === 0,
    }))
];

export async function GET(request: NextRequest) {
    try {

        // TODO: Bonus points if time allows - implement pagination

        const searchParams = request.nextUrl.searchParams;

        const name = searchParams.get('name');
        const minPrice = searchParams.get('minPrice');
        const maxPrice = searchParams.get('maxPrice');
        const city = searchParams.get('city');
        const state = searchParams.get('state');
        const country = searchParams.get('country');

        // adding artificial delay to simulate network latency
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));

        let filteredVenues = [...venues];

        if (name) {
            const nameStr = name.toLowerCase();
            filteredVenues = filteredVenues.filter(venue =>
                venue.name.toLowerCase().includes(nameStr)
            );
        }

        if (city) {
            const cityStr = city.toLowerCase();
            filteredVenues = filteredVenues.filter(venue =>
                venue.city.toLowerCase().includes(cityStr)
            );
        }

        if (state) {
            const stateStr = state.toLowerCase();
            filteredVenues = filteredVenues.filter(venue =>
                venue.state.toLowerCase().includes(stateStr)
            );
        }

        if (country) {
            const countryStr = country.toLowerCase();
            filteredVenues = filteredVenues.filter(venue =>
                venue.country.toLowerCase().includes(countryStr)
            );
        }

        if (minPrice) {
            const minPriceValue = Number(minPrice);
            if (!isNaN(minPriceValue)) {
                filteredVenues = filteredVenues.filter(venue =>
                    venue.price >= minPriceValue
                );
            }
        }

        if (maxPrice) {
            const maxPriceValue = Number(maxPrice);
            if (!isNaN(maxPriceValue)) {
                filteredVenues = filteredVenues.filter(venue =>
                    venue.price <= maxPriceValue
                );
            }
        }

        return NextResponse.json({
            venues: filteredVenues,
            count: filteredVenues.length,
            filters: { name, minPrice, maxPrice, city, state, country }
        });

    } catch (error) {
        console.log('Error filtering venues:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}