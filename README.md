# Get Baked

## Overview
Get Baked is a full-stack React application that simulates a modern bakery and coffee shop with a small-town, skate-culture twist.  
Users can explore shop info, browse the menu, and dynamically add new products through a connected mock backend (`json-server`).

This project demonstrates React fundamentals, routing, CRUD operations, and modular component architecture — built as a summative React project.

---

## Folder Structure
```
summative-react-based/
├── db.json
├── package.json
├── vite.config.js
├── index.html
├── /public
│ └── favicon.ico
└── /src
├── App.jsx
├── index.css
├── App.css
├── /components
│ ├── AddProductForm.jsx
│ ├── ProductCard.jsx
│ ├── ProductList.jsx
│ ├── StoreInfo.jsx
│ ├── VisitLocations.jsx
│ └── NavBar.jsx
└── /pages
├── HomePage.jsx
├── MenuPage.jsx
├── AdminPage.jsx
└── AboutPage.jsx
```

---

## What I Did
- Configured a React Router v7 app with routes for:
  - `/` → HomePage – shop info, tagline, and location selector  
  - `/menu` → MenuPage – live menu list with CRUD operations  
  - `/admin` → AdminPage – placeholder for future management tools  
  - `/about` → AboutPage – brand mission, local artist support, and donations
- Connected to a mock backend using `json-server` on port 4000.
- Implemented live data fetching for `store_info` and `products`.
- Created a reusable Add Product Form that performs POST requests and instantly updates the UI.
- Developed modular components:
  - `StoreInfo` – loads tagline, address, and contact details  
  - `VisitLocations` – toggles between location info dynamically  
  - `ProductList` / `ProductCard` – render the interactive product menu  
  - `AddProductForm` – controlled form handling new menu items
- Designed a dark-mode aesthetic reflecting the “after-hours bakery & skate joint” theme.
- Focused on clean typography, centered layout, and consistent color accents.

---

## Build Notes

### Backend
```bash
npx json-server --watch db.json --port 4000
```

### Frontend
```bash
npm run dev
```

## Add Product Flow
1. Fill out form → POST request to backend  
2. Product instantly appears in the menu list  
3. Alert confirms successful creation  

---

## Additional Details
- Product names inspired by skating, music, and comics.  
- The HomePage helps visitors navigate multiple store locations.  
- AboutPage highlights the brand mission:
  - Support local artists  
  - Accept comic book donations  
  - Feature rotating art and music  
  - Build community through creativity and caffeine  

---

## Challenges
- Keeping multiple React states synced between form input and backend.  
- Structuring modular, reusable components.  
- Designing around a strict “live data” model with only `json-server` and POST updates.  
- Achieving clean, centered dark theme styling and spacing without CSS libraries.  

---

## Learned
- Mastered React Router v7 and route nesting.  
- Strengthened skills with hooks (`useState`, `useEffect`).  
- Practiced modular component design and state lifting.  
- Deepened understanding of CRUD logic and data flow.  
- Improved communication between frontend and mock backend.  
- Reinforced consistent commit discipline and structured Git workflow.  

---

## Design Takeaways
- Minimal layout and clean UI with strong brand story.  
- CSS tuned for alignment, text hierarchy, and color tone.  
- Intentional spacing between key sections to focus attention.  
- Product cards unified for visual balance.  
- Mobile responsiveness tested through centered flex design.  

---

## Resources Used
- [React Router v7 Documentation](https://reactrouter.com)  
- [Vite Official Docs](https://vitejs.dev)  
- [MDN Web Docs](https://developer.mozilla.org)  
- [Flatiron React Curriculum]  
- [JSON Server GitHub Repo](https://github.com/typicode/json-server)  

---

## Future Enhancements
- Product images for pies, cookies, and drinks.  
- Local artist gallery with featured work.  
- Community comics donation showcase.  
- Event calendar (open mics, artist nights, signings).  
- Customer loyalty card integration.  
- Theme toggle to switch between dark/light mode.  
- Animated transitions between pages.  

---

## Quote
> “Serving savory and sweet pies, cookies, and coffee — same vibe, different view.”  
> "Just dial 2 for a while" is a ode to Mitch Hedberg.

This is Mitch Hedberg's full joke: 
“My phone number is easy to remember. It’s 222-222-2222.

You can’t forget it — unless you forget what number I like.”

‘Hey man, what’s your number?’
‘Two.’
‘Yeah, but after that?’
‘Twelve more twos.’

I got tired of people misdialing me, so I switched to 333-333-3333.
Now nobody calls me — they think it’s busy.”

Mitch’s delivery wasn’t always exact, since Comedians always try different versions to see what hits best.
---

## Credits
Developed by **Nevin Boyd**  
Flatiron School – React Summative Project  
**Frontend:** React + Vite  
**Backend:** JSON Server (Mock API)  

