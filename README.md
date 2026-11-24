# Mamun Autos - Premium Multi-Brand Car Showroom Website

A modern, elegant, premium-looking, and fully responsive website frontend designed for **Mamun Autos**, an international multi-brand luxury car showroom.

---

## 1. Project Overview

**Mamun Autos** specializes in offering certified luxury sedans, premium SUVs, sports coupes, and hybrid/electric vehicles from world-renowned automotive marques including Mercedes-Benz, BMW, Porsche, Audi, Land Rover, Lexus, Toyota, Honda, Nissan, and Hyundai.

This project delivers a complete frontend experience with interactive client-side filtering, searching, sorting, gallery inspection, and financial calculations—with zero external framework dependencies (pure HTML5, CSS3, Bootstrap 5.3, and Vanilla JavaScript).

---

## 2. Technology Stack

- **HTML5**: Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<figure>`).
- **CSS3**: Custom design tokens, CSS variables, glassmorphic backdrops, smooth transforms, responsive grids.
- **Bootstrap 5.3.3**: Grid system, modals, offcanvas drawers, responsive utilities, and cards.
- **JavaScript (Vanilla JS - ES6+)**: Centralized 20-vehicle automotive database, live multi-criteria filtering, URL query syncing, real-time auto loan EMI calculator, and form validation.
- **Typography**: Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit) for headings & [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for body & specs).
- **Icons**: Font Awesome 6.5 & Custom Vector SVGs.

---

## 3. Design System & Visual Identity

- **Primary Dark**: `#0B0D12` (Obsidian Showroom Black)
- **Secondary Dark**: `#131720` (Deep Charcoal Studio Surface)
- **Accent Gold**: `#D4AF37` / `#E6C252` (Luxury Warm Gold)
- **Light Surfaces**: `#FFFFFF` and `#F8F9FC` (High-contrast clean automotive gallery background)
- **Text**: Dark Gray (`#0F172A`) for light backgrounds, Crisp Silver (`#E2E8F0` / `#94A3B8`) for dark accents.

---

## 4. Website Pages & Key Features

### A. Homepage (`index.html`)
1. **Top Announcement Bar**: Working hours, showroom address, direct hotline, and social links.
2. **Sticky Navigation Bar**: Smooth background blur on scroll, active page indicator, mobile hamburger menu, and "Browse Cars" button.
3. **Hero Section**: Headline *"Find Your Perfect Drive."*, supporting luxury statement, explore inventory CTAs, and an interactive **Find In Showroom** quick search widget (Brand, Category, Budget).
4. **Key Statistics Ribbon**: 500+ luxury cars delivered, 15+ global brands, 150-point inspection, 99% satisfaction.
5. **Featured Showroom Vehicles**: 6 hand-picked flagship cars with badges (*"Featured"*, *"New Arrival"*, *"Popular"*), specs pills (mileage, transmission, fuel, body type), price tags, and quick WhatsApp inquiry triggers.
6. **Browse by Brand**: 10 international automotive brand cards featuring custom retina vector SVGs and car counts.
7. **Browse by Body Type**: 8 visual category cards (Sedan, SUV, Sports Car, Luxury Car, Electric Vehicle, Coupe, Hatchback, All Collections).
8. **Why Choose Us**: 6 core advantages with golden badges and icons.
9. **Promotional Privilege Banner**: Limited-time financing & bespoke delivery callout.
10. **Customer Testimonials**: 5-star verified buyer reviews with client profiles.
11. **Showroom Visit & Inquiry Section**: Physical location, embedded Google Map, business hours, and consultation form with real-time feedback.
12. **Footer**: Brand synopsis, quick links, popular marques, VIP hours, and floating WhatsApp contact.

---

### B. Vehicle Inventory Page (`inventory.html`)
1. **Dynamic URL Query Syncing**: Supports links such as `inventory.html?brand=Porsche`, `inventory.html?category=SUV`, and `inventory.html?maxPrice=70000`.
2. **Comprehensive Sidebar Filters**:
   - Keyword live search (model, brand, engine, color).
   - Brand select (populated with vehicle counts).
   - Body category select.
   - Interactive price range slider with real-time budget readout ($20,000 to $200,000).
   - Minimum manufacturing year.
   - Fuel & propulsion type (Petrol, Diesel, Hybrid, Electric).
   - Transmission type (Automatic / Manual).
3. **Active Filter Pills**: Chips showing current active filters with individual "x" removal buttons and a "Clear All" action.
4. **Sorting Controls**:
   - Newest First
   - Oldest First
   - Price: Low to High
   - Price: High to Low
   - Mileage: Low to High
5. **Responsive Offcanvas Mobile Filter Drawer**: Floating button on mobile screens to toggle full filters cleanly without cluttering the screen.
6. **Zero-Results Empty State**: Friendly feedback illustration with a one-click *"Reset All Filters"* button.
7. **Pagination / Load More**: Scalable listing display.

---

### C. Car Details Page (`car-details.html`)
1. **Dynamic Parameter Loading**: Reads `?id=car-X` from the URL to display full specifications, photos, and descriptions for any vehicle, with automatic fallback if accessed directly.
2. **Interactive Multi-Angle Gallery**:
   - High-resolution main image container with previous/next controls.
   - Clickable thumbnail carousel strip with active gold indicator.
3. **Key Specifications Matrix**: Year, odometer, transmission, fuel type, engine capacity, horsepower, drivetrain, exterior color, and interior upholstery.
4. **Comprehensive Equipment Checklist**: Categorized by *Safety & Driver Assistance*, *Comfort & Luxury*, *Technology & Connectivity*, and *Performance & Dynamics*.
5. **Interactive Auto Loan / EMI Calculator**:
   - Input fields for vehicle price, down payment, interest rate, and tenure (36, 48, 60 months).
   - Instant calculation of estimated monthly installment using the standard financial amortization formula.
6. **Direct Action CTAs**:
   - Schedule VIP Test Drive modal with date/time slot picker.
   - WhatsApp Direct Inquiry button pre-populated with exact vehicle brand, model, year, VIN, and price.
   - Request Call Back modal.
7. **Similar Vehicles Section**: Dynamically showcases 3 related cars of matching brand or category.

---

### D. Brands Page (`brands.html`)
1. Dedicated brand catalog displaying 10 international marques.
2. Real-time brand search filter.
3. Brand heritage, year founded, country of origin, and vehicle count.
4. One-click *"Explore Brand"* button linking directly to filtered inventory.
5. Bespoke supercar and custom import sourcing request callout.

---

### E. About Us Page (`about.html`)
1. The Mamun Autos heritage narrative and founding story.
2. Mission and Vision commitments.
3. Detailed breakdown of the **Mamun 150-Point Certification Standard** across 4 stages (Structural, Powertrain, Electrical/OBD-II, Road Test).
4. Leadership & technical team profiles.
5. High-resolution showroom gallery preview.

---

### F. Contact Us Page (`contact.html`)
1. Direct contact info cards (Gulshan Showroom, Sales Hotlines, WhatsApp Concierge, VIP Operating Hours).
2. Multi-field inquiry form with client-side HTML5 validation.
3. Interactive Google Map embed with visitor amenities list (Valet parking, Wi-Fi, Espresso lounge).
4. Frequently Asked Questions (FAQ) accordion covering inspections, BRTA documentation, trade-ins, and financing.

---

## 5. Project File Structure

```
mamun_autos/
│
├── index.html                  # Homepage with hero, featured cars, brands, categories
├── inventory.html              # Full inventory listing with live filters & sorting
├── car-details.html            # Detailed car page with gallery, specs, EMI calculator
├── brands.html                 # Dedicated brand portfolio page with search
├── about.html                  # Showroom legacy, team, and 150-point inspection
├── contact.html                # Contact cards, form validation, map, and FAQs
│
├── assets/
│   ├── css/
│   │   └── style.css           # Master stylesheet with luxury automotive design tokens
│   │
│   ├── js/
│   │   ├── cars-data.js        # Centralized 20+ vehicle database & helper services
│   │   ├── main.js             # Global navigation, sticky header, validation, favorites
│   │   └── inventory.js        # Live filter engine, sorting, and pagination
│   │
│   └── images/
│       ├── logo.svg            # Mamun Autos luxury automotive crest emblem & wordmark
│       ├── brands/             # Retina vector SVGs for all marques (BMW, Mercedes, etc.)
│       ├── cars/               # Fallback vector vehicle illustrations
│       ├── banners/            # Showroom hero graphics
│       └── showroom/           # High-resolution architectural showroom renders
│
└── README.md                   # Complete documentation & developer guide
```

---

## 6. How to Run Locally

You can preview the website using any standard modern web browser:

### Option A: Local Python Server (Recommended)
Open your terminal inside `/var/www/html/mamun_autos` and run:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option B: Direct Browser Open
Simply double-click or open any HTML file (e.g. `index.html`) in Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge.

---

## 7. Future Backend Migration (Laravel / PHP Architecture Note)

The codebase is organized specifically to make future transition to Laravel seamless:
- **Vehicle Models**: The JSON schema in `assets/js/cars-data.js` maps 1:1 to an Eloquent `Vehicle` model and database migration.
- **Card Templates**: The HTML generator in `CarService.createCarCardHTML()` can be converted directly into a Blade component (`<x-car-card :car="$car" />`).
- **Filter Query Parameters**: The filter state keys (`brand`, `category`, `maxPrice`, `year`, `fuel`, `sort`) correspond directly to standard Laravel request inputs (`$request->query('brand')`) for Eloquent `Vehicle::filter($request)->paginate(9)`.

---

© 2026 **Mamun Autos**. Excellence in Motion.
# mamun-autos
