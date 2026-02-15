# Website Showcase - Quick Reference Guide

## Summary of Changes

The pricing/membership section has been transformed into a website portfolio showcase featuring three websites with colored borders, screenshots, and custom call-to-action buttons.

## Key Files Modified

### 1. `/src/components/Pricing.jsx`
```jsx
// BEFORE
<Heading
  title="Pick the membership, that fits you best"
  tag="Get started with Cojovi"
  tagAccent="Webworx"
/>

// AFTER
<Heading
  title="Our Featured Website Portfolio"
  tag="Explore Our Latest"
  tagAccent="Web Projects"
/>
```

### 2. `/src/components/PricingList.jsx`
```jsx
// BEFORE - Used pricing data with price display
import { pricing } from "../constants";

// AFTER - Uses websiteShowcase data with screenshots
import { websiteShowcase } from "../constants";
```

**New Card Structure:**
- Orange border: beefthroat.com
- Purple border: thenorthstarledger.com
- Green border: thetrutharbiter.com

Each card now includes:
- Website title
- Screenshot preview (aspect ratio 4:3)
- Tagline
- Custom CTA button
- 3 key features with checkmarks

### 3. `/src/constants/index.js`
```javascript
// NEW EXPORT ADDED
export const websiteShowcase = [
  {
    id: "0",
    title: "BEEFTHROAT.COM",
    url: "https://beefthroat.com",
    tagline: "Welcome to Beefthroat.com",
    screenshotUrl: "/screenshots/beefthroat-preview.svg",
    buttonText: "EXPLORE SELECTION",
    buttonColor: "orange",
    features: [
      "Unique Apparel & Accessories",
      "Featured Products & Memberships",
      "Social Media & Community",
    ],
  },
  // ... two more entries
];
```

## File Structure Created

```
/public/screenshots/
  ├── README.md (guidelines)
  ├── beefthroat-preview.svg (placeholder)
  ├── northstar-preview.svg (placeholder)
  └── trutharbiter-preview.svg (placeholder)
```

## Quick Start: Replace Screenshots

**Step 1:** Capture screenshots (800x600px or 1200x900px recommended)

**Step 2:** Save as PNG/JPG in `/public/screenshots/`:
- beefthroat-preview.png
- northstar-preview.png
- trutharbiter-preview.png

**Step 3:** Update extensions in `/src/constants/index.js`:
```javascript
screenshotUrl: "/screenshots/beefthroat-preview.png" // .svg → .png
```

**Step 4:** Rebuild and test:
```bash
npm run build
```

## Color Themes

| Website | Border Color | Text Color |
|---------|-------------|------------|
| Beefthroat | Orange-Yellow | orange-400 |
| North Star Ledger | Purple-Pink | purple-400 |
| Truth Arbiter | Green-Cyan | green-400 |

## Responsive Behavior

- **Mobile (<lg):** Cards stack vertically, full width
- **Desktop (≥lg):** Cards in horizontal row, decorative side lines

## What Was Preserved

✓ All existing visual styling
✓ Card layout structure
✓ Spacing and padding
✓ Decorative elements (lines, sphere, stars)
✓ Responsive grid system
✓ Dark theme colors
✓ Button styling and behavior
✓ Section animations

## What Changed

✗ Section heading text
✗ Card content (prices → screenshots)
✗ Card borders (single → colored)
✗ Button actions (pricing → external links)
✗ Data source (pricing → websiteShowcase)
✗ Feature descriptions

## Testing Checklist

- [ ] Screenshots display correctly
- [ ] All three websites load when buttons clicked
- [ ] Cards are responsive on mobile
- [ ] Hover effects work properly
- [ ] Colors match the design specification
- [ ] Features display with checkmarks
- [ ] Build completes without errors

## Common Issues & Solutions

**Issue:** Screenshots not showing
**Solution:** Check file paths match exactly (case-sensitive)

**Issue:** Broken colors
**Solution:** Verify Tailwind classes are correct (orange-500, purple-500, green-500)

**Issue:** Layout breaks on mobile
**Solution:** Ensure max-lg breakpoint classes are present

**Issue:** Links not working
**Solution:** Verify URLs in websiteShowcase array include https://

## Component Dependencies

```
Pricing.jsx
  └── PricingList.jsx
      ├── Button.jsx
      ├── check.svg (asset)
      └── constants/index.js
          └── websiteShowcase (data)
```

## Build Verification

```bash
npm run build
# Should complete successfully with no errors
# Verify dist/assets/ contains all necessary files
```

## Next Steps

1. Replace SVG placeholders with actual screenshots
2. Test on multiple devices and browsers
3. Optimize image file sizes (use WebP if possible)
4. Consider adding loading states for images
5. Add analytics to track button clicks
6. Implement error boundaries for robustness

---

**Need Help?** Refer to `WEBSITE_SHOWCASE_REDESIGN.md` for detailed documentation.
