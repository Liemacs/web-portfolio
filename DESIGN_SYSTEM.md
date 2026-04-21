# Portfolio Design System & Page Logic

Reference direction: Paul Andrew style portfolio, reinterpreted as an original, cleaner, more compact personal portfolio system.

## Design Principles

- Use a premium monochrome visual language with strong contrast, generous whitespace, and restrained decorative elements.
- Do not copy the reference exactly. Reuse its structure, rhythm, and interaction logic while adapting content, spacing, and visual hierarchy.
- Keep the interface minimalist, editorial, and easy to scan.
- Use restrained typography for section headings; avoid heavy/bold title treatment unless it is the hero.
- Avoid oversized text. Large headings must stay within readable portfolio proportions and align left.
- Prefer fewer sections with clearer purpose over many decorative blocks.
- Keep all page sections visually connected through consistent spacing, radius, color, and typography.

## Layout System

### Page Shell

- Desktop uses a two-column layout.
- Left column contains the sticky profile card.
- Right column contains all scrollable page content.
- Page background should be near-white, not pure gray-heavy.
- Content must be centered within a max-width container.

| Area | Recommended Value |
|---|---:|
| Page max width | 1480px to 1560px |
| Desktop horizontal padding | 24px to 32px |
| Tablet horizontal padding | 20px to 24px |
| Mobile horizontal padding | 16px |
| Sidebar width | 400px to 460px |
| Main content width | 980px to 1160px |
| Gap between sidebar and content | 56px to 72px |

### Alignment Rules

- Align all right-column sections to one consistent left edge.
- Do not center long text blocks.
- CTAs may align right only when paired with a large section heading.
- Project cards may use asymmetric widths for editorial rhythm.
- Keep section content visually calm and not overloaded.

## Color System

### Core Colors

| Token | Hex | Usage |
|---|---:|---|
| `black` | `#111111` | Primary text, primary buttons |
| `charcoal` | `#202020` | Profile card, active service cards |
| `dark-gray` | `#4F4F4F` | Muted profile CTA |
| `gray-700` | `#6F6F6F` | Secondary text |
| `gray-500` | `#9A9A9A` | Icons, metadata, muted labels |
| `gray-300` | `#DADADA` | Borders |
| `gray-200` | `#E8E8E8` | Light borders |
| `gray-100` | `#F4F4F4` | Soft card backgrounds |
| `surface` | `#F7F7F7` | Page background |
| `white` | `#FFFFFF` | Cards, inverted text |

### State Colors

| Token | Hex | Usage |
|---|---:|---|
| `success` | `#1F8A5B` | Form success messages |
| `error` | `#C7362F` | Form validation errors |
| `warning` | `#B98218` | Non-blocking warnings |
| `focus` | `#111111` | Keyboard focus ring |

### Color Rules

- Use black and charcoal only for emphasis, active states, and conversion.
- Use gray backgrounds for separation instead of heavy shadows.
- Avoid colorful accents unless they communicate a system state.
- All text must meet WCAG AA contrast.
- Disabled elements use 40 percent opacity and no hover effect.

## Typography System

### Font Families

| Role | Recommended Fonts | Usage |
|---|---|---|
| Display | Satoshi, Manrope, Plus Jakarta Sans, Poppins | Headings, profile name, metrics |
| Body | Inter, Geist, Manrope | Paragraphs, UI labels, metadata |

### Type Scale

| Token | Desktop | Tablet | Mobile | Weight | Usage |
|---|---:|---:|---:|---:|---|
| Display / H1 | 72px to 88px | 56px to 68px | 42px to 54px | 600 | Hero headline |
| H2 | 40px to 55px | 34px to 46px | 32px to 40px | 500 | Section titles |
| H3 | 30px to 36px | 28px to 32px | 24px to 30px | 600 | Card titles |
| H4 | 22px to 26px | 21px to 24px | 20px to 22px | 600 | Subsection titles |
| Body Large | 17px to 18px | 16px to 17px | 16px | 400 to 500 | Hero paragraph |
| Body | 15px to 16px | 15px to 16px | 15px | 400 to 500 | General text |
| Small | 13px to 14px | 13px | 12px to 13px | 500 to 600 | Labels, metadata |
| Button | 15px to 16px | 15px | 14px to 15px | 600 | CTA text |

### Typography Rules

- Hero headlines should not exceed 3 lines on desktop.
- Use line-height `0.92` to `1.05` for large headings.
- Use line-height `1.45` to `1.65` for paragraphs.
- Use negative letter spacing only on large headings.
- Display section headings must use `font-weight: 500` by default. Avoid `700` and `800` for titles because they make the layout feel heavy and oversized.
- Use `font-weight: 700` only for rare emphasis, not for primary page titles, section titles, project titles, or metric numbers.
- Section headings such as `Take a look at my works`, `How can I help you`, `Experience in my career`, and `Frequently asked questions` must be left-aligned, smaller than the hero, and visually lighter than bold display titles.
- Body text line length should stay between 55 and 80 characters.
- Avoid using all caps except for small metadata labels.
- Do not scale typography endlessly on large screens; increase whitespace instead.

## Spacing System

### Base Scale

| Token | Size |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 24px |
| `space-6` | 32px |
| `space-7` | 48px |
| `space-8` | 64px |
| `space-9` | 96px |
| `space-10` | 128px |

### Spacing Rules

- Use the 4px base grid for all spacing decisions.
- Desktop section spacing should be 96px to 128px.
- Mobile section spacing should be 64px to 80px.
- Card padding should be 24px to 48px depending on component size.
- Button padding should be 14px to 18px vertically and 28px to 40px horizontally.
- Avoid dense stacked content unless it is a utility section.

## Radius & Borders

| Element | Radius |
|---|---:|
| Profile card | 28px to 36px |
| Project image cards | 24px to 34px |
| Service cards | 24px to 32px |
| Experience cards | 22px to 28px |
| Buttons | 999px or 16px to 20px |
| Input fields | 999px or 18px |
| Small pills | 999px |

### Border Rules

- Use light borders for inactive cards: `#E8E8E8`.
- Avoid thick outlines except inside the dark profile image frame.
- Use soft contrast over shadows.
- If shadows are used, keep them subtle and non-decorative.

## Component System

## Profile Card

### Purpose

Persistent identity anchor that keeps the person, role, trust signal, and contact action visible.

### Structure

- Portrait image
- Intro line
- Name
- Role and location
- Rating row
- Trust line
- Full-width contact CTA

### Visual Rules

- Background: charcoal.
- Text: white and muted white.
- Image must be large and cropped top-center.
- Keep content minimal. Do not add social links, email cards, phone cards, or extra pills inside the card.
- CTA sits near the bottom and spans full width.
- Card is sticky on desktop and static on tablet/mobile.

## Navigation

### Purpose

Quick access to service categories and menu.

### Structure

- Two-column service link list.
- Each link uses a subtle plus icon.
- Black rounded square menu button on the right.

### Rules

- Keep text small: 13px to 16px.
- Use minimal hover states.
- On mobile, collapse links into the menu.

## Buttons

### Variants

| Variant | Style | Usage |
|---|---|---|
| Primary | Black fill, white text | Main CTAs |
| Secondary | White fill, light border, black text | Supporting CTAs |
| Muted | Dark gray fill, white text | Profile card CTA |
| Ghost | Transparent or light pill | Filters and secondary navigation |

### States

| State | Rule |
|---|---|
| Default | Clear contrast and readable label |
| Hover | Slight darkening or border contrast increase |
| Active | Slight pressed state |
| Focus | Visible 2px focus ring |
| Disabled | 40 percent opacity, no pointer interaction |

## Metrics

### Purpose

Show credibility quickly without adding visual clutter.

### Structure

- Large number.
- Small label.
- No card background.

### Rules

- Desktop: 4 columns.
- Tablet: 2 columns.
- Mobile: 2 columns or 1 column.
- Numbers should be large but smaller than section headings.

## Project Cards

### Purpose

Showcase work through large visual previews.

### Structure

- Large image.
- Project title.
- Categories. A project may belong to multiple categories.
- Year.

### Rules

- Entire card should be clickable.
- Use rounded images.
- Use subtle image scale on hover.
- Show category filter pills above the project grid.
- Include an `All projects` filter as the default active state.
- Category filter pills must stay minimal: small font, compact padding, light border, and no oversized pill height.
- Filter logic must show a project when the selected category exists in that project's category list.
- Desktop layout must show two project cards per row.
- Tablet may show two cards per row if there is enough width.
- On mobile, every project card is full width.
- Project card category labels must be separated by a 3px black circular dot, not by slashes or text separators.

## Service Accordion

### Purpose

Explain services without creating too much static copy.

### Structure

- Service title.
- Tag pills.
- Description for active item.

### Rules

- Multiple service rows may remain open at the same time; each row toggles independently.
- Active card uses charcoal background and white text.
- Inactive cards use white or soft gray backgrounds.
- Service rows must stay compact and minimal: reduced padding, low card height, and no oversized typography.
- Service rows use clear horizontal distribution on desktop: title on the left, tag/description content on the right with generous `space-between` feel.
- Service row content aligns to the top on desktop; do not vertically center title and content when the description is open.
- Keep a generous horizontal gap between the service title column and the tag/description column.
- Service titles use `font-weight: 600`, compact line-height, and approximately `22px` to `26px` sizing in the row.
- Tags use small pill styling with compact padding and approximately `12px` to `13px` text.
- Keep descriptions concise.
- Open services display a description; closed services show title and tags only.
- Description panels must use a premium-feeling expand animation: `max-height` around 500ms with `cubic-bezier(0.22, 1, 0.36, 1)`, plus subtle opacity and vertical transform.

## Experience Timeline

### Purpose

Show career progression and credibility.

### Structure

- Section heading.
- CTA.
- Timeline rail.
- Role cards.
- Company logo, role, details, skill pills, date, and work format.

### Rules

- Desktop uses vertical timeline rail beside cards, positioned in the left gutter between the profile card and content.
- Timeline rail animates with scroll progress; use a dark fill line over a muted rail and active dot states.
- Dot markers align with the top area of each experience card.
- Cards use soft background, light border, and compact spacing.
- Each card includes a muted company logo on the right; temporary placeholder logos are acceptable until real brand assets are available.
- Skills used in each job appear as small pills in the main card body; work format appears beside the period on the right.
- Period and work-format pills use small Lucide icons with `stroke-width: 1`.
- Period and work-format pills must use `white-space: nowrap` and should not wrap icon/text onto separate lines.
- Period and work-format pills must stay on one horizontal row on desktop; do not allow the pill group itself to wrap.
- Mobile can remove the timeline rail for readability.

## FAQ Accordion

### Purpose

Answer common objections before contact.

### Structure

- Question row.
- Plus/minus icon.
- Expandable answer.

### Rules

- Use keyboard accessible accordion behavior.
- First FAQ is open by default.
- FAQ heading is left-aligned and constrained to a compact text width.
- FAQ items use full-width rounded cards with light borders and compact vertical padding.
- FAQ opening animation uses max-height, opacity, and subtle vertical transform with premium easing.
- Keep questions practical.
- Do not overload answers with long paragraphs.

## Page Structure

## Hero Section

### Purpose

Introduce the person and value proposition while driving the first contact action.

### Content

- Top service links.
- Menu button.
- Large headline.
- Short supporting paragraph.
- Primary CTA.
- Optional secondary CTA.
- Metrics row.

### Layout

- Right column begins with navigation.
- Hero text sits below navigation with generous top spacing.
- Metrics sit below CTA and paragraph.

### Interaction

- Primary CTA opens email, booking, or contact.
- Navigation links scroll to service sections.

## Work Section

### Purpose

Display recent or strongest portfolio projects.

### Content

- Section title.
- Short summary paragraph.
- Category filter pills.
- Project cards.

### Layout

- Large section heading followed by summary text and filters.
- Do not include a `View all works` button in the project section.
- Cards use a two-column desktop grid.
- Each project card includes image, title, categories, and year.

## Services Section

### Purpose

Clarify service offering.

### Content

- Heading.
- CTA.
- Accordion service cards.

### Layout

- Heading and CTA row.
- Accordion below.
- Active service appears as the strongest visual block.

## Experience Section

### Purpose

Show professional background and expertise.

### Content

- Heading.
- CTA.
- Timeline cards.

### Layout

- Timeline rail on desktop.
- Stacked cards on mobile.

## Trust Section

### Purpose

Reinforce credibility.

### Content

- Short trust statement.
- Logo cloud.

### Layout

- Centered or right-column grid.
- Keep logos visually balanced and monochrome.

## FAQ Section

### Purpose

Reduce uncertainty and answer buying questions.

### Content

- Heading.
- FAQ accordion list.

### Layout

- Large heading.
- Wide accordion rows.

## Final CTA & Footer

### Purpose

Convert visitors after they have reviewed the page.

### Content

- Strong final heading.
- Short paragraph.
- Booking/contact CTA.
- Trust bullets.
- Social links.
- Footer credits and legal links.

### Layout

- Two-column footer on desktop.
- Single-column footer on mobile.
- Do not include a newsletter block unless explicitly requested.
- Footer uses top and bottom divider lines, large CTA content on the left, social links on the right, and a three-column credit row.
- Footer trust bullets and social links use Lucide icons with muted gray strokes, black hover state where interactive, and `stroke-width: 1`.

## Responsive Strategy

### Mobile

- Stack profile card above content.
- Reduce profile image height.
- Collapse navigation links into menu.
- Hero H1: 42px to 54px.
- Section H2: 34px to 44px.
- Use single-column project and service cards.
- Reduce section spacing to 64px to 80px.

### Tablet

- Profile card can stay above content or become compact.
- Metrics use 2 columns.
- Project cards full width.
- Services remain stacked.
- Experience timeline can be simplified.

### Desktop

- Use sticky left profile card.
- Keep right content editorial and spacious.
- Use 4-column metrics.
- Use alternating project card widths.
- Preserve large but controlled headings.

### Large Desktop

- Cap the page width.
- Do not increase type beyond defined max values.
- Increase whitespace instead of scaling text.

## Accessibility Rules

- All text must meet WCAG AA contrast.
- Every interactive element needs a visible focus state.
- Buttons and links need clear labels.
- Accordions must support keyboard interaction.
- Images need descriptive alt text.
- Motion must respect reduced-motion preferences.
- Form inputs require labels, validation messages, and accessible error states.
- Do not communicate state using color alone.

## UX Improvements Over Reference

- Use a tighter typography system to avoid oversized pages.
- Keep profile card minimal and focused.
- Avoid repeated service or testimonial content.
- Use real project data and concise case study summaries.
- Project categories must be functional filters, and each project can belong to multiple categories.
- Improve accessibility with focus states, semantic controls, and clearer form validation.
- Keep final CTA stronger than secondary newsletter signup.

## Implementation Priorities

| Priority | Area |
|---|---|
| 1 | Page shell and sticky profile card |
| 2 | Hero with CTA and metrics |
| 3 | Project cards |
| 4 | Service accordion |
| 5 | Experience timeline |
| 6 | Final CTA and footer |
| 7 | FAQ, trust logos, articles, newsletter |
