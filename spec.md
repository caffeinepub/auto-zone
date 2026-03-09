# AUTO ZONE

## Current State
Single-page website for Auto Zone automobile service center. Backend has `getAllBookings()` and `getAllContacts()` functions that return stored booking and contact/enquiry records. The frontend has no admin view to see these records.

## Requested Changes (Diff)

### Add
- Admin Dashboard page (`/admin`) that shows:
  - All booked appointments (from `getAllBookings()`) in a table with columns: Name, Phone, Email, Vehicle, Service Type, Date
  - All customer enquiries (from `getAllContacts()`) in a table with columns: Name, Phone, Email, Service Type, Message
  - Tab switcher between "Appointments" and "Enquiries"
  - Summary counts (total bookings, total enquiries)
  - Empty state for each table when no data exists
  - A link/button in the Navbar or footer to access the admin dashboard

### Modify
- App.tsx: Add routing so `/admin` renders the Admin Dashboard page (use hash-based routing with `window.location.hash` or a simple state toggle, no router library needed)
- Navbar: Add an "Admin" link that navigates to the admin dashboard

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/AdminDashboard.tsx` with:
   - Tabs for "Appointments" and "Enquiries"
   - Tables displaying records fetched from backend using `useActor`
   - Loading state while fetching
   - Empty state message when no records
   - Summary stat cards at top
2. Update `App.tsx` to handle simple hash-based routing (`#admin` → show AdminDashboard, default → show MainPage)
3. Add "Admin" nav link in Navbar component that sets hash to `#admin`
