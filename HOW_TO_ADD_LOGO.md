# How to Replace MZ with Your Company Logo

The DatabaseWithRestApi component now supports displaying your company logo instead of the "MZ" text.

## Steps to Add Your Logo:

### 1. Add Your Logo Image to the Project
Place your company logo in the `public` folder:
```
public/
  └── logo.png  (or logo.jpg, logo.svg, etc.)
```

### 2. Update the Component in Index.tsx

Replace the current component usage with:

```tsx
<DatabaseWithRestApi
  className=""
  logoUrl="/logo.png"  // <-- Add this line with your logo path
  badgeTexts={{
    first: "Train",
    second: "Nourish",
    third: "Recover",
    fourth: "Transform"
  }}
  buttonTexts={{
    first: "MZ Fitness",
    second: "Your Path"
  }}
  title="Comprehensive wellness through integrated training systems"
  lightColor="#F97316"
/>
```

### 3. Logo Guidelines

**Recommended logo specifications:**
- **Format**: PNG with transparent background (or JPG/SVG)
- **Size**: Square aspect ratio (e.g., 200x200px, 500x500px)
- **Background**: Transparent or solid color
- **File size**: Under 100KB for best performance

## What's Been Changed:

✅ **All text is now white:**
- "Comprehensive wellness through integrated training systems" - WHITE
- "MZ Fitness" - WHITE  
- "Your Path" - WHITE
- Icons - WHITE

✅ **Logo support added:**
- Use `logoUrl` prop to display your company logo
- Logo will fill the circular area
- If no `logoUrl` is provided, it will show "MZ" text as fallback

## Example with Logo Path:

```tsx
logoUrl="/logo.png"           // Logo in public folder
logoUrl="/images/logo.svg"    // Logo in public/images folder
logoUrl="https://..."         // External URL (not recommended)
```

The logo will automatically:
- Fit within the circular container
- Maintain its aspect ratio
- Display with proper overflow handling
