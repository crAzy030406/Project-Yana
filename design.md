# ProjectYaana — Design System & Website Recreation Specification

## 01. PURPOSE

This document is the single visual source of truth for the ProjectYaana website.

The objective is to recreate the **design language and visual theme of https://www.clippingfarm.in/** for ProjectYaana while replacing Clipping Farm's:

* branding
* logo
* content
* creators
* statistics
* case studies
* contact information
* business-specific messaging

with ProjectYaana's own verified information.

The website should **feel like it belongs to the same design family as Clipping Farm**, not like a generic dark agency template.

Do not redesign the concept into a SaaS website.

Do not introduce unrelated visual trends.

Do not add visual elements merely because they are common in AI-generated websites.

The reference website is the visual authority.

---

# 02. REFERENCE

Primary design reference:

https://www.clippingfarm.in/

Study and reproduce its:

* visual hierarchy
* dark canvas
* typography scale
* section spacing
* editorial composition
* image treatment
* large numerical statistics
* horizontal content movement
* minimal navigation
* yellow accent usage
* section labeling
* FAQ treatment
* final CTA composition
* footer structure
* animation restraint
* overall visual rhythm

Do NOT copy:

* Clipping Farm logo
* Clipping Farm brand name
* Clipping Farm copy
* Clipping Farm statistics
* Clipping Farm client claims
* Clipping Farm testimonials
* Clipping Farm proprietary assets

The goal is to recreate the **design system**, not the company's identity.

---

# 03. CORE VISUAL CHARACTER

The final website should feel:

* dark
* editorial
* premium
* bold
* minimal
* modern
* creator-focused
* internet-native
* confident
* slightly experimental
* human

It should NOT feel:

* corporate
* SaaS-like
* futuristic
* cyberpunk
* crypto-like
* overly technical
* overly decorative
* AI-generated
* template-driven

The website should communicate:

> A serious creative operation working inside the creator economy.

---

# 04. CORE DESIGN FORMULA

The visual language is built primarily from:

```text
DARK CANVAS
+
OVERSIZED TYPOGRAPHY
+
WHITE / OFF-WHITE TEXT
+
ONE WARM ACCENT
+
REAL IMAGERY
+
MONOCHROME ATMOSPHERE
+
LARGE STATISTICS
+
EDITORIAL SPACING
+
HORIZONTAL MOVEMENT
+
MINIMAL UI
+
SUBTLE MOTION
```

Do not rely on:

```text
GRADIENTS
+
GLASSMORPHISM
+
3D OBJECTS
+
GLOW
+
FLOATING CARDS
+
GENERIC ICONS
+
AI ILLUSTRATIONS
```

to make the website look interesting.

---

# 05. DESIGN PRINCIPLE

The page should follow this hierarchy:

```text
CONTENT
↓
TYPOGRAPHY
↓
COMPOSITION
↓
IMAGERY
↓
COLOR
↓
MOTION
↓
DECORATION
```

Never reverse this order.

Do not start by adding visual effects and then attempt to fit content into them.

---

# 06. COLOR SYSTEM

## Background

Primary:

```css
#0A0A0A
```

Alternative:

```css
#080808
```

The background must visually read as black.

Avoid blue-black or purple-black backgrounds.

---

## Secondary Surface

```css
#101010
```

Use for subtle section separation.

---

## Secondary Surface

```css
#151515
```

Use sparingly for:

* FAQ expansion
* media overlays
* small interactive surfaces
* selected states

---

## Primary Text

```css
#F5F5F0
```

Use for most text.

Headlines may use:

```css
#FFFFFF
```

---

## Secondary Text

```css
rgba(255,255,255,0.62)
```

Use for:

* supporting paragraphs
* descriptions
* secondary navigation
* metadata

---

## Muted Text

```css
rgba(255,255,255,0.38)
```

Use only for non-critical information.

---

## Accent

Primary accent:

```css
#F5B83D
```

This warm yellow/orange accent should be used sparingly.

Potential applications:

* CTA
* active navigation
* highlighted words
* section labels
* statistics
* active states
* small graphic details
* hover states

Do not use several accent colors.

---

# 07. COLOR RATIO

Approximate visual ratio:

```text
80–90% black / dark neutrals
8–15% white / off-white
2–5% yellow/orange
```

The accent should remain visually scarce.

If everything is yellow, nothing is highlighted.

---

# 08. TYPOGRAPHY

Typography is one of the primary visual elements.

Use a strong modern sans-serif.

Possible families:

* Inter Tight
* Helvetica Neue
* Arial
* Manrope
* Geist
* Satoshi
* DM Sans

The final implementation may select one appropriate typeface.

Prefer:

```text
Display:
Bold / Extra Bold

Body:
Regular / Medium

Metadata:
Medium / Semi-Bold
```

Do not use multiple decorative fonts.

---

# 09. DISPLAY TYPOGRAPHY

Hero and major section headlines must be large.

Recommended desktop range:

```css
font-size: clamp(64px, 8vw, 132px);
font-weight: 700–900;
line-height: 0.90–1.00;
letter-spacing: -0.055em;
```

Adjust based on composition.

Do not make every heading maximum size.

Large typography must create hierarchy.

---

# 10. HEADLINE CHARACTER

Headlines should feel:

* compact
* heavy
* direct
* confident
* slightly aggressive

Avoid:

* thin luxury serif
* futuristic fonts
* playful rounded fonts
* excessive letter spacing
* gradient text

---

# 11. BODY TYPOGRAPHY

Recommended:

```css
font-size: 16px–19px;
line-height: 1.45–1.65;
font-weight: 400–500;
```

Body copy should normally have:

```css
max-width: 560px;
```

Do not allow paragraphs to stretch across the entire viewport.

---

# 12. SMALL LABELS

Use compact uppercase labels for hierarchy.

Examples:

```text
WHAT WE DO

HOW IT WORKS

PARTNERSHIPS

COMMON QUESTIONS
```

Recommended:

```css
font-size: 10px–13px;
font-weight: 600–700;
text-transform: uppercase;
letter-spacing: 0.06em–0.12em;
```

Labels should be subtle.

They are navigation through the page, not decorative badges.

---

# 13. TYPOGRAPHIC HIERARCHY

A typical section should follow:

```text
SMALL LABEL
↓
LARGE HEADING
↓
SHORT DESCRIPTION
```

Example:

```text
WHAT WE DO

Turn existing content
into more opportunities
to be discovered.

Short supporting explanation.
```

Do not lead with a paragraph.

---

# 14. PAGE WIDTH

Desktop maximum:

```css
max-width: 1440px;
```

Large-screen horizontal padding:

```text
40–64px
```

Tablet:

```text
24–40px
```

Mobile:

```text
16–20px
```

The page should feel spacious.

---

# 15. GRID

Use a 12-column desktop grid.

Suggested:

```text
12 columns
24px gutter
32–64px outer padding
```

Use asymmetric layouts.

Do not center everything.

Possible structure:

```text
LEFT                     RIGHT

small label              large heading
                         supporting copy
```

or:

```text
LARGE IMAGE              TEXT
LARGE IMAGE              TEXT
```

or:

```text
LARGE STAT               EXPLANATION
```

---

# 16. ASYMMETRY

Intentional asymmetry is encouraged.

The page should not become:

```text
CENTER
CENTER
CENTER
CENTER
```

Use:

* left-aligned headlines
* offset imagery
* uneven columns
* large whitespace
* different content widths

Asymmetry must be intentional.

Random misalignment is not acceptable.

---

# 17. NAVIGATION

Navigation should remain minimal.

Recommended ProjectYaana structure:

```text
PROJECTYAANA

Work
About
How It Works
FAQ

Book a Call
```

Do not add unnecessary navigation categories.

---

# 18. HEADER

Desktop height:

```text
72–92px
```

Use:

```css
display: flex;
align-items: center;
justify-content: space-between;
```

The header should feel spacious.

Avoid excessive borders.

---

# 19. HEADER BACKGROUND

Default:

```text
transparent / near-black
```

If sticky:

```css
background: rgba(10,10,10,0.88);
backdrop-filter: blur(12px);
```

Use subtle blur only.

Do not turn the header into a large glassmorphism panel.

---

# 20. LOGO

Use the actual ProjectYaana logo when available.

If unavailable, use a text-based temporary logo.

Possible:

```text
PROJECTYAANA
```

Logo should be:

* bold
* compact
* simple
* high contrast

Do not add a random symbol merely to make the logo look more "designed."

---

# 21. PRIMARY CTA

CTA should be visually simple.

Examples:

```text
BOOK A CALL
```

or:

```text
START A CAMPAIGN
```

Recommended style:

```css
padding: 12px 18px;
border-radius: 6px–10px;
background: #F5B83D;
color: #080808;
font-weight: 600;
```

Do not use giant pill buttons.

Do not use glowing buttons.

Do not use gradient buttons.

---

# 22. CTA HOVER

Keep hover subtle.

Possible:

```text
accent → lighter accent
```

or:

```text
accent → white
```

with:

```text
translateY(-1px)
```

Do not use excessive scale or glow.

---

# 23. HERO

The hero should be approximately:

```text
80–100vh
```

depending on the visual composition.

Structure:

```text
SMALL LABEL

LARGE HEADLINE

SHORT DESCRIPTION

PRIMARY CTA

LARGE VISUAL
```

The hero should contain one dominant visual idea.

---

# 24. HERO HEADLINE

Possible ProjectYaana direction:

```text
HELPING THE
NEXT GENERATION
GET SEEN.
```

or:

```text
YOUR CONTENT.
MORE PLACES.
MORE PEOPLE.
```

These are examples only.

The actual copy should come from the approved ProjectYaana content.

The headline should ideally occupy:

```text
3–6 words per line
```

with intentional line breaks.

---

# 25. HERO DESCRIPTION

Keep it short.

Maximum:

```text
2–4 lines
```

Example structure:

```text
We turn long-form creator content
into short-form clips built for
distribution.
```

Do not explain the entire business in the hero.

---

# 26. HERO VISUAL

Choose ONE dominant visual direction:

### Option 1

Large creator portrait.

### Option 2

Large gaming visual.

### Option 3

Large video frame.

### Option 4

Monochrome editorial image.

### Option 5

Creator/content collage.

Do not combine every option.

---

# 27. HERO IMAGE TREATMENT

Preferred:

```text
high contrast
low saturation
deep shadows
soft highlights
editorial crop
```

Gaming imagery should remain premium.

Avoid generic:

* RGB gaming rooms
* stock gamers
* fake esports imagery
* AI-generated gaming characters

---

# 28. IMAGE OVERLAY

When text sits over imagery:

```css
background:
linear-gradient(
  to bottom,
  rgba(0,0,0,0.10),
  rgba(0,0,0,0.85)
);
```

Use only as much overlay as necessary.

Do not destroy the image.

---

# 29. PARTNERSHIPS

Place creator/client proof near the beginning of the page.

Structure:

```text
PARTNERSHIPS

CREATOR / BRAND
CATEGORY
VIEWS

CREATOR / BRAND
CATEGORY
VIEWS
```

Use verified ProjectYaana relationships only.

---

# 30. PARTNERSHIP VISUALS

Use:

* real creator photographs
* gaming imagery
* actual clips
* actual thumbnails
* campaign screenshots
* social posts

The visual should dominate the partnership block.

---

# 31. PARTNERSHIP TILES

Do not create generic SaaS cards.

Prefer large editorial media blocks.

Example:

```text
┌───────────────────────────────┐
│                               │
│        CREATOR IMAGE          │
│                               │
│ CREATOR NAME                  │
│ GAMING CREATOR                │
│                               │
│ XXM+                          │
│ VIEWS                         │
└───────────────────────────────┘
```

Corners can remain square or use a subtle radius.

---

# 32. PARTNERSHIP MARQUEE

Use horizontal movement where multiple creators/campaigns exist.

Possible:

```text
ROW A → → → →
ROW B ← ← ← ←
```

Recommended cycle:

```text
18–35 seconds
```

Keep movement slow.

The content should remain readable.

---

# 33. MARQUEE IMPLEMENTATION

Prefer:

```css
transform: translate3d(...);
```

rather than animating:

```text
left
margin-left
```

Use GPU-friendly movement.

Do not cause layout shifts.

---

# 34. STATISTICS

Large numerical proof is a major visual component.

ProjectYaana should use only verified numbers.

Potential:

```text
100M+
VIEWS GENERATED

21+
CREATORS

6 MONTHS
```

if verified.

Do not invent additional statistics.

---

# 35. STATISTICS LAYOUT

Prefer a horizontal editorial layout.

Example:

```text
100M+          21+           6 MONTHS
VIEWS          CREATORS      CAMPAIGN PERIOD
```

Use thin vertical or horizontal separators.

Do not automatically put each number inside a rounded card.

---

# 36. STATISTICS TYPOGRAPHY

Numbers:

```css
font-size: clamp(56px, 8vw, 120px);
font-weight: 700–900;
letter-spacing: -0.06em;
line-height: 0.9;
```

Labels:

```css
font-size: 11px–14px;
text-transform: uppercase;
letter-spacing: 0.08em;
```

The numbers should visually dominate.

---

# 37. NUMBER ANIMATION

Optional.

When the statistics enter the viewport:

```text
0 → final number
```

Duration:

```text
900–1500ms
```

Use a smooth ease.

Do not create an exaggerated counter animation.

---

# 38. WHAT WE DO

Use the reference site's editorial information structure.

Structure:

```text
WHAT WE DO

Large explanatory statement
```

Example:

```text
WHAT WE DO

We turn long-form creator content
into short-form clips built for
discovery and distribution.
```

The main statement should be much larger than normal body text.

---

# 39. WHAT WE DO LAYOUT

Desktop:

```text
SMALL LABEL               LARGE TEXT
                          LARGE TEXT
                          SUPPORTING COPY
```

The left label should occupy a small column.

The explanation should occupy a large column.

---

# 40. LARGE BODY STATEMENT

Recommended:

```css
font-size: clamp(24px, 3vw, 46px);
line-height: 1.1–1.25;
```

This is not ordinary body text.

It is an editorial statement.

---

# 41. CLIPPING EXPLANATION

Explain the mechanism visually and verbally.

Core sequence:

```text
LONG-FORM
↓
MOMENTS
↓
SHORT-FORM
↓
DISTRIBUTION
↓
DISCOVERY
```

Do not use a complicated flowchart.

Typography and imagery should communicate the sequence.

---

# 42. HOW IT WORKS

Create a three-part system.

Example:

```text
01
CONTENT

02
CLIPPING

03
DISTRIBUTION
```

Each item contains:

* number
* title
* short explanation
* visual

---

# 43. HOW IT WORKS INTERACTION

Desktop can use:

```text
LEFT:
01
02
03

RIGHT:
large active visual
active title
description
```

The active item should have an accent indicator.

---

# 44. ACTIVE STATE

Active:

```text
color: #F5B83D;
```

Inactive:

```text
rgba(255,255,255,0.42)
```

Use a subtle line or indicator.

Do not use large filled cards.

---

# 45. HOW IT WORKS VISUAL

Use large atmospheric imagery.

Possible:

* creator image
* gaming footage
* editing timeline
* social feed
* clip montage

The image should occupy significant area.

---

# 46. IMAGE COLOR TREATMENT

For visual consistency:

* grayscale may be used
* colors may be reduced
* contrast can be increased
* shadows can be deepened

Do not force every image into grayscale if doing so damages important content.

Real creator identity should remain visible.

---

# 47. USE CASE SECTION

Use oversized hashtag typography.

Example:

```text
PERFECT FOR

#GAMERS

#STREAMERS

#YOUTUBERS

#CREATORS

#ESPORTS

#GAMING
```

This should feel like a typographic installation rather than a list of tags.

---

# 48. HASHTAG STYLE

Use:

```css
font-size: clamp(36px, 5vw, 76px);
font-weight: 600–800;
letter-spacing: -0.04em;
```

Color:

```text
muted white
```

Hover:

```text
accent yellow
```

---

# 49. HASHTAG LAYOUT

Do not put every hashtag into a card.

Use:

```text
#GAMERS
        #STREAMERS

#YOUTUBERS

        #CREATORS

#ESPORTS
```

Intentional alignment and whitespace are important.

---

# 50. PERFORMANCE / PRINCIPLES SECTION

Introduce three core ProjectYaana principles.

Suggested:

```text
01

CREATOR-FIRST

The campaign is built around
the creator and their content.


02

DISTRIBUTION-FIRST

The goal is not simply to produce clips.
The goal is to give those clips a chance to be seen.


03

GROW TOGETHER

ProjectYaana exists to help
emerging creators grow with us.
```

---

# 51. PRINCIPLE LAYOUT

Use a vertical editorial list.

Example:

```text
01
──────────────────────────────

CREATOR-FIRST

Explanation


02
──────────────────────────────

DISTRIBUTION-FIRST

Explanation


03
──────────────────────────────

GROW TOGETHER

Explanation
```

Avoid three identical cards.

---

# 52. PRINCIPLE ICONS

Icons are optional.

If used:

* monochrome
* small
* simple
* geometric

Potential:

* play
* arrow
* eye
* scissors
* distribution symbol

Do not use colorful icon packs.

---

# 53. CASE STUDIES

Case studies should feel like editorial stories.

Structure:

```text
CASE STUDY

CREATOR NAME

[Large visual]

XXM+
VIEWS

Short explanation
```

Use real evidence.

---

# 54. CASE STUDY VISUAL

Prefer:

* real clip
* real creator
* real campaign screenshot
* real social post
* actual performance screenshot

Do not create fake analytics graphics.

---

# 55. FAQ

Near the bottom:

```text
COMMON QUESTIONS

Frequently asked questions

QUESTION +
QUESTION +
QUESTION +
QUESTION +
```

Use large horizontal rows.

---

# 56. FAQ STYLE

Each FAQ item:

```text
Question                                      +
──────────────────────────────────────────────
```

Opened:

```text
Question                                      −

Answer text
```

Avoid heavy cards.

---

# 57. FAQ BEHAVIOR

Requirements:

* one item open at a time
* smooth height animation
* first item optionally open
* keyboard accessible
* clear focus state
* plus/minus indicator

Animation:

```text
250–400ms
```

---

# 58. FAQ CONTENT

Potential questions:

```text
What exactly is clipping?

How does clipping help small creators?

Do I need an existing audience?

What type of gaming content can I submit?

Where are the clips distributed?

Who creates the clips?

How do you maintain quality?

How is this different from hiring an editor?

How does a campaign work?

How much does it cost?
```

Only use answers supported by the actual ProjectYaana operation.

---

# 59. FINAL CTA

The closing CTA should be one of the strongest visual moments.

Use a massive typographic statement.

Example:

```text
HELPING THE
NEXT GENERATION
GET SEEN.
```

Then:

```text
BOOK A CALL →
```

Keep the section simple.

---

# 60. FINAL CTA SCALE

Recommended:

```css
font-size: clamp(64px, 10vw, 160px);
line-height: 0.85–0.95;
letter-spacing: -0.06em;
```

The headline can occupy most of the viewport width.

---

# 61. FINAL CTA BACKGROUND

Prefer:

```text
near-black
```

or:

```text
subtle monochrome image
```

Do not introduce a giant colorful gradient.

---

# 62. FOOTER

Footer should remain minimal.

Structure:

```text
PROJECTYAANA

Helping the next generation
get seen.

WORK
ABOUT
HOW IT WORKS
FAQ

INSTAGRAM
YOUTUBE
DISCORD
CONTACT

PRIVACY
TERMS

© 2026 PROJECTYAANA
```

Only include actual links.

---

# 63. FOOTER TAGLINE

Use a strong short statement.

Possible:

```text
Helping the next generation get seen.
```

or:

```text
You make the content.
We help it travel.
```

Final wording should be approved separately.

---

# 64. FOOTER VISUAL

Do not turn the footer into a dense sitemap.

Use:

* large brand statement
* small navigation
* small legal information
* social links

Maintain large negative space.

---

# 65. SECTION SPACING

Major desktop sections:

```text
120px–200px
```

Hero:

```text
160px+
```

Mobile:

```text
80px–120px
```

Do not make every section identical.

Large visual sections should have more breathing room.

---

# 66. SECTION TRANSITIONS

Use:

* whitespace
* slight background changes
* full-width imagery
* thin dividers

Avoid decorative transition graphics.

---

# 67. FULL-BLEED MEDIA

Large images can touch the viewport edges.

Example:

```text
┌────────────────────────────────────────────────┐
│                                                │
│              LARGE IMAGE                       │
│                                                │
└────────────────────────────────────────────────┘
```

Do not put every image inside a container.

Full-bleed imagery is important to the editorial aesthetic.

---

# 68. IMAGE CORNERS

Default:

```text
0–8px
```

Use square corners frequently.

Do not apply 24px+ radius to everything.

---

# 69. BORDERS

Use extremely subtle borders:

```css
border: 1px solid rgba(255,255,255,0.10);
```

Use borders primarily for:

* dividers
* FAQ rows
* navigation separation
* structured lists

Do not outline every component.

---

# 70. SHADOWS

Shadows should be rare.

Prefer:

* contrast
* spacing
* scale
* background changes

to create depth.

If a shadow is necessary:

```css
0 20px 60px rgba(0,0,0,0.35)
```

---

# 71. CARDS

Default rule:

## Do not use a card.

Only use a card when information genuinely requires containment.

Avoid repeated structures like:

```text
[icon]
[heading]
[paragraph]
[arrow]
```

repeated three or six times.

That creates a generic AI/SaaS appearance.

---

# 72. BUTTONS

Buttons should be:

* compact
* high contrast
* rectangular or subtly rounded
* typography-led

Avoid:

* oversized pills
* glowing buttons
* gradient buttons
* animated blobs

---

# 73. ANIMATION PHILOSOPHY

Animation should feel editorial.

Use:

* reveal
* image movement
* horizontal scroll
* subtle parallax
* number counting
* text reveal
* masked image transitions

Avoid:

* bouncing
* spinning
* constant floating
* excessive blur
* exaggerated scale
* every element fading independently

---

# 74. PAGE LOAD ANIMATION

Suggested sequence:

```text
Logo
↓
Hero headline
↓
Supporting copy
↓
CTA
↓
Hero image
```

Total animation:

```text
600–1000ms
```

Do not delay access to content.

---

# 75. SCROLL REVEAL

Default:

```css
opacity: 0;
transform: translateY(24px);
```

to:

```css
opacity: 1;
transform: translateY(0);
```

Duration:

```text
600–800ms
```

Use:

```css
cubic-bezier(0.22,1,0.36,1)
```

Group related elements.

Do not animate every word.

---

# 76. IMAGE REVEAL

Use:

```text
overflow: hidden
```

with:

```text
scale 1.04 → 1
opacity 0 → 1
```

This creates a restrained editorial reveal.

---

# 77. HORIZONTAL MOTION

Horizontal movement should be reserved for:

* creator partnerships
* campaign examples
* hashtag systems
* content strips

Do not animate unrelated UI.

---

# 78. PERFORMANCE

Use GPU-friendly properties:

```text
transform
opacity
```

Avoid continuous animation of:

```text
width
height
top
left
margin
```

Keep animation smooth on low-end mobile devices.

---

# 79. MOBILE

Mobile is a separate composition.

Do not merely shrink desktop.

On mobile:

* stack columns
* reduce typography
* preserve large hierarchy
* crop images intentionally
* simplify navigation
* simplify motion
* retain large statistics
* maintain whitespace

---

# 80. MOBILE NAVIGATION

Collapsed navigation:

```text
PROJECTYAANA                         MENU
```

Menu opens full-screen:

```text
WORK

ABOUT

HOW IT WORKS

FAQ

BOOK A CALL
```

Links should be large enough to touch comfortably.

---

# 81. MOBILE HERO

Structure:

```text
SMALL LABEL

LARGE HEADLINE

SHORT DESCRIPTION

CTA

VERTICAL IMAGE
```

Do not place too many elements above the fold.

---

# 82. MOBILE TYPOGRAPHY

Hero:

```css
font-size: clamp(48px,15vw,72px);
line-height: 0.90–0.96;
```

Section headings:

```text
36px–56px
```

Body:

```text
16px–18px
```

Statistics:

```text
48px–72px
```

---

# 83. MOBILE PARTNERSHIPS

Use horizontal scrolling or controlled marquee.

Cards/images should remain visually substantial.

Do not shrink multiple creators into tiny thumbnails.

---

# 84. MOBILE FAQ

Minimum interactive target:

```text
44px
```

Keep question rows spacious.

Do not make the plus icon the main visual element.

---

# 85. ACCESSIBILITY

Maintain:

* sufficient contrast
* semantic headings
* keyboard navigation
* visible focus
* accessible buttons
* accessible FAQ
* reduced motion support

For:

```css
prefers-reduced-motion: reduce
```

disable non-essential animation.

---

# 86. CURSOR

Do not add a custom cursor by default.

The design does not need a fancy cursor to look premium.

---

# 87. SCROLLBAR

Keep scrollbar subtle.

Do not use neon custom scrollbars.

---

# 88. IMAGE SOURCING

Priority:

1. Real ProjectYaana assets
2. Real creator assets
3. Real campaign screenshots
4. Real social content
5. Purpose-built generated atmosphere
6. Generic stock only as a last resort

---

# 89. AI-GENERATED IMAGERY

AI-generated imagery may be used for:

* atmospheric backgrounds
* abstract monochrome photography
* textures
* supporting visual compositions

Do not use AI-generated imagery as fake:

* creator proof
* client proof
* testimonials
* analytics
* campaign results
* social screenshots

---

# 90. GAMING VISUALS

ProjectYaana focuses initially on gaming.

Gaming imagery should still remain sophisticated.

Preferred:

* cinematic game frames
* close-up hardware
* controller details
* gameplay moments
* creator streaming environments
* dark studio environments
* monitor reflections
* silhouettes
* real creator photography

Avoid:

* RGB overload
* neon gaming clichés
* esports explosion graphics
* generic gamer stock photos
* cartoon gaming illustrations

---

# 91. MONOCHROME IMAGERY

Monochrome imagery is a recurring visual tool.

Use:

```css
filter: grayscale(100%);
```

when appropriate.

Then introduce the brand accent through typography or UI.

This creates a consistent visual language.

---

# 92. REAL COLOR IMAGERY

Not every image must be grayscale.

Use full-color imagery when:

* creator identity matters
* a campaign screenshot contains meaningful color
* a gaming frame is visually important
* the image provides contrast against the monochrome sections

Color imagery should be deliberate.

---

# 93. IMAGE CONTRAST

Preferred:

```text
deep blacks
controlled highlights
strong subject separation
moderate saturation
```

Avoid flat, washed-out imagery.

---

# 94. DESIGN RHYTHM

Do not repeat the same component continuously.

A strong sequence might be:

```text
HERO
↓
PARTNERSHIPS
↓
STATISTICS
↓
LARGE STATEMENT
↓
FULL-WIDTH IMAGE
↓
HOW IT WORKS
↓
HASHTAG WALL
↓
PRINCIPLES
↓
FAQ
↓
FINAL CTA
↓
FOOTER
```

The exact content can change.

The visual rhythm should remain varied.

---

# 95. INFORMATION DENSITY

Alternate between:

### Low-density sections

One large statement.

### High-impact sections

Large image.

### Information sections

Process/principles.

### Proof sections

Statistics/partnerships.

This prevents visual fatigue.

---

# 96. DESIGN REDUCTION

After the first implementation, remove approximately 20–30% of unnecessary visual elements.

Look for:

* unnecessary labels
* decorative shapes
* excessive borders
* unnecessary cards
* duplicate text
* excessive animation
* unnecessary icons
* unnecessary colors

If removing something makes the design stronger, leave it removed.

---

# 97. AI-SLOP CHECK

Before finalizing, explicitly inspect for:

* purple gradients
* blue gradients
* glowing blobs
* glassmorphism
* floating cards
* 3D spheres
* generic dashboards
* excessive pills
* excessive rounded cards
* random grain
* random noise
* generic icons
* AI-generated people
* fake statistics
* fake social proof

If several appear:

## STOP AND REDESIGN.

---

# 98. HUMAN DESIGNER TEST

For every major visual element ask:

> Why is this here?

Valid answers:

* communicates the product
* establishes hierarchy
* provides proof
* creates rhythm
* reinforces brand
* improves navigation
* supports storytelling

Invalid answer:

> It looks cool.

Remove it.

---

# 99. SQUARESPACE-STYLE RESTRAINT IS NOT REQUIRED

Do not mix the previous Squarespace design direction into this recreation unless it naturally occurs.

The current reference is Clipping Farm.

Clipping Farm's visual language is now the primary source.

The ProjectYaana website should not become a hybrid of:

* Squarespace
* Clipping Agency
* Clipping Farm
* generic AI website

There should be one coherent design system.

---

# 100. CONTENT VS DESIGN

This document controls:

* visual design
* layout
* typography
* color
* imagery
* motion
* responsive behavior
* component treatment

It does NOT override ProjectYaana's actual business information.

Content must come from the approved ProjectYaana project documentation.

Never invent factual claims to make a visual section look complete.

---

# 101. PROJECTYAANA STATISTICS

Current project materials contain conflicting view-count information.

Existing project documentation records:

```text
250 Million+ views generated
```

while the newer project narrative states:

```text
100 Million+ views in the last 6 months
```

These must NOT be combined.

Use whichever number is officially confirmed by the ProjectYaana team.

Until confirmed:

```text
[VERIFIED VIEW COUNT]
```

The same applies to:

* creator count
* campaign count
* view period
* partnerships
* creator names

---

# 102. PROOF RULE

Use real proof wherever possible.

Strong proof:

* creator photo
* creator name
* campaign
* clip
* view count
* screenshot
* testimonial
* actual social post

Weak proof:

* generic star badge
* generic "trusted by" statement
* fake dashboard
* invented client logos

Real evidence is more valuable than decorative credibility.

---

# 103. FINAL VISUAL SIGNATURE

A screenshot of the finished website should be recognizable through:

```text
BLACK
+
OVERSIZED TYPE
+
WARM YELLOW
+
MONOCHROME / REAL IMAGERY
+
HUGE NUMBERS
+
EDITORIAL SPACING
+
MINIMAL UI
+
HORIZONTAL CONTENT
+
LARGE FINAL CTA
```

This combination is the core visual identity.

---

# 104. FINAL QUALITY STANDARD

The finished website must feel:

**Dark, but not gloomy.**

**Minimal, but not empty.**

**Bold, but not noisy.**

**Premium, but not corporate.**

**Modern, but not futuristic.**

**Creator-focused, but not childish.**

**Editorial, but still conversion-focused.**

**Animated, but not distracting.**

**Designed, not generated.**

---

# 105. FINAL IMPLEMENTATION RULE

When uncertain:

### Prefer typography over decoration.

### Prefer real imagery over generic graphics.

### Prefer whitespace over unnecessary UI.

### Prefer one strong visual over five weak ones.

### Prefer flat color over unnecessary gradients.

### Prefer editorial composition over card grids.

### Prefer subtle animation over spectacle.

### Prefer verified proof over decorative trust.

### Prefer a simple section executed extremely well over a complicated section executed poorly.

---

# 106. FINAL DESIGN FORMULA

The ProjectYaana website should ultimately be:

```text
CLIPPING FARM
VISUAL LANGUAGE

+
PROJECTYAANA
BRAND

+
PROJECTYAANA
CONTENT

+
GAMING CREATOR
FOCUS

+
VERIFIED
RESULTS

=
PROJECTYAANA WEBSITE
```

The result should look like an original ProjectYaana website that uses the same **design discipline, visual rhythm, typography, imagery, and atmosphere** as Clipping Farm.

It should not look like a cloned website.

It should look like ProjectYaana was designed by the same level of art direction.
