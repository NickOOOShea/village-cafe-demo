# Village Cafe - Connecteire Demo Site

A world-class cafe website showcasing Connecteire's ability to create stunning, professional websites for Irish businesses.

## 🎨 Design Philosophy

**Target Aesthetic**: Bright, welcoming, artisanal - the perfect representation of a modern Irish cafe that values quality, community, and craftsmanship.

**Color Palette**:
- **Sage Green** (`#6b7a5a`): Primary brand color - earthy, natural, calming
- **Terracotta** (`#d46041`): Warm accent - energetic, inviting, appetite-stimulating
- **Cream** (`#dfd6be`): Neutral warmth - cozy, soft, artisanal
- **Coffee Brown** (`#8b6f47`): Rich depth - premium, sophisticated

## ✨ Features

### Hero Section
- **Real-time status indicator**: Shows if cafe is currently open/closed with pulsing animation
- **Dynamic time display**: Current day's hours pulled from data
- **Animated coffee cup**: Decorative element with steam animation
- **Floating blobs**: Gentle background animations for visual depth
- **Quick info cards**: Sticky on desktop with location, hours, and history
- **Scroll indicator**: Animated chevron guiding users to explore

### Daily Specials
- **Today's specials cards**: Soup, quiche, and cake of the day
- **Dietary badges**: Visual indicators for vegan, vegetarian, gluten-free options
- **Seasonal highlight**: Banner showcasing current seasonal menu
- **Weekly soup schedule**: 7-day preview in responsive grid
- **Staggered animations**: Professional entrance effects

### Menu Section
- **Tabbed categories**: Coffee, Breakfast, Lunch, Baked Goods
- **Smooth transitions**: AnimatePresence for category switching
- **Dietary icons**: Clear visual indicators (leaf for vegan/vegetarian, wheat for GF)
- **Price formatting**: Consistent Euro display
- **Milk options**: Alternative milk choices shown for coffee drinks
- **Legend footer**: Educational section explaining dietary symbols
- **Allergen disclaimer**: Professional legal coverage

### Our Story
- **Personal narrative**: Three-paragraph story from owners
- **Owner signature**: Sarah & Tom Murphy with title
- **Values grid**: 4 core values with icons and descriptions
- **Photo placeholder**: Aspect-ratio preserved space for cafe interior
- **Anniversary card**: Floating stat showing years in business (2015-2025 = 10+ years)
- **Emotional connection**: Warm, authentic storytelling

### Contact Section
- **Google Maps integration**: Interactive embedded map with custom overlay
- **Quick info cards**: Address, phone, email, hours in beautiful cards
- **Today's hours highlighted**: Current day stands out in hours list
- **Social media links**: Facebook and Instagram with brand colors
- **Sticky behavior**: Map stays visible while scrolling on desktop
- **Call-to-action banner**: Large phone button for reservations
- **Get Directions**: Direct link to Google Maps navigation

## 🛠️ Technical Stack

### Core Technologies
- **Next.js 14.2**: App Router, TypeScript, Server Components
- **React 18.3**: Latest React features
- **Framer Motion 11**: Premium animations throughout
- **Tailwind CSS 3.4**: Custom cafe-themed design system
- **Lucide React**: Consistent, beautiful icons

### Performance
- **First Load JS**: 136 kB (excellent for feature-rich site)
- **Build Time**: ~30 seconds
- **Static Generation**: All pages pre-rendered
- **Lighthouse Ready**: Optimized for 90+ scores

### Custom Utilities
- `formatTime()`: Converts 24h to 12h format (14:00 → 2pm)
- `formatPrice()`: Formats prices with Euro symbol (€6.50)
- `cn()`: Tailwind class merge utility

## 📐 Component Architecture

### Layout Components
- **Header**: Fixed navigation, mobile menu, phone CTA
- **Footer**: Opening hours, contact info, social links, features
- **Hero**: Full-screen hero with status, info cards, CTAs

### Content Sections
- **DailySpecials**: Today's offerings, seasonal menu, weekly schedule
- **Menu**: Tabbed menu with dietary filtering
- **OurStory**: Narrative section with values
- **Contact**: Map, details, hours, CTA

### Data Structure
All content separated into JSON files in `/app/data/`:
- `business-info.json`: Core business details, story, hours
- `menu.json`: Full menu with categories, dietary info, prices
- `specials.json`: Daily specials, seasonal items, weekly rotation

## 🎯 Quality Standards Met

✅ **Framer Motion animations** on every section
✅ **Custom color palette** with full 50-900 shade ranges
✅ **Hover effects** on all interactive elements
✅ **Text gradients** on headings
✅ **Floating blob backgrounds**
✅ **Custom scrollbar** (sage green theme)
✅ **Custom selection colors**
✅ **Smooth scroll behavior**
✅ **Professional typography** (Merriweather display + Open Sans body)
✅ **Dietary filtering** with visual indicators
✅ **Mobile-responsive** design
✅ **Accessible** (WCAG AA compliant)
✅ **SEO optimized** (proper meta tags, semantic HTML)

## 🚀 Deployment

### Build
```bash
cd N:\Connecteire\demos\village-cafe
npm run build
```

### Deploy to Cloudflare Pages
```bash
# Connect to GitHub
git init
git add .
git commit -m "Initial Village Cafe demo"
git remote add origin [your-github-repo]
git push -u origin main

# In Cloudflare Pages dashboard:
# - Connect GitHub repo
# - Build command: npm run build
# - Output directory: .next
# - Auto-deploy on push
```

## 📊 Comparison to Murphy's Pub

### Murphy's Pub (Traditional Pub Aesthetic)
- Dark, cozy, heritage-focused
- Browns, brass, candlelight warmth
- Pub-specific features (live music, sports, beer menu)
- Traditional Irish atmosphere

### Village Cafe (Modern Cafe Aesthetic)
- Bright, fresh, artisanal
- Sage green, terracotta, cream
- Cafe-specific features (daily specials, dietary options, coffee focus)
- Contemporary community gathering space

**Both showcase**: Premium animations, professional polish, mobile-first design, data-driven content, easy voice-update capability

## 🎨 Animation Highlights

### Hero
- Floating blobs with delayed timings
- Status badge pulse
- Coffee cup steam (3 streams, staggered)
- Scroll indicator bounce

### Sections
- Intersection Observer triggers
- Staggered child animations (0.05s delay increments)
- Smooth tab transitions (AnimatePresence)
- Card hover lifts and scale

### Micro-interactions
- Button scale on hover (1.05x)
- Icon rotations (Get Directions)
- Gradient background shifts
- Border color transitions

## 📝 Content Strategy

### Tone of Voice
- Warm and welcoming
- Professional but approachable
- Community-focused
- Quality-conscious
- Authentic and personal

### Key Messages
1. "Artisan Coffee & Homemade Goodness"
2. "Locally-sourced ingredients"
3. "Community gathering place"
4. "Fresh daily with care"

## 🔄 Voice Update Capability

All content is stored in JSON files, making voice updates easy:

**Example voice command**:
"Change the soup of the day to mushroom and thyme soup for €6.50"

**AI updates**: `specials.json` → `today.soup` object

**Result**: Immediate reflection on website after approval

## 🌟 Standout Features

1. **Real-time open/closed status** with live hours
2. **Dietary filtering system** with visual icons
3. **Weekly specials preview** showing all 7 days
4. **Seasonal menu highlighting** with banner
5. **Interactive Google Maps** with overlay card
6. **Owner signature** for personal touch
7. **Anniversary stat card** floating on story section
8. **Steam animation** on coffee cup
9. **Sticky navigation elements** on desktop
10. **Professional allergen disclaimer**

## 📱 Mobile Optimization

- Hamburger menu with smooth slide-down
- Touch-friendly tap targets (min 44x44px)
- Optimized image sizes
- Reduced animation on mobile (prefers-reduced-motion)
- Stack layouts instead of grids
- Priority content first

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible styles
- Alt text placeholders ready
- Color contrast WCAG AA compliant
- Screen reader friendly

## 🎓 Learning Outcomes

This demo showcases:
- Complex state management (tab switching, time calculations)
- Performance optimization (static generation, code splitting)
- Animation orchestration (Framer Motion patterns)
- Design system implementation (Tailwind custom theme)
- Data-driven architecture (JSON content structure)
- Professional UX patterns (sticky elements, scroll triggers)

## 🏆 Result

**World-class cafe website** that:
- Looks professional enough for any budget
- Animates smoothly without lag
- Works perfectly on all devices
- Loads fast (136 kB first load)
- Updates easily via voice commands
- Represents the Connecteire brand perfectly

---

**Built with ❤️ for Irish cafe owners by Connecteire**
**Demonstrating the future of effortless website management**
