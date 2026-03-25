// NurtureCalc Pure Calculation Logic

// 1. Safe Weight Loss Rate
export function calculateSafeWeightLoss(weeks: number, isBreastfeeding: boolean) {
  if (isBreastfeeding) {
    if (weeks < 12) return { maxRate: 0.25, message: "A very gentle rate of up to 0.25 kg per week is safest while establishing your milk supply in the first 12 weeks." };
    return { maxRate: 0.5, message: "A moderate rate of up to 0.5 kg per week is generally safe after 12 weeks of breastfeeding." };
  } else {
    if (weeks < 6) return { maxRate: 0, message: "We recommend waiting until at least 6 weeks postpartum before actively trying to lose weight to prioritize your initial recovery." };
    return { maxRate: 0.75, message: "A rate of up to 0.75 kg per week is considered a relatively safe upper limit after your initial 6-week recovery phase." };
  }
}

// 2. Breastfeeding Calorie Needs Estimator
export function calculateCalorieNeeds(age: number, weightKg: number, heightCm: number, activityLevel: string, dailyFeeds: string) {
  // Mifflin-St Jeor for women
  const bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
  
  let multiplier = 1.2;
  switch (activityLevel) {
    case 'light': multiplier = 1.375; break;
    case 'moderate': multiplier = 1.55; break;
    case 'active': multiplier = 1.725; break;
  }
  
  const baseTDEE = Math.round(bmr * multiplier);

  let bonus = 0;
  switch (dailyFeeds) {
    case '1-3': bonus = 300; break;
    case '4-6': bonus = 400; break;
    case '7-9': bonus = 500; break;
    case '10+': bonus = 600; break;
  }

  return { base: baseTDEE, bonus, total: baseTDEE + bonus };
}

// 3. Exercise Timeline
export function calculateExerciseTimeline(deliveryType: string, weeks: number, hasSymptoms: boolean) {
  if (hasSymptoms) {
    return { 
      label: "Not yet ready", 
      suggestion: "Please consult a pelvic floor physiotherapist before returning to exercise. Symptoms indicate your core/pelvic systems need expert support.",
      color: "text-[#E8A0A8]" 
    };
  }

  if (deliveryType === 'vaginal') {
    if (weeks < 6) return { label: "Not yet ready", suggestion: "Gentle walking and deep breathing only.", color: "text-[#E8A0A8]" };
    if (weeks <= 12) return { label: "Gentle start", suggestion: "Walking, stretching, postnatal yoga.", color: "text-yellow-600" };
  } else {
    if (weeks < 8) return { label: "Not yet ready", suggestion: "Short walks to promote circulation only.", color: "text-[#E8A0A8]" };
    if (weeks <= 12) return { label: "Gentle start", suggestion: "Low impact bodyweight movements only.", color: "text-yellow-600" };
  }

  if (weeks <= 20) return { label: "Building up", suggestion: "Add structured bodyweight exercises or light resistance.", color: "text-blue-600" };
  
  return { label: "Full return", suggestion: "Listen to your body as you gradually reintroduce previous activities and intensity.", color: "text-green-600" };
}

// 4. Pelvic Floor Quiz
export function calculatePelvicFloor(score: number) {
  if (score <= 7) return { 
    stage: "Early Recovery", 
    message: "Your pelvic floor needs dedicated support. We highly recommend seeing a pelvic floor physiotherapist for a personalized assessment." 
  };
  if (score <= 11) return { 
    stage: "Progressing", 
    message: "You are making progress but still experiencing vulnerability. Focus on gentle connection and consider a check-up with a physiotherapist." 
  };
  if (score <= 14) return { 
    stage: "Good Progress", 
    message: "Your recovery is on a positive track. Continue with consistent core connection and gradual load introduction." 
  };
  return { 
    stage: "Strong Recovery", 
    message: "Excellent! Your symptoms suggest a competent pelvic floor. Continue maintaining strength as you increase activity." 
  };
}

// 5. Baby Weight Percentile (Simplified WHO Z-score approximation)
function calculateZScore(w: number, m: number, l: number, s: number) {
  if (l === 0) return Math.log(w / m) / s;
  return (Math.pow(w / m, l) - 1) / (l * s);
}

function zToPercentile(z: number) {
  // Abramowitz and Stegun approximation of standard normal CDF
  const p = 0.2316419;
  const b1 = 0.319381530;
  const b2 = -0.356563782;
  const b3 = 1.781477937;
  const b4 = -1.821255978;
  const b5 = 1.330274429;

  const t = 1 / (1 + p * Math.abs(z));
  const zSq = z * z;
  const phi = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * zSq);
  
  const prob = 1 - phi * (b1 * t + b2 * t * t + b3 * Math.pow(t, 3) + b4 * Math.pow(t, 4) + b5 * Math.pow(t, 5));
  
  const cdf = z > 0 ? prob : 1 - prob;
  return Math.round(cdf * 100);
}

export function calculateBabyWeightPercentile(sex: string, ageWeeks: number, weightKg: number) {
  // Highly simplified LMS lookup for months (0, 3, 6, 9, 12 months roughly)
  // Mapping weeks to approximate months: 0=0m, 13=3m, 26=6m, 39=9m, 52=12m
  
  const boysLMS = [
    { w: 0, l: 0.3809, m: 3.3465, s: 0.14602 },
    { w: 13, l: -0.0543, m: 6.4251, s: 0.11718 },
    { w: 26, l: -0.1601, m: 7.9332, s: 0.10996 },
    { w: 39, l: -0.1802, m: 8.9416, s: 0.10709 },
    { w: 52, l: -0.1472, m: 9.6433, s: 0.10584 },
  ];

  const girlsLMS = [
    { w: 0, l: 0.3486, m: 3.2322, s: 0.14171 },
    { w: 13, l: -0.0601, m: 5.8427, s: 0.11584 },
    { w: 26, l: -0.1583, m: 7.2954, s: 0.11051 },
    { w: 39, l: -0.1528, m: 8.2396, s: 0.11030 },
    { w: 52, l: -0.1026, m: 8.9481, s: 0.11186 },
  ];

  const table = sex === 'boy' ? boysLMS : girlsLMS;
  
  // Find closest lower and upper bounds for linear interpolation
  let lower = table[0], upper = table[table.length - 1];
  for (let i = 0; i < table.length - 1; i++) {
    if (ageWeeks >= table[i].w && ageWeeks <= table[i+1].w) {
      lower = table[i];
      upper = table[i+1];
      break;
    }
  }

  // Linear interpolation for l, m, s
  let factor = 0;
  if (upper.w !== lower.w) {
    factor = (ageWeeks - lower.w) / (upper.w - lower.w);
  }
  
  const l = lower.l + factor * (upper.l - lower.l);
  const m = lower.m + factor * (upper.m - lower.m);
  const s = lower.s + factor * (upper.s - lower.s);

  const z = calculateZScore(weightKg, m, l, s);
  let pct = zToPercentile(z);
  
  if (pct <= 0) pct = 1;
  if (pct >= 100) pct = 99;

  let color = "bg-green-100 text-green-800 border-green-200";
  if ((pct >= 5 && pct < 15) || (pct > 85 && pct <= 97)) color = "bg-yellow-100 text-yellow-800 border-yellow-200";
  if (pct < 5 || pct > 97) color = "bg-red-100 text-red-800 border-red-200";

  return {
    percentile: pct,
    color,
    message: "Percentiles show growth patterns over time — one measurement is just a starting point."
  };
}
