# Auto Zone - Professional Automobile Service Website

## Current State
The project has an existing Auto Zone website with 8 pages (Home, About, Services, Tyres & Battery, Accessories & Spare Parts, RTO Services, Contact, Service Booking) built with a black/red/metallic color scheme. The backend handles service bookings and contact form submissions.

## Requested Changes (Diff)

### Add
- Hero section with full-screen background image of mechanic in professional garage
- "Why Choose Auto Zone" section with 6 feature highlights
- "How It Works" 4-step process section
- Customer Reviews / Testimonials section
- Strong CTA section with Call Now, Book Service, Send Email buttons
- High-quality car service images throughout (hero, about, services, garage photos)
- Privacy Policy link in footer

### Modify
- Color theme: change from black/red/metallic to navy blue (#0a1f44) and white
- Restructure to single-page scroll layout with sections: Hero, About, Services, Why Choose Us, How It Works, Reviews, Contact, Footer
- Hero headline: "Professional Car Care You Can Trust"
- Hero subheadline: "30+ Years of Experience in Automotive Repair & Maintenance"
- Services section: 8 service cards (Engine Diagnostics, Oil Change & Maintenance, Brake Repair, AC Service, Battery Replacement, Tire Services, Car Inspection, General Car Repair)
- Contact section: include phone, email (vinodautozone@gmail.com), Google Maps embed placeholder, and contact form
- Footer: Home, About, Services, Contact, Privacy Policy links + email

### Remove
- Tyres & Battery page (content merged into Services)
- Accessories & Spare Parts page
- RTO Services page
- Multi-page routing structure (replaced by single-page scroll)

## Implementation Plan
1. Generate high-quality automotive images: hero background (mechanic in garage), about section image, service images for each of 8 services
2. Keep existing Motoko backend for contact form and booking submissions
3. Rebuild frontend as a single-page scroll website with:
   - Sticky navbar with logo, nav links (smooth scroll), Book Service CTA button
   - Hero section: full-screen image overlay, headline, subheadline, two CTA buttons
   - About section: text content + automotive workshop image
   - Services section: 8 cards with icons and descriptions in responsive grid
   - Why Choose Us: 6 feature cards with icons
   - How It Works: 4-step horizontal process flow
   - Customer Reviews: 3-4 testimonial cards
   - Contact section: contact info, Google Maps iframe, contact form
   - CTA banner: "Book Your Service Today" with 3 buttons
   - Footer: links, email, social
4. Apply navy blue (#0a1f44) and white design system throughout
5. Smooth scroll behavior, mobile responsive, fast loading
