# Complete Code Changes - Website Showcase Redesign

## File 1: `/src/components/Pricing.jsx`

### Change 1: Updated Section Heading
```jsx
// BEFORE:
<Heading
  title="Pick the membership, that fits you best"
  tag="Get started with Cojovi"
  tagAccent="Webworx"
/>

// AFTER:
<Heading
  title="Our Featured Website Portfolio"
  tag="Explore Our Latest"
  tagAccent="Web Projects"
/>
```

### Change 2: Updated Bottom Button Text
```jsx
// BEFORE:
<Button
  className="text-xs font-code font-bold tracking-wider uppercase"
  href="#pricing"
>
  See the full details
</Button>

// AFTER:
<Button
  className="text-xs font-code font-bold tracking-wider uppercase"
  href="#pricing"
>
  View All Projects
</Button>
```

---

## File 2: `/src/components/PricingList.jsx`

### Complete File Replacement

**BEFORE (Original Pricing List):**
```jsx
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 even:border-3 even:border-purple-500 [&>h3]:first:text-color-2 [&>h3]:even:text-color-1 [&>h3]:last:text-color-4"
        >
          <h3 className="h4 mb-4">{item.title}</h3>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6 justify-center">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={
              item.price < 100
                ? "#pricing"
                : "mailto:cody@cojovi.com"
            }
            white={item.price < 100}
          >
            {item.price < 100 ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
```

**AFTER (Website Showcase):**
```jsx
import { check } from "../assets";
import { websiteShowcase } from "../constants";
import Button from "./Button";

const PricingList = () => {
  // Define color themes for each website
  const borderColors = [
    "border-orange-500",
    "border-purple-500",
    "border-green-500"
  ];

  const titleColors = [
    "text-orange-400",
    "text-purple-400",
    "text-green-400"
  ];

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {websiteShowcase.map((item, index) => (
        <div
          key={item.id}
          className={`w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border-2 rounded-[2rem] lg:w-auto py-8 my-4 ${borderColors[index]} hover:shadow-lg hover:shadow-${item.buttonColor}-500/20 transition-all duration-300`}
        >
          {/* Website Title */}
          <h3 className={`h5 mb-4 font-bold tracking-wider ${titleColors[index]}`}>
            {item.title}
          </h3>

          {/* Screenshot Display Area */}
          <div className="relative mb-6 rounded-xl overflow-hidden border border-n-6 bg-n-7">
            <div className="aspect-[4/3] w-full bg-n-7 flex items-center justify-center">
              <img
                src={item.screenshotUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback display if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-n-3">
                    <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                    <span class="text-sm">${item.title}</span>
                  </div>`;
                }}
              />
            </div>
          </div>

          {/* Tagline */}
          <p className="body-2 min-h-[3rem] mb-6 text-n-1/70 text-center font-medium">
            {item.tagline}
          </p>

          {/* Call-to-Action Button */}
          <Button
            className="w-full mb-6 text-sm font-bold tracking-wider"
            href={item.url}
            white
          >
            {item.buttonText}
          </Button>

          {/* Feature List */}
          <ul>
            {item.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start py-4 border-t border-n-6"
              >
                <img src={check} width={20} height={20} alt="Check" className={`mt-0.5 filter brightness-150`} />
                <p className="body-2 ml-4 text-n-2">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
```

### Key Changes Explained:

1. **Data Source Changed:**
   - `import { pricing }` → `import { websiteShowcase }`

2. **Color Arrays Added:**
   - `borderColors` array for card borders
   - `titleColors` array for website titles

3. **Card Styling Updated:**
   - Border classes now dynamic based on index
   - Added hover effects with shadows
   - Removed odd/even specific styling
   - All cards now have consistent padding

4. **Price Display Replaced:**
   - Removed dollar sign and price display
   - Added screenshot container with aspect ratio
   - Implemented error handling for missing images

5. **Button Behavior Changed:**
   - Now links to external websites
   - Uses `item.url` instead of conditional pricing logic
   - All buttons use white styling
   - Text comes from `item.buttonText`

6. **Feature List Enhanced:**
   - Reduced padding (py-4 instead of py-5)
   - Smaller checkmark icons (20x20 instead of 24x24)
   - Brighter text color (text-n-2)
   - Added brightness filter to checkmarks

---

## File 3: `/src/constants/index.js`

### Addition: New websiteShowcase Export

**ADDED (after existing pricing export):**
```javascript
export const websiteShowcase = [
  {
    id: "0",
    title: "BEEFTHROAT.COM",
    url: "https://beefthroat.com",
    tagline: "Welcome to Beefthroat.com",
    description: "Your destination for unique apparel and accessories",
    screenshotUrl: "/screenshots/beefthroat-preview.svg",
    buttonText: "EXPLORE SELECTION",
    buttonColor: "orange",
    borderGradient: "from-orange-500 to-yellow-500",
    features: [
      "Unique Apparel & Accessories",
      "Featured Products & Memberships",
      "Social Media & Community",
    ],
  },
  {
    id: "1",
    title: "THE NORTH STAR LEDGER",
    url: "https://thenorthstarledger.com",
    tagline: "Your Browser Just Got Rejected by AI",
    description: "Daily global updates and exclusive content",
    screenshotUrl: "/screenshots/northstar-preview.svg",
    buttonText: "READ LATEST",
    buttonColor: "purple",
    borderGradient: "from-purple-500 to-pink-500",
    features: [
      "Daily Global Updates",
      "Science & Tech Focus",
      "Exclusive Interviews",
    ],
  },
  {
    id: "2",
    title: "THE TRUTH ARBITER",
    url: "https://thetrutharbiter.com",
    tagline: "Where Inclusive Dialogue Shapes Understanding",
    description: "Join the conversation and engage in real-time debates",
    screenshotUrl: "/screenshots/trutharbiter-preview.svg",
    buttonText: "JOIN A DEBATE",
    buttonColor: "green",
    borderGradient: "from-green-500 to-cyan-500",
    features: [
      "Real-Time Debates & Discussions",
      "Thoughtful Content & Analysis",
      "Inclusive Community & Perspectives",
    ],
  },
];
```

**NOTE:** Original `pricing` export remains unchanged for backward compatibility.

---

## New Files Created

### 1. `/public/screenshots/README.md`
Guidelines for adding website screenshots.

### 2. `/public/screenshots/beefthroat-preview.svg`
Orange-themed SVG placeholder.

### 3. `/public/screenshots/northstar-preview.svg`
Purple-themed SVG placeholder.

### 4. `/public/screenshots/trutharbiter-preview.svg`
Green-themed SVG placeholder.

---

## CSS Classes Used

### Border Colors
```
border-orange-500  // Beefthroat
border-purple-500  // North Star Ledger
border-green-500   // Truth Arbiter
```

### Title Colors
```
text-orange-400    // Beefthroat
text-purple-400    // North Star Ledger
text-green-400     // Truth Arbiter
```

### Hover Effects
```
hover:shadow-lg
hover:shadow-orange-500/20
hover:shadow-purple-500/20
hover:shadow-green-500/20
transition-all duration-300
```

### Screenshot Container
```
aspect-[4/3]       // 4:3 aspect ratio
object-cover       // Image scaling
rounded-xl         // Rounded corners
overflow-hidden    // Clip overflow
border border-n-6  // Subtle border
bg-n-7            // Dark background
```

---

## Migration Notes

1. **No Breaking Changes:** The original `pricing` data remains in constants, so the old component still works if needed.

2. **Backward Compatible:** You can switch back by reverting the import in PricingList.jsx from `websiteShowcase` to `pricing`.

3. **Easy to Extend:** Add more websites by:
   - Adding entries to `websiteShowcase` array
   - Creating matching screenshots
   - Adding color classes to the arrays in PricingList.jsx

4. **Screenshot Updates:** Simply replace SVG files with PNG/JPG and update the file extension in constants.

---

## Testing Commands

```bash
# Build project
npm run build

# Start dev server (handled automatically)
npm run dev

# Check for linting errors
npm run lint
```

---

## Rollback Instructions

If you need to revert to the original pricing section:

1. In `/src/components/PricingList.jsx`:
   ```javascript
   // Change this line:
   import { websiteShowcase } from "../constants";
   // Back to:
   import { pricing } from "../constants";

   // And update the map:
   {websiteShowcase.map((item, index) => (
   // Back to:
   {pricing.map((item) => (
   ```

2. Revert the changes in `/src/components/Pricing.jsx` to restore original headings.

3. Rebuild: `npm run build`
