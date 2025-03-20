"use client";

import { NavBar } from "@frontend/components/navBar";
import { Venue } from "./api/venue/route";
import { VenueCard } from "@frontend/components/venueCard";
import { User } from "./api/user/route";
import { Footer } from "@frontend/components/footer";
import { useEffect, useState } from "react";

import { useDebounce } from "@frontend/hooks/debounce.hooks";
import { useLocalStorage } from "@frontend/hooks/localstorage.hooks";

// If you end up using Promise.all, you will have to implement it yourself
// const promiseAll = function <T>(promises: Promise<T>[]) {
//   return new Promise<T[]>((resolve, reject) => {
//     return resolve([]);
//   });
// };

const promiseAll = async <T,>(promises: Promise<T>[]): Promise<T[]> => {
  return Promise.all(promises);
};

export default function Home() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [users, setUsers] = useState<User | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, venueResponse] = await promiseAll([
          fetch("/api/user").then((res) => res.json()),
          fetch("/api/venue").then((res) => res.json()),
        ]);

        setUsers(userResponse);
        setVenues(venueResponse.venues);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {users && <NavBar user={users} />}
      <main className="flex container mx-auto">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
