"use client";

import { NavBar } from "@frontend/components/navBar";
import { Venue } from "./api/venue/route";
import { VenueCard } from "@frontend/components/venueCard";
import { User } from "./api/user/route";
import { Footer } from "@frontend/components/footer";

// If you end up using Promise.all, you will have to implement it yourself
const promiseAll = function<T>(promises: Promise<T>[]) {
  // Please implement promise.All don't  just make this a wrapper
  return new Promise<T[]>((resolve, reject) => {
    return resolve([]);
  });
};

export default function Home() {

  const venues: Venue[] = [];
  let user: User | null = null;


  // make network call to fetch venue
  // /api/venue

  // After you style the page (Make it responsive)

  return (
    <div>
      {user && (<NavBar user={user} />)}
      <main>
        {venues.map(venue => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </main>
        <Footer />
    </div>
  );
}
