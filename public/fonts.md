Global Font Update Implementation Plan
Goal
Update the entire website's typography to use Ubuntu for headlines and Montserrat for subheadlines and body copy. This ensures a premium, cohesive look across all components and pages.

User Review Required
IMPORTANT

Montserrat Font: Per user request, I will use Montserrat (specifically ensuring availability of Regular weight and large sizes like 54pt) as the primary font for body and subheadlines, replacing the previous choice of Outfit.

Proposed Changes
Fonts & Tailwind Configuration
[MODIFY] 
index.css
Remove Instrument Serif import.
Add Google Fonts import for:
Ubuntu: Weights 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold).
Montserrat: Weights 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold).
Update default CSS variables if necessary, but primarily handle via Tailwind.
[MODIFY] 
tailwind.config.ts
Update theme.extend.fontFamily:
serif: Remove (or re-map if "serif" class is used semantically for headings).
sans: Set to ['Montserrat', 'sans-serif'] (Default body font).
heading: Add ['Ubuntu', 'sans-serif'].
body: Add ['Montserrat', 'sans-serif'].
Component & Page Updates
Global Search & Replace
I will systematically replace existing font utilities with the new logic:

font-serif → font-heading (Ubuntu)
font-['Instrument_Serif'] → font-heading
Default text → Automatically becomes Montserrat via font-sans update.
Explicit font-sans → font-body.
[MODIFY] 
Index.tsx
 & 
Services.tsx
Ensure Hero sections and major headers use font-heading.
Ensure "Why Choose Us", "Services" cards use font-body for descriptions.
[MODIFY] All Pages & Components
run grep to find specific font overrides and standardize them.
Verification Plan
Automated Verification
None (Visual change).
Manual Verification
Headlines: Inspect <h1>, <h2>, etc. in Hero and Service pages. Verify font-family is Ubuntu.
Body Text: Inspect paragraph tags <p>. Verify font-family is Montserrat.
Weights: Check "Light", "Bold", and "Condensed" styles (using standard weights 300/700).
Responsiveness: Ensure no layout shifts break the design.