# H2-Based FAQPage Schema Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the FAQPage JSON-LD schema on two blog posts with H2-derived Q&As, and standardise the `breastfeeding-calorie-needs` post to the same `content.ts` pattern used by other posts.

**Architecture:** Each blog post's structured data lives inline in `page.tsx` as `<script type="application/ld+json">` tags. Schema content is sourced from a sibling `content.ts` file via a typed object. This plan adds an `h2Faqs` field to that object and switches the `faqJsonLd` to read from it; the existing `faqs` field (used by the HTML FAQ accordion) is untouched. `c-section-recovery-timeline` is not modified — its H2s are not question-format and its existing six-entry `c.faqs` schema is correct.

**Tech Stack:** Next.js 16 (React 19), TypeScript, static export — no test suite exists; validation is via `npm run build` (TypeScript compile + static export) and manual schema inspection.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/app/blog/postpartum-hair-loss/content.ts` | Modify | Add `h2Faqs` field (7 entries) |
| `src/app/blog/postpartum-hair-loss/page.tsx` | Modify | `faqJsonLd` reads `c.h2Faqs` instead of `c.faqs` |
| `src/app/blog/diastasis-recti/content.ts` | Modify | Add `h2Faqs` field (10 entries) |
| `src/app/blog/diastasis-recti/page.tsx` | Modify | `faqJsonLd` reads `c.h2Faqs`; remove HTML-strip regex |
| `src/app/blog/breastfeeding-calorie-needs/content.ts` | Create | `header` + `h2Faqs` (2 entries) |
| `src/app/blog/breastfeeding-calorie-needs/page.tsx` | Modify | Import content; `jsonLd` reads `c.header`; `faqJsonLd` reads `c.h2Faqs` |

---

## Task 1: postpartum-hair-loss — add h2Faqs and switch schema

**Files:**
- Modify: `src/app/blog/postpartum-hair-loss/content.ts`
- Modify: `src/app/blog/postpartum-hair-loss/page.tsx`

- [ ] **Step 1: Add `h2Faqs` to content.ts**

Open `src/app/blog/postpartum-hair-loss/content.ts`. The file currently ends its main sections with a `whenSeeDoctor` block, then a `faqs` array at around line 61. Insert the `h2Faqs` field **between** `whenSeeDoctor` and `faqs`:

```typescript
  // insert this block between whenSeeDoctor and faqs
  h2Faqs: [
    {
      q: "Why Does Postpartum Hair Loss Happen?",
      a: "After birth, oestrogen drops sharply, releasing hair held in the growth phase throughout pregnancy. All retained hair sheds simultaneously — a process called telogen effluvium that affects most new mothers."
    },
    {
      q: "When Does Postpartum Hair Loss Start?",
      a: "Shedding typically begins 2–4 months after birth. Some women notice it as early as eight weeks; others not until month six."
    },
    {
      q: "When Does Postpartum Hair Loss Peak?",
      a: "The peak usually occurs at months 3–4 postpartum. It marks the midpoint — after the peak, the growth cycle begins to reset and shedding tapers off."
    },
    {
      q: "When Does Postpartum Hair Loss Stop?",
      a: "For most mothers, shedding tapers off by 6–9 months postpartum. By the baby's first birthday, hair has usually returned to its pre-pregnancy growth cycle."
    },
    {
      q: "Does Breastfeeding Make Hair Loss Worse?",
      a: "No. Postpartum hair loss is hormonal and affects breastfeeding and non-breastfeeding mothers equally. Breastfeeding may shift the timing slightly but does not increase the amount shed."
    },
    {
      q: "What Can You Do About Postpartum Hair Loss?",
      a: "You cannot stop telogen effluvium once started. Support recovery by avoiding tight hairstyles, skipping heat styling, using a wide-tooth comb, and eating biotin-rich foods like eggs and nuts."
    },
    {
      q: "When Should You See a Doctor About Postpartum Hair Loss?",
      a: "See your doctor if shedding is still intense after 12 months, if you notice patchy bald spots, or if hair loss is accompanied by fatigue, weight changes, or feeling unusually cold."
    }
  ],
```

- [ ] **Step 2: Update `faqJsonLd` in page.tsx**

Open `src/app/blog/postpartum-hair-loss/page.tsx`. Find the `faqJsonLd` constant (around line 53). Change `c.faqs.map` to `c.h2Faqs.map`:

**Before:**
```typescript
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
```

**After:**
```typescript
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.h2Faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
```

- [ ] **Step 3: Build to verify no TypeScript errors**

```bash
cd /Users/josef214/Downloads/NurtureCalc-main && npm run build 2>&1 | tail -20
```

Expected: build completes with no TypeScript errors. If you see `Property 'h2Faqs' does not exist`, the field was not inserted at the right level in the content object — check indentation and that `h2Faqs` is a top-level key of the exported object.

- [ ] **Step 4: Verify schema output in built file**

```bash
grep -o '"FAQPage"' out/blog/postpartum-hair-loss/index.html | wc -l
```

Expected: `1` (one FAQPage script tag).

```bash
grep -o 'When Does Postpartum Hair Loss Stop' out/blog/postpartum-hair-loss/index.html | wc -l
```

Expected: `2` — once in the HTML body H2, once inside the JSON-LD script.

- [ ] **Step 5: Commit**

```bash
git add src/app/blog/postpartum-hair-loss/content.ts src/app/blog/postpartum-hair-loss/page.tsx
git commit -m "feat(seo): switch postpartum-hair-loss FAQPage schema to H2-based questions"
```

---

## Task 2: diastasis-recti — add h2Faqs and switch schema

**Files:**
- Modify: `src/app/blog/diastasis-recti/content.ts`
- Modify: `src/app/blog/diastasis-recti/page.tsx`

- [ ] **Step 1: Add `h2Faqs` to content.ts**

Open `src/app/blog/diastasis-recti/content.ts`. Insert the `h2Faqs` field **between** `howLongHealing` and `faqs` (around line 83):

```typescript
  // insert between howLongHealing and faqs
  h2Faqs: [
    {
      q: "What Is Diastasis Recti?",
      a: "Diastasis recti is an overstretching of the connective tissue between the abdominal muscles during pregnancy. The muscles are undamaged — they have moved apart as the tissue softened to accommodate the growing baby."
    },
    {
      q: "Can Diastasis Recti Heal On Its Own?",
      a: "Partially, yes. Natural narrowing occurs in the first 6–8 weeks as the uterus shrinks. Significant separation rarely resolves fully without targeted deep-core exercise to restore tissue tension."
    },
    {
      q: "How Common Is Diastasis Recti?",
      a: "Up to 60% of women have some degree of diastasis recti in the immediate postpartum period. Some research suggests nearly all women have some separation by the third trimester."
    },
    {
      q: "How Do You Check for Diastasis Recti at Home?",
      a: "Lie on your back with knees bent. Place fingers just above the belly button and do a small head lift. A gap of two or more finger-widths, especially if the tissue feels soft, suggests separation."
    },
    {
      q: "How Do You Start Healing Diastasis Recti?",
      a: "The foundation is diaphragmatic breathing. As you exhale, gently lift the pelvic floor and draw the deep abdominal muscles inward. This coordinates breath with core engagement before any strengthening begins."
    },
    {
      q: "Which Exercises Help Diastasis Recti Heal?",
      a: "Exercises targeting the transverse abdominis — heel slides, modified dead bugs, bird dogs, and glute bridges — rebuild deep core stability without excessive intra-abdominal pressure."
    },
    {
      q: "When Should You See a Women's Health Physiotherapist?",
      a: "See a physio if your gap is wider than 2–3 finger-widths after 12 weeks, if correct exercise shows no improvement after 3 months, or if you have any back, hip, or pelvic pain or heaviness."
    },
    {
      q: "How Does Diastasis Recti Affect the Pelvic Floor?",
      a: "The deep core works as one unit. A gap at the front shifts intra-abdominal pressure downward onto the pelvic floor, which is why leaking, heaviness, and DR so often appear together."
    },
    {
      q: "Is Surgery Necessary for Diastasis Recti?",
      a: "Surgery is considered only for severe cases where exercise has not restored functional core strength after at least 12 months of rehabilitation. Most women achieve meaningful recovery through deep-core exercise alone."
    },
    {
      q: "How Long Does Diastasis Recti Take to Heal?",
      a: "Functional healing typically takes 6 months to a year of consistent, correct exercise. Full recovery — measured by tissue tension and functional strength, not gap width alone — often takes closer to 12 months."
    }
  ],
```

- [ ] **Step 2: Update `faqJsonLd` in page.tsx**

Open `src/app/blog/diastasis-recti/page.tsx`. Find the `faqJsonLd` constant (around line 53). Replace the entire block:

**Before:**
```typescript
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a.replace(/<[^>]*>?/gm, '') // Strip HTML tags for JSON-LD
      }
    }))
  };
```

**After:**
```typescript
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.h2Faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
```

The HTML-strip regex is removed because `h2Faqs` answers are already plain text.

- [ ] **Step 3: Build to verify no TypeScript errors**

```bash
cd /Users/josef214/Downloads/NurtureCalc-main && npm run build 2>&1 | tail -20
```

Expected: build completes with no errors.

- [ ] **Step 4: Verify schema output**

```bash
grep -o '"FAQPage"' out/blog/diastasis-recti/index.html | wc -l
```

Expected: `1`.

```bash
grep -o 'How Long Does Diastasis Recti Take to Heal' out/blog/diastasis-recti/index.html | wc -l
```

Expected: `2` — H2 in body + in JSON-LD script.

- [ ] **Step 5: Commit**

```bash
git add src/app/blog/diastasis-recti/content.ts src/app/blog/diastasis-recti/page.tsx
git commit -m "feat(seo): switch diastasis-recti FAQPage schema to H2-based questions"
```

---

## Task 3: breastfeeding-calorie-needs — create content.ts and standardise schema

**Files:**
- Create: `src/app/blog/breastfeeding-calorie-needs/content.ts`
- Modify: `src/app/blog/breastfeeding-calorie-needs/page.tsx`

- [ ] **Step 1: Create content.ts**

Create `src/app/blog/breastfeeding-calorie-needs/content.ts` with the following content:

```typescript
export const breastfeedingCalorieNeedsContent = {
  header: {
    headline: "How Many Calories Do You Need When Breastfeeding? CDC Guide and Calculator",
    description: "Producing milk is hard work. Ensure you are properly fuelling your body by understanding exactly how many extra calories your body burns each day.",
    datePublished: "2026-03-25",
    dateModified: "2026-04-10",
  },
  h2Faqs: [
    {
      q: "What Affects Your Breastfeeding Calorie Needs?",
      a: "Your needs scale with nursing frequency. A mother exclusively feeding a newborn 8–12 times a day requires more energy than one whose baby has started solids and nurses 3–4 times daily."
    },
    {
      q: "How Do You Calculate Your Breastfeeding Calorie Needs?",
      a: "Calculate your TDEE based on your weight, height, age, and activity level, then add 450–500 extra calories for exclusive breastfeeding, or 300 extra calories once mixed feeding begins."
    }
  ]
};
```

- [ ] **Step 2: Update page.tsx to import content and use h2Faqs**

Open `src/app/blog/breastfeeding-calorie-needs/page.tsx`.

**Add import** at the top of the file, after the existing imports:

```typescript
import { breastfeedingCalorieNeedsContent } from "./content";
```

**Inside `export default function BlogPost()`**, add as the first line of the function body:

```typescript
  const c = breastfeedingCalorieNeedsContent;
```

**Replace the hardcoded `jsonLd` object** (currently lines 23–48) with:

```typescript
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.headline,
    "description": c.header.description,
    "author": {
      "@type": "Organization",
      "name": "NurtureCalc Editorial Team",
      "url": "https://nurturecalc.com/author/nurturecalc-team/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com"
    },
    "datePublished": c.header.datePublished,
    "dateModified": c.header.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/breastfeeding-calorie-needs"
    },
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    }
  };
```

**Replace the hardcoded `faqJsonLd` object** (currently lines 50–87) with:

```typescript
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.h2Faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
```

The rest of the JSX (all the HTML content, the inline FAQ accordion, the CTA, footer) is untouched.

- [ ] **Step 3: Build to verify no TypeScript errors**

```bash
cd /Users/josef214/Downloads/NurtureCalc-main && npm run build 2>&1 | tail -20
```

Expected: build completes with no errors. The static export writes `out/blog/breastfeeding-calorie-needs/index.html`.

- [ ] **Step 4: Verify schema output**

```bash
grep -o '"FAQPage"' out/blog/breastfeeding-calorie-needs/index.html | wc -l
```

Expected: `1`.

```bash
grep -o 'What Affects Your Breastfeeding Calorie Needs' out/blog/breastfeeding-calorie-needs/index.html | wc -l
```

Expected: `1` — appears only in the JSON-LD script (this H2 text does not appear verbatim in the page body).

```bash
grep -o '"Article"' out/blog/breastfeeding-calorie-needs/index.html | wc -l
```

Expected: `1`.

- [ ] **Step 5: Commit**

```bash
git add src/app/blog/breastfeeding-calorie-needs/content.ts src/app/blog/breastfeeding-calorie-needs/page.tsx
git commit -m "feat(seo): standardise breastfeeding-calorie-needs to content.ts pattern with H2-based FAQPage schema"
```

---

## Post-Implementation Validation

After all three tasks are committed, validate all three pages in Google's Rich Results Test. These steps are manual.

- [ ] Run `npm run build && npm start` to serve the production build locally on port 3000.
- [ ] Visit `https://search.google.com/test/rich-results` and test each URL using the "URL" option after deploying, or use the "Code" option by pasting the contents of the relevant `out/blog/<slug>/index.html` file.
- [ ] Confirm each page shows a valid **FAQPage** rich result with the expected questions.
- [ ] Confirm each page shows a valid **Article** rich result.
- [ ] Check answer character counts: no answer in the schema should exceed 300 characters. Verify with:

```bash
node -e "
const fs = require('fs');
['postpartum-hair-loss','diastasis-recti','breastfeeding-calorie-needs'].forEach(slug => {
  const html = fs.readFileSync(\`out/blog/\${slug}/index.html\`, 'utf8');
  const tags = [...html.matchAll(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/g)];
  const faqTag = tags.find(m => m[1].includes('\"FAQPage\"'));
  if (!faqTag) { console.log(slug + ': no FAQPage found'); return; }
  const json = JSON.parse(faqTag[1]);
  json.mainEntity.forEach(q => {
    const len = q.acceptedAnswer.text.length;
    if (len > 300) console.log(slug, '| OVER 300:', len, '|', q.name);
  });
  console.log(slug + ': all answers OK');
});
"
```

Expected: `all answers OK` for each slug. If any answer is flagged, shorten it in the relevant `content.ts` and rebuild.
