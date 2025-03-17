"use client";

import { NavBar } from "@frontend/components/navBar";
import { Venue } from "./api/venue/route";
import { VenueCard } from "@frontend/components/venueCard";
import { User } from "./api/user/route";
import { Footer } from "@frontend/components/footer";

// If you end up using Promise.all, you will have to implement it yourself
Promise.all = function<T>(promises: Promise<T>[]) {
  return new Promise<T[]>((resolve, reject) => {
    return resolve([]);
  });
};

export default function Home() {

  const venues: Venue[] = [];
  let user: User | null = null;
   
  (async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    user = data;
  }
  )();

  // make network call to fetch venue
  // /api/venue

  // After you style the page (Make it responsive)

  return (
    <div>
      {user && (<NavBar user={user} />)}
      <main>
        {/* Add filters here */}
        {/* Filters:
          const name = searchParams.get('name');
          const minPrice = searchParams.get('minPrice');
          const maxPrice = searchParams.get('maxPrice');
          const city = searchParams.get('city');
          const state = searchParams.get('state');
          const country = searchParams.get('country'); 
        */} 
        {venues.map(venue => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
