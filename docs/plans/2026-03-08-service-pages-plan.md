# Service Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand the Pillar Structural Engineers SPA from 3 services to 6, add client-side routing, and create dedicated service detail pages with project galleries.

**Architecture:** Add `react-router-dom` for SPA routing. Extract shared components (Navbar, Footer) and centralize service data. Each service gets a detail page at `/services/:slug` with a placeholder project gallery.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion (`motion`), `react-router-dom`, `lucide-react`, Vite

---

### Task 1: Install react-router-dom and clean up unused dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install react-router-dom**

Run: `npm install react-router-dom`

**Step 2: Remove unused server-side dependencies**

Run: `npm uninstall express better-sqlite3 dotenv @google/genai @types/express`

**Step 3: Verify the app still builds**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add react-router-dom, remove unused server deps"
```

---

### Task 2: Create centralized service data

**Files:**
- Create: `src/data/services.ts`

**Step 1: Create the service data file**

Create `src/data/services.ts` with all 6 services. Each service has: `id`, `title`, `slug`, `description`, `iconName` (string — resolved to component at render time), `subServices[]`, `projects[]`.

```ts
export interface Project {
  title: string;
  imageUrl: string;
  caption: string;
}

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  subServices: string[];
  projects: Project[];
}

export const SERVICES: ServiceData[] = [
  {
    id: 'signage',
    title: 'Signage Structures',
    slug: 'signage-structures',
    description: 'Specialized structural analysis and design for commercial signage installations. We ensure stability against wind loads, seismic forces, and environmental conditions for all signage types.',
    iconName: 'Layout',
    subServices: ['Blade Signs', 'Channel Letters', 'Light Boxes', 'Wayfinding Signs', 'Interior Signs', 'Temporary Sign Structures', 'Monuments', 'Pylons', 'Billboards'],
    projects: [
      { title: 'Highway Billboard Pylon', imageUrl: '', caption: 'Structural design for a 60ft steel pylon billboard.' },
      { title: 'Retail Monument Sign', imageUrl: '', caption: 'Foundation and wind load analysis for retail monument.' },
      { title: 'Channel Letter Installation', imageUrl: '', caption: 'Mounting analysis for illuminated channel letters.' },
      { title: 'Wayfinding Sign System', imageUrl: '', caption: 'Multi-sign campus wayfinding structural package.' },
      { title: 'Blade Sign Design', imageUrl: '', caption: 'Cantilevered blade sign for mixed-use building.' },
    ],
  },
  {
    id: 'shade',
    title: 'Shade Cover Structures',
    slug: 'shade-cover-structures',
    description: 'Engineering for shade and cover structures that combine function with architectural appeal. From simple carports to complex playground canopies, we design for durability and code compliance.',
    iconName: 'Tent',
    subServices: ['Pergolas', 'Canopies', 'Carports', 'Playground Shade Structures'],
    projects: [
      { title: 'Commercial Pergola', imageUrl: '', caption: 'Steel pergola for an outdoor dining area.' },
      { title: 'Playground Shade Canopy', imageUrl: '', caption: 'Fabric tensile shade structure for a public park.' },
      { title: 'Residential Carport', imageUrl: '', caption: 'Freestanding aluminum carport design.' },
      { title: 'Walkway Canopy', imageUrl: '', caption: 'Covered walkway connecting commercial buildings.' },
    ],
  },
  {
    id: 'pools',
    title: 'Swimming Pools & Spas',
    slug: 'swimming-pools-spas',
    description: 'Structural engineering for in-ground pools, elevated spas, and associated deck structures. We handle soil interaction, hydrostatic pressure, and code-required barrier systems.',
    iconName: 'Waves',
    subServices: [],
    projects: [
      { title: 'Elevated Rooftop Pool', imageUrl: '', caption: 'Structural support for a rooftop pool installation.' },
      { title: 'Residential In-Ground Pool', imageUrl: '', caption: 'Shotcrete pool shell and deck engineering.' },
      { title: 'Commercial Spa Complex', imageUrl: '', caption: 'Multi-spa facility with equipment vault.' },
      { title: 'Pool Deck Renovation', imageUrl: '', caption: 'Structural assessment and redesign of existing pool deck.' },
    ],
  },
  {
    id: 'cmu',
    title: 'Exterior CMU Walls & Fences',
    slug: 'exterior-cmu-walls-fences',
    description: 'Design and analysis of concrete masonry unit walls, retaining walls, and fence systems. We ensure structural adequacy for lateral loads, soil pressure, and seismic requirements.',
    iconName: 'Brick',
    subServices: ['CMU Walls and Extensions', 'Retaining Walls', 'Fences'],
    projects: [
      { title: 'Property Boundary CMU Wall', imageUrl: '', caption: '6ft CMU block wall with pilaster reinforcement.' },
      { title: 'Retaining Wall System', imageUrl: '', caption: 'Tiered retaining wall for hillside residential lot.' },
      { title: 'Commercial Fence Enclosure', imageUrl: '', caption: 'Steel and masonry fence for equipment screening.' },
      { title: 'CMU Wall Extension', imageUrl: '', caption: 'Height extension of existing CMU boundary wall.' },
    ],
  },
  {
    id: 'staircases',
    title: 'Staircase Systems',
    slug: 'staircase-systems',
    description: 'Precision engineering for complex staircase geometries. We specialize in floating treads, spiral systems, and architectural stairs using steel, glass, and timber.',
    iconName: 'Layers',
    subServices: [],
    projects: [
      { title: 'Floating Steel Staircase', imageUrl: '', caption: 'Cantilevered steel tread staircase for modern residence.' },
      { title: 'Spiral Staircase', imageUrl: '', caption: 'Custom helical stair with glass railing system.' },
      { title: 'Commercial Open Stair', imageUrl: '', caption: 'Feature stair for a 3-story office lobby.' },
      { title: 'Exterior Metal Staircase', imageUrl: '', caption: 'Code-compliant exterior egress stair.' },
      { title: 'Timber and Steel Hybrid', imageUrl: '', caption: 'Mixed-material staircase for a luxury cabin.' },
    ],
  },
  {
    id: 'permits',
    title: 'Permit Processing',
    slug: 'permit-processing',
    description: 'We streamline the permit process by preparing complete structural submission packages, coordinating with plan reviewers, and resolving correction letters to get your project approved faster.',
    iconName: 'FileCheck',
    subServices: [],
    projects: [
      { title: 'Multi-Jurisdiction Filing', imageUrl: '', caption: 'Simultaneous permit submissions across 5 municipalities.' },
      { title: 'Expedited Commercial Permit', imageUrl: '', caption: 'Fast-track permit for a retail signage package.' },
      { title: 'Correction Letter Resolution', imageUrl: '', caption: 'Resolved 12 plan check comments in a single resubmittal.' },
      { title: 'Residential Addition Permit', imageUrl: '', caption: 'Complete structural package for a home addition.' },
    ],
  },
];
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/data/services.ts
git commit -m "feat: add centralized service data for all 6 service areas"
```

---

### Task 3: Extract Navbar and Footer into shared components

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Footer.tsx`

**Step 1: Create Navbar component**

Extract the `Navbar` component from `src/App.tsx` into `src/components/Navbar.tsx`. Change the anchor links (`#services`, `#about`, etc.) to use `react-router-dom`'s `Link` and `useNavigate` so they work from any page:

- Nav links on the homepage should smooth-scroll to sections (use `/#services` pattern)
- Nav links on service detail pages should navigate back to home then scroll
- "Get a Quote" links to `/#contact`
- Logo links to `/`

```tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary flex items-center justify-center rounded-sm">
            <div className="w-1 h-5 bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase text-brand-primary">
            Pillar <span className="font-light text-brand-secondary">Structural</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('/#contact')}
            className="bg-brand-primary text-white px-5 py-2 text-sm font-medium rounded-sm hover:bg-brand-accent transition-all"
          >
            Get a Quote
          </button>
        </div>

        <button className="md:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg font-medium text-brand-secondary text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('/#contact')}
                className="bg-brand-primary text-white px-5 py-3 text-center font-medium rounded-sm"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
```

**Step 2: Create Footer component**

Extract the `Footer` from `src/App.tsx` into `src/components/Footer.tsx`. Same navigation pattern — use `handleNavClick` for section links, `Link` for home.

```tsx
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (location.pathname === '/') {
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <div className="w-1 h-5 bg-brand-primary rounded-full"></div>
              </div>
              <span className="font-bold text-xl tracking-tighter uppercase">
                Pillar <span className="font-light text-white/60">Structural</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Pillar Structural Engineers is a leading engineering firm dedicated to providing innovative and safe structural solutions for the modern world.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-accent">Quick Links</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><button onClick={() => handleNavClick('/#services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => handleNavClick('/#about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('/#process')} className="hover:text-white transition-colors">Our Process</button></li>
              <li><button onClick={() => handleNavClick('/#contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-accent">Legal</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Pillar Structural Engineers. All rights reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

**Step 3: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: No errors (or only pre-existing ones from App.tsx which we'll fix next)

**Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/components/Footer.tsx
git commit -m "feat: extract Navbar and Footer into shared components"
```

---

### Task 4: Create the Home page

**Files:**
- Create: `src/pages/Home.tsx`

**Step 1: Create Home page**

Move Hero, Services, Process, and Contact sections from `src/App.tsx` into `src/pages/Home.tsx`. Update:

- Import `SERVICES` from `src/data/services.ts` instead of the inline constant
- Services grid renders all 6 services in 3x2 grid
- "Learn More" on each service card uses `Link` to `/services/:slug`
- Hero text references all 6 service areas
- Contact form dropdown lists all 6 services + "Other"
- Import icons dynamically based on `iconName` from service data

The icon mapping at the top of Home.tsx:

```tsx
import {
  Layout, Tent, Waves, Brick, Layers, FileCheck,
  ArrowRight, CheckCircle2, Mail, Phone, MapPin,
  ChevronRight, DraftingCompass, Ruler, HardHat
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6" />,
  Tent: <Tent className="w-6 h-6" />,
  Waves: <Waves className="w-6 h-6" />,
  Brick: <Brick className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
};
```

Updated hero paragraph:

```tsx
<p className="text-xl text-brand-secondary mb-10 max-w-lg leading-relaxed">
  Pillar Structural Engineers delivers code-compliant structural solutions for signage, shade structures, pools &amp; spas, CMU walls, staircase systems, and permit processing.
</p>
```

Updated Services section — grid becomes `md:grid-cols-3` with all 6 services, "Learn More" becomes a `Link`:

```tsx
import { Link } from 'react-router-dom';

// Inside the Services component map:
<Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:gap-3 transition-all">
  Learn More <ChevronRight className="w-4 h-4" />
</Link>
```

Updated contact form dropdown:

```tsx
<select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent transition-colors">
  {SERVICES.map((s) => (
    <option key={s.id} value={s.id}>{s.title}</option>
  ))}
  <option value="other">Other</option>
</select>
```

Service card images: Since we're using placeholder locations, remove the Unsplash `image` field. Instead, show a styled placeholder div:

```tsx
<div className="relative h-64 mb-6 overflow-hidden rounded-sm bg-gray-100 flex items-center justify-center">
  <div className="text-brand-secondary/30 flex flex-col items-center gap-2">
    {ICON_MAP[service.iconName]}
    <span className="text-xs uppercase tracking-widest font-medium">Coming Soon</span>
  </div>
  <div className="absolute top-4 left-4 p-3 bg-white shadow-lg rounded-sm">
    {ICON_MAP[service.iconName]}
  </div>
</div>
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: create Home page with 6 services, updated hero, and contact dropdown"
```

---

### Task 5: Create the Service Detail page

**Files:**
- Create: `src/pages/ServiceDetail.tsx`

**Step 1: Create ServiceDetail page**

This page reads `:slug` from the URL, looks up the service from `SERVICES`, and renders the detail view.

```tsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { SERVICES } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">Service Not Found</h1>
          <Link to="/" className="text-brand-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link to="/#services" onClick={() => { window.location.href = '/#services'; }} className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      {/* Header Banner */}
      <section className="bg-brand-primary text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{service.title}</h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">{service.description}</p>
            {service.subServices.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {service.subServices.map((sub) => (
                  <span key={sub} className="px-3 py-1 bg-white/10 rounded-sm text-sm text-white/80">
                    {sub}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Our Work</h2>
        <h3 className="text-3xl font-bold text-brand-primary mb-12 tracking-tight">Past Projects & Designs</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-brand-secondary/30">
                    <ImageIcon className="w-10 h-10" />
                    <span className="text-xs uppercase tracking-widest font-medium">Project Photo</span>
                  </div>
                )}
              </div>
              <h4 className="text-lg font-bold text-brand-primary mb-1">{project.title}</h4>
              <p className="text-sm text-brand-secondary">{project.caption}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 mb-0">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-brand-primary mb-4 tracking-tight">Ready to Start Your Project?</h3>
          <p className="text-brand-secondary mb-8">Get in touch to discuss your {service.title.toLowerCase()} needs.</p>
          <Link
            to="/#contact"
            onClick={() => { window.location.href = '/#contact'; }}
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-sm font-semibold hover:bg-brand-accent transition-all"
          >
            Contact Us <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Bottom Back Link */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/#services" onClick={() => { window.location.href = '/#services'; }} className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/pages/ServiceDetail.tsx
git commit -m "feat: create ServiceDetail page with project gallery and placeholder slots"
```

---

### Task 6: Wire up routing in App.tsx and main.tsx

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

**Step 1: Update main.tsx to add BrowserRouter**

Replace `src/main.tsx` contents:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

**Step 2: Replace App.tsx with route definitions**

Replace `src/App.tsx` contents. This becomes a thin shell: Navbar + Routes + Footer.

```tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
```

**Step 3: Delete old App.css** (it contains leftover Vite template styles not used anymore)

Run: `rm src/App.css`

**Step 4: Verify the app builds and runs**

Run: `npm run build`
Expected: Build succeeds

Run: `npm run dev` (manual check — verify homepage loads at localhost:3000, service detail pages load at /services/signage-structures etc.)

**Step 5: Commit**

```bash
git add src/main.tsx src/App.tsx
git rm src/App.css
git commit -m "feat: wire up react-router with home and service detail routes"
```

---

### Task 7: Update index.html and metadata

**Files:**
- Modify: `index.html`
- Modify: `metadata.json`

**Step 1: Update index.html title**

Change the `<title>` from "My Google AI Studio App" to "Pillar Structural Engineers".

**Step 2: Update metadata.json**

Update description to reflect the 6 service areas.

**Step 3: Clean up vite.config.ts**

Remove the `GEMINI_API_KEY` define since we removed `@google/genai`:

```ts
// Remove this line:
'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
```

**Step 4: Commit**

```bash
git add index.html metadata.json vite.config.ts
git commit -m "chore: update page title, metadata, and clean up vite config"
```

---

### Task 8: Visual verification and scroll-to-section fix

**Files:**
- Possibly modify: `src/components/Navbar.tsx`, `src/pages/Home.tsx`

**Step 1: Run dev server and verify all pages**

Run: `npm run dev`

Manually check:
- [ ] Homepage loads with 6 service cards in 3x2 grid
- [ ] Hero text mentions all 6 service areas
- [ ] Contact dropdown has all 6 services + "Other"
- [ ] Each "Learn More" navigates to `/services/:slug`
- [ ] Service detail pages show header, sub-services, placeholder gallery, CTA
- [ ] "Back to Services" links work from detail pages
- [ ] Navbar navigation works from both home and detail pages
- [ ] Mobile menu works
- [ ] Animations are smooth

**Step 2: Fix any issues found during verification**

**Step 3: Final build check**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: visual polish and navigation fixes from verification"
```
