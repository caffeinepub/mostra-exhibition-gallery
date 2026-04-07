# Mostra Exhibition Gallery

## Current State
New project. Only empty scaffold files exist (no app code yet).

## Requested Changes (Diff)

### Add
- **Homepage**: Hero section with full-bleed dark image, serif headline "CURATED ELEGANCE", subtext, CTA buttons (Explore Exhibitions, Book a Consultation), gold-outline button style
- **About Page**: Brand story, mission statement, values section
- **Services Page**: Four service cards - Exhibition Hosting, Artist Collaboration, Brand Promotion, Event Curation
- **Gallery Page**: Image grid with filtering; images sourced from blob-storage via admin panel
- **Collaboration Page**: Lead capture form (name, email, phone, interest, message) with Interakt webhook placeholder
- **Contact Page**: Contact form, floating WhatsApp button, embedded map placeholder for Rajkot, structured business contact info, SEO-optimized
- **Privacy Policy Page**: Standard privacy policy copy
- **Terms & Conditions Page**: Standard T&C copy
- **Admin Dashboard** (password-protected): View/filter/update all CRM leads, manage gallery images (add/edit/remove)
- **Floating WhatsApp button**: Fixed bottom-right on all pages, pre-filled message
- **Footer**: Social links (Instagram, Facebook, Twitter), Privacy Policy & T&C links, copyright
- **SEO meta tags** on all pages: title, description, keywords optimized for exhibition gallery, Rajkot, artist collaboration

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan

### Backend (Motoko)
1. **Lead CRM**
   - `Lead` record: id, name, email, phone, message, source ("collaboration" | "contact"), timestamp, status ("new" | "contacted" | "converted" | "closed")
   - `submitLead(name, email, phone, message, source)` → public, no auth
   - `getLeads()` → admin only
   - `updateLeadStatus(id, status)` → admin only
   - `deleteLead(id)` → admin only

2. **Gallery Content Management**
   - `GalleryItem` record: id, title, artist, description, imageUrl (blob-storage URL), category, order, createdAt
   - `addGalleryItem(...)` → admin only
   - `updateGalleryItem(...)` → admin only
   - `removeGalleryItem(id)` → admin only
   - `getGalleryItems()` → public

3. **Admin Auth**
   - Use `authorization` Caffeine component for role-based access (admin role)
   - Admin password setup via principal-based auth

4. **Interakt Webhook Placeholder**
   - `triggerInteraktWebhook(leadData)` stub using `http-outcalls` component — POST to placeholder URL that admin can configure

### Frontend (React + TypeScript)
1. **Routing**: React Router with pages: `/`, `/about`, `/services`, `/gallery`, `/collaboration`, `/contact`, `/privacy`, `/terms`, `/admin`
2. **Layout**: `<Layout>` wrapper with Navbar + Footer + FloatingWhatsApp on all public pages
3. **Design tokens**: OKLCH-based black/white/gold palette, Playfair Display (serif headings), Inter (body)
4. **Pages**: All 8 public pages + admin dashboard
5. **Admin**: Login gate → leads table with filters + status updates → gallery item CRUD with blob-storage upload
6. **Forms**: React Hook Form, client-side validation, backend submission + webhook stub
7. **SEO**: `<Helmet>` with per-page meta tags
8. **WhatsApp**: Fixed floating button (bottom-right), pre-filled URL encoding
9. **Blob storage**: Gallery image upload in admin, displayed in public gallery grid
