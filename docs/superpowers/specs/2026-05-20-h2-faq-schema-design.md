# Design: H2-Based FAQPage Schema for Blog Posts

**Date:** 2026-05-20
**Status:** Approved

---

## Problem

Four blog posts need FAQPage JSON-LD schema whose questions correspond to the question-format H2 headings on the page. This gives Google more FAQ candidates for rich results than the existing curated `c.faqs` arrays, and aligns schema questions with the page's visible heading structure.

## Context

- Stack: **Next.js 16 (React 19) static export** — not Node.js/Express/EJS. Structured data is injected as inline `<script type="application/ld+json">` tags in `page.tsx`.
- Three of the four posts (`postpartum-hair-loss`, `diastasis-recti`, `c-section-recovery-timeline`) already have both Article and FAQPage schema via a `content.ts` pattern. The `faqJsonLd` currently reads from `c.faqs`.
- `breastfeeding-calorie-needs` has hardcoded inline schema and no `content.ts`. It is an outlier that needs standardising.

## Architecture

| Post | Schema change | Structural change |
|---|---|---|
| `postpartum-hair-loss` | FAQPage switches from `c.faqs` → `c.h2Faqs` | Add `h2Faqs` to `content.ts` |
| `diastasis-recti` | FAQPage switches from `c.faqs` → `c.h2Faqs` | Add `h2Faqs` to `content.ts` |
| `c-section-recovery-timeline` | **No change** — H2s are week-based, not questions; existing `c.faqs` (6 Q&As) is already correct | None |
| `breastfeeding-calorie-needs` | FAQPage switches to `c.h2Faqs` from new `content.ts` | Create `content.ts`; migrate hardcoded schema into it |

The HTML FAQ accordion sections on each page continue rendering from `c.faqs` unchanged.

## Data Shape

New field added to each affected `content.ts`:

```typescript
h2Faqs: [
  { q: "Question text matching or rephrased from H2", a: "Plain-text answer, no HTML, no links, under 300 chars." },
  // ...
],
```

In `page.tsx`, the `faqJsonLd` reads from `c.h2Faqs`:

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

## FAQ Entries

### postpartum-hair-loss (7 entries)

All H2s on this post are question-format. Questions are used verbatim except the last, which is rephrased from "What's Normal vs. When to See a Doctor" into a proper question.

| q | a |
|---|---|
| Why Does Postpartum Hair Loss Happen? | After birth, oestrogen drops sharply, releasing hair held in the growth phase throughout pregnancy. All retained hair sheds simultaneously — a process called telogen effluvium that affects most new mothers. |
| When Does Postpartum Hair Loss Start? | Shedding typically begins 2–4 months after birth. Some women notice it as early as eight weeks; others not until month six. |
| When Does Postpartum Hair Loss Peak? | The peak usually occurs at months 3–4 postpartum. It marks the midpoint — after the peak, the growth cycle begins to reset and shedding tapers off. |
| When Does Postpartum Hair Loss Stop? | For most mothers, shedding tapers off by 6–9 months postpartum. By the baby's first birthday, hair has usually returned to its pre-pregnancy growth cycle. |
| Does Breastfeeding Make Hair Loss Worse? | No. Postpartum hair loss is hormonal and affects breastfeeding and non-breastfeeding mothers equally. Breastfeeding may shift the timing slightly but does not increase the amount shed. |
| What Can You Do About Postpartum Hair Loss? | You cannot stop telogen effluvium once started. Support recovery by avoiding tight hairstyles, skipping heat styling, using a wide-tooth comb, and eating biotin-rich foods like eggs and nuts. |
| When Should You See a Doctor About Postpartum Hair Loss? | See your doctor if shedding is still intense after 12 months, if you notice patchy bald spots, or if hair loss is accompanied by fatigue, weight changes, or feeling unusually cold. |

### diastasis-recti (10 entries)

H2s phrased as "how to" or statements are rephrased as questions in the schema `name` field; the H2 on the page is unchanged.

| H2 on page | q in schema | a |
|---|---|---|
| What Is Diastasis Recti? | same | Diastasis recti is an overstretching of the connective tissue between the abdominal muscles during pregnancy. The muscles are undamaged — they have moved apart as the tissue softened to accommodate the growing baby. |
| Can Diastasis Recti Heal On Its Own? | same | Partially, yes. Natural narrowing occurs in the first 6–8 weeks as the uterus shrinks. Significant separation rarely resolves fully without targeted deep-core exercise to restore tissue tension. |
| How Common Is Diastasis Recti? | same | Up to 60% of women have some degree of diastasis recti in the immediate postpartum period. Some research suggests nearly all women have some separation by the third trimester. |
| How to Check If You Have Diastasis Recti | How Do You Check for Diastasis Recti at Home? | Lie on your back with knees bent. Place fingers just above the belly button and do a small head lift. A gap of two or more finger-widths, especially if the tissue feels soft, suggests separation. |
| How to Start Healing: The Breathing Foundation | How Do You Start Healing Diastasis Recti? | The foundation is diaphragmatic breathing. As you exhale, gently lift the pelvic floor and draw the deep abdominal muscles inward. This coordinates breath with core engagement before any strengthening begins. |
| Exercises That Help Diastasis Recti Heal | Which Exercises Help Diastasis Recti Heal? | Exercises targeting the transverse abdominis — heel slides, modified dead bugs, bird dogs, and glute bridges — rebuild deep core stability without excessive intra-abdominal pressure. |
| When Should You See a Women's Health Physiotherapist? | same | See a physio if your gap is wider than 2–3 finger-widths after 12 weeks, if correct exercise shows no improvement after 3 months, or if you have any back, hip, or pelvic pain or heaviness. |
| Diastasis Recti and Your Pelvic Floor — The Connection Nobody Talks About | How Does Diastasis Recti Affect the Pelvic Floor? | The deep core works as one unit. A gap at the front shifts intra-abdominal pressure downward onto the pelvic floor, which is why leaking, heaviness, and DR so often appear together. |
| What About Surgery? | Is Surgery Necessary for Diastasis Recti? | Surgery is considered only for severe cases where exercise has not restored functional core strength after at least 12 months of rehabilitation. Most women achieve meaningful recovery through deep-core exercise alone. |
| How Long Does Diastasis Recti Take to Heal? | same | Functional healing typically takes 6 months to a year of consistent, correct exercise. Full recovery — measured by tissue tension and functional strength, not gap width alone — often takes closer to 12 months. |

### c-section-recovery-timeline

**No changes.** H2s are week-based phase labels, not questions. Existing `c.faqs` (6 Q&As) is already the correct source for FAQPage schema.

### breastfeeding-calorie-needs (2 entries)

Only 2 H2s are question-format. The others ("What the Research Says", "How Calorie Needs Change Month by Month", "What to Eat When Breastfeeding") are informational headers.

| q | a |
|---|---|
| What Affects Your Breastfeeding Calorie Needs? | Your needs scale with nursing frequency. A mother exclusively feeding a newborn 8–12 times a day requires more energy than one whose baby has started solids and nurses 3–4 times daily. |
| How Do You Calculate Your Breastfeeding Calorie Needs? | Calculate your TDEE based on your weight, height, age, and activity level, then add 450–500 extra calories for exclusive breastfeeding, or 300 extra calories once mixed feeding begins. |

## breastfeeding-calorie-needs Migration

This post needs a `content.ts` created with the following fields:
- `header` — metadata (title, author, dates, category, readTime) used by the Article schema
- `h2Faqs` — 2 entries above, used by the FAQPage schema

`page.tsx` is updated to:
1. Import from `./content`
2. Build `articleJsonLd` from `content.header` data (currently hardcoded inline; move the values to content.ts)
3. Build `faqJsonLd` from `c.h2Faqs`

The page body JSX — including the hardcoded HTML FAQ accordion — is not changed. The 4 Q&As remain as inline JSX; they do not move to `content.ts`.

## Google Compliance Rules

All `h2Faqs` answers must satisfy:
- Plain text only — no HTML tags, no markdown, no links
- Under 300 characters
- One accepted answer per question
- Factual — no promotional language, no calls to action, no pricing

The existing `diastasis-recti` schema already strips HTML from `c.faqs` answers with a regex. `h2Faqs` answers are written clean — no stripping needed.

## Files Changed

```
src/app/blog/postpartum-hair-loss/content.ts     — add h2Faqs field
src/app/blog/postpartum-hair-loss/page.tsx        — faqJsonLd reads c.h2Faqs
src/app/blog/diastasis-recti/content.ts           — add h2Faqs field
src/app/blog/diastasis-recti/page.tsx             — faqJsonLd reads c.h2Faqs
src/app/blog/breastfeeding-calorie-needs/content.ts  — create new file
src/app/blog/breastfeeding-calorie-needs/page.tsx    — import content.ts, use c.h2Faqs
```

`c-section-recovery-timeline` — no files changed.
