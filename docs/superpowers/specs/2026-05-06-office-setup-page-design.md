# Office Setup & Workspace Infrastructure Solutions Page

## Overview

A new dedicated page within the DirectShelf website for enterprise office setup and workspace infrastructure services. The page targets startups, enterprises, and Global Capability Centers (GCCs).

**Route:** `/office-setup`

**Style:** Distinct but complementary to main site — corporate/professional tones (deep blues, teals, slate) with subtle animations. Different from the D2C purple gradient aesthetic but still feels like DirectShelf.

## Technical Requirements

- React component as a new page
- Add route in `App.tsx`
- Add navigation link to Header's Solutions dropdown
- Reuse existing UI components where applicable (SectionHeading, motion animations)
- Responsive design (mobile, tablet, desktop)
- No contact form — email/phone links only

## Page Structure

### Section 1: Hero

**Background:**
- Gradient: `from-slate-900 via-blue-900 to-teal-800`
- Subtle grid pattern overlay (similar technique to main hero)
- Slower, more professional animations

**Layout (desktop):**
- Left side (60%): Content
- Right side (40%): Abstract icon composition (Building2, Users, MapPin from Lucide)

**Content:**
- Eyebrow: "Enterprise Workspace Solutions"
- Headline: "Office Setup & Workspace Infrastructure Solutions"
- Subtext: "DirectShelf supports startups, enterprises, and Global Capability Centers (GCCs) with seamless office setup, workspace infrastructure planning, employee relocation coordination, and operational execution across multiple cities."
- Primary CTA: "Get in Touch" (scrolls to CTA section)
- Secondary CTA: "Explore Solutions" (scrolls to Expertise section)

---

### Section 2: About DirectShelf

**Background:** `bg-gray-50`

**Layout:** Centered text, max-width container (`max-w-4xl`), subtle left border accent in teal

**Content:**
- Section label: "About DirectShelf" (small, uppercase, teal)
- Main paragraph: "At DirectShelf, we specialize in end-to-end office setup and workspace infrastructure solutions for fast-growing startups, enterprise businesses, and multinational organizations. From identifying the right workspace to managing operational readiness and employee relocation support, we simplify the complete office expansion journey."
- Supporting paragraph: "Our team has extensive experience supporting businesses through rapid expansion phases, ensuring seamless coordination between landlords, developers, facility teams, vendors, and internal stakeholders."

---

### Section 3: Our Expertise

**Background:** White

**Layout:** Responsive grid — 3 columns (desktop), 2 columns (tablet), 1 column (mobile)

**Cards (6 total):**

| Icon (Lucide) | Title | Description |
|---------------|-------|-------------|
| `Target` | Workspace Strategy | Office sourcing and infrastructure planning aligned with operational requirements, scalability, and workforce growth. |
| `Building2` | Managed Offices & Coworking | Flexible workspace solutions for startups and agile businesses looking for faster expansion with optimized costs. |
| `Landmark` | Enterprise Office Setup | Large-format office setup and multi-city expansion support for enterprises and GCC operations. |
| `FileText` | Lease Negotiations | Commercial discussions, lease structuring, renewals, lock-in negotiations, and documentation coordination. |
| `Settings` | Operational Execution | Resolving operational challenges during office setup including infrastructure readiness, vendor coordination, facility management, and occupancy planning. |
| `Users` | Employee Relocation Support | Coordination support for employee movement, workspace readiness, onboarding logistics, and operational transitions. |

**Card Style:**
- Icon in colored container
- Title + description
- Hover: subtle lift + shadow + faint blue tint

---

### Section 4: Why Businesses Choose DirectShelf

**Background:** `bg-gradient-to-b from-white to-slate-50`

**Layout:** 2-column grid with 3 items each

**Items (with teal checkmark icons):**
1. Strong network across commercial office parks and managed workspaces
2. Experience supporting startups, enterprises, and GCC operations
3. End-to-end execution support from requirement gathering to office handover
4. Expertise in solving operational bottlenecks during setup and expansion
5. Flexible solutions tailored for scaling businesses
6. Multi-city operational support and coordination capabilities

**Style:**
- Teal checkmark icon + text per item
- Subtle card/pill background
- Staggered fade-in animation on scroll

---

### Section 5: Select Clients

**Background:** White

**Layout:** Centered, wrapped badge row

**Clients:**
- Harbor IT Pvt Ltd
- Concentrix
- ITILITE Pvt Ltd
- Nayara Energy
- Enterprise & Startup Clients Across India

**Badge Style:**
- Rounded pill shape
- Border: `border-slate-200`
- Background: `bg-slate-50`
- Hover: elevation + blue border tint

---

### Section 6: CTA (Call to Action)

**Background:** Gradient matching hero (`from-slate-900 via-blue-900 to-teal-800`)

**Layout:** Centered content

**Content:**
- Headline: "Build & Scale Your Office Operations with DirectShelf"
- Subtext: "Whether you are setting up your first office, expanding across cities, or building enterprise workspace infrastructure, DirectShelf delivers seamless execution with speed, operational expertise, and business-focused solutions."

**Contact Links:**
- Website: www.directshelf.com (opens new tab)
- Email: sales@directshelf.com (`mailto:` link)
- Phone: 08047939544 (`tel:` link)

**Style:** Buttons/links with hover glow effect

---

## Navigation Integration

Add to Header's `solutions` array:
```typescript
{
  title: "Office Setup & Workspace Infrastructure",
  description: "End-to-end office setup solutions for startups, enterprises, and GCCs",
  href: "/office-setup"
}
```

---

## File Structure

```
src/
├── pages/
│   └── OfficeSetup.tsx          # Main page component
├── components/
│   └── office-setup/
│       ├── OfficeHero.tsx       # Hero section
│       ├── AboutSection.tsx     # About section
│       ├── ExpertiseSection.tsx # 6-card expertise grid
│       ├── WhyChooseUs.tsx      # Benefits list
│       ├── ClientsSection.tsx   # Client badges
│       └── OfficeCTA.tsx        # CTA section
```

---

## Color Palette (Corporate Theme)

- Primary gradient: `from-slate-900 via-blue-900 to-teal-800`
- Accent: Teal (`teal-500`, `teal-600`)
- Text: `slate-900`, `slate-700`, `slate-500`
- Backgrounds: `white`, `gray-50`, `slate-50`
- Borders: `slate-200`, `slate-300`

---

## Animations

- Framer Motion for scroll-triggered animations
- Slower, more subtle than main D2C site
- Staggered fade-in for cards and list items
- Gentle hover states (lift, shadow, color shift)

---

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-column grids, side-by-side hero)
