# TIME: You have 40-45 minutes to complete this to the best of your ability.
> [!CAUTION]
> You should commit whatever you have at the end of the interview.  Late submissions will not be taken.

> [!IMPORTANT]  
>  This is a UI/UX role, so I would be sure to take adequate time to make that look great.  Also, explaining what you are doing and why can go a long way.  Keep in mind we are looking to hire someone to help level up the teams UI/UX skills, so we want to see how you communicate.

> [!TIP]  
> I would start with wiring up network calls (venue & user) and styling the UI before starting any of the bonus things like filtering, custom hooks, pagination, etc.  I encourage you to get creative.  Again we don't expect you to solve all of the problems and this is primarily a UI/UX role so be sure to take some time to make it look amazing.

# Next.js Venue Explorer

🚨 **Feel free to check out React, Tailwind CSS, and other docs, but avoid just looking up solutions.**  

## Overview  
Welcome to the Next.js Venue Explorer! This project lets you fetch user details and venue listings via API endpoints to build a dynamic browsing experience. The frontend is styled with Tailwind CSS.  

### 🔥 Focus Areas  
- **Fix state issues**  
- **Limit unnecessary network calls**  

## Goal  
Pick what you want to tackle, but by the end, we need a **nicely styled, responsive venue list**.  
🎯 **Bonus:**  
- Filtering options  
- Local storage filter caching  

## API Endpoints  

### 1️⃣ **User Endpoint**  
- `GET /api/user` → Returns user details  
- Simulated delay to mimic real-world API calls  

### 2️⃣ **Venues Endpoint**  
- `GET /api/venue` → Fetches venue list  
- Supports filtering:  
  - `name`, `city`, `state`, `country`  
  - `minPrice`, `maxPrice`  
- Simulated delay for realism  
- **Bonus:** Pagination (Requires FE and NextJS server side code change) 

## Tech Stack  
- **Next.js** → API & UI framework  
- **Tailwind CSS** → Styling  
- **Unsplash** → Venue images  

## Next Steps  
✅ **Must-Have:**  
- A **functional, responsive UI** for venue browsing  

🚀 **Bonus Challenges:**  
- Implement filtering 
- Optimize performance (pagination, debounce, `Promise.all`)  
- Build a custom **local storage hook** for caching filters (If you can't use hook feel free to just use localStorage) 

👨‍💻 **Anything else you can think of—make it great!** Let’s build something awesome together.  
