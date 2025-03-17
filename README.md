# TIME: You have 40-45 minutes to complete this to the best of your ability.

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
- **Bonus:** Pagination  

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
