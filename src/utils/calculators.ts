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

// 2. Breastfeeding Calorie Needs Estimator (TDEE)
export function calculateTDEE(weightKg: number, heightCm: number, age: number, activityLevel: number, feedingStatus: string) {
  // Mifflin-St Jeor for women
  const bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
  
  const baseTDEE = bmr * activityLevel;

  let bonus = 0;
  if (feedingStatus === 'exclusive') bonus = 500;
  if (feedingStatus === 'partial') bonus = 300;

  return baseTDEE + bonus;
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

import { WHO_WEIGHT_LMS_DATA } from "@/data/whoWeightLms";

// 5. Baby Weight Percentile (WHO Standards LMS Method 0-52 weeks)
function calculateZScore(w: number, m: number, l: number, s: number) {
  if (Math.abs(l) < 1e-7) return Math.log(w / m) / s;
  return (Math.pow(w / m, l) - 1) / (l * s);
}

function zToPercentile(z: number) {
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
  throw new Error("Baby weight percentile calculation is temporarily unavailable while reference data is being verified.");
}

