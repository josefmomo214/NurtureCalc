export interface Guide {
  slug: string
  title: string
  filename: string
  description: string
  pageCount: number
  relatedCalculatorUrl: string
  relatedCalculatorName: string
}

export const guides: Guide[] = [
  {
    slug: "breastfeeding-weight-loss-truth",
    title: "The Breastfeeding Weight Loss Truth",
    filename: "breastfeeding-weight-loss-truth.pdf",
    description: "The safe weight loss rate by stage, real breastfeeding calorie needs, and the signs you're eating enough — all in one printable guide.",
    pageCount: 4,
    relatedCalculatorUrl: "/safe-weight-loss/",
    relatedCalculatorName: "Safe Weight Loss Calculator"
  },
  {
    slug: "pelvic-floor-recovery-guide",
    title: "Pelvic Floor Recovery: What Actually Helps",
    filename: "pelvic-floor-recovery-guide.pdf",
    description: "How long recovery actually takes, why Kegels aren't always the answer, and the honest signs it's time to see a specialist.",
    pageCount: 4,
    relatedCalculatorUrl: "/pelvic-floor-recovery/",
    relatedCalculatorName: "Pelvic Floor Recovery Estimator"
  }
]
