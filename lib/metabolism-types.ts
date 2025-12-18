import { MetabolismTypeInfo } from './types'

export const METABOLISM_TYPES: Record<string, MetabolismTypeInfo> = {
  cortisol: {
    type: 'cortisol',
    name: 'Cortisol Type',
    title: 'Stress-Driven Weight Gain',
    headline: 'Your Stress Hormones Are Blocking Weight Loss',
    description: 'Chronic stress has elevated your cortisol levels, causing your body to store fat - especially around your midsection. Your metabolism is in "survival mode" and refuses to let go of weight no matter how hard you try.',
    icon: '⚡',
    color: '#FFC107',
    symptoms: [
      'Constant stress or feeling overwhelmed',
      'Weight gain concentrated around belly',
      'Trouble sleeping or staying asleep',
      'Always feeling tired despite rest',
      'Cravings for comfort foods',
      'Difficulty losing weight despite effort'
    ],
    causes: [
      'Chronic work or life stress',
      'Poor sleep quality',
      'Overtraining without recovery',
      'Constant dieting and restriction'
    ],
    solution: 'The SlimPath Cortisol Protocol focuses on stress reduction, sleep optimization, and gentle nutrition changes that lower cortisol naturally.',
    features: [
      'Stress-reducing daily practices',
      'Cortisol-lowering nutrition plan',
      'Sleep optimization techniques',
      'Gentle exercise routines',
      'Mindfulness and relaxation tools'
    ]
  },
  hormonal: {
    type: 'hormonal',
    name: 'Hormonal Type',
    title: 'Hormone Imbalance Blocking Fat Loss',
    headline: 'Your Hormonal Imbalance Is Sabotaging Your Weight Loss',
    description: 'Your reproductive hormones (estrogen, progesterone, testosterone) are out of balance, causing weight gain, mood swings, and metabolic dysfunction. Traditional diets fail because they ignore your hormonal reality.',
    icon: '🌸',
    color: '#FF6B9D',
    symptoms: [
      'Irregular or painful periods',
      'Mood swings and irritability',
      'Weight gain before menstruation',
      'Low libido',
      'Breast tenderness',
      'Difficulty losing weight during certain times of month'
    ],
    causes: [
      'Estrogen dominance',
      'Birth control or hormone medications',
      'PCOS or endometriosis',
      'Perimenopause or menopause',
      'High stress affecting hormone production'
    ],
    solution: 'The SlimPath Hormonal Protocol balances your hormones naturally through cycle-synced nutrition, specific exercises, and targeted supplements.',
    features: [
      'Cycle-synced meal plans',
      'Hormone-balancing foods',
      'Phase-appropriate exercises',
      'Natural supplement guidance',
      'PMS and symptom relief strategies'
    ]
  },
  inflammatory: {
    type: 'inflammatory',
    name: 'Inflammatory Type',
    title: 'Chronic Inflammation Storing Fat',
    headline: 'Hidden Inflammation Is Keeping You Overweight',
    description: 'Your body is fighting a constant battle with inflammation. This chronic inflammation disrupts your metabolism, makes it impossible to lose weight, and keeps you feeling bloated and uncomfortable.',
    icon: '🔥',
    color: '#FF5722',
    symptoms: [
      'Frequent bloating and puffiness',
      'Joint pain or stiffness',
      'Digestive issues (gas, constipation)',
      'Skin problems (acne, rashes)',
      'Always feeling run down',
      'Water retention despite low sodium'
    ],
    causes: [
      'Food sensitivities or allergies',
      'Gut health imbalances',
      'Processed food consumption',
      'Environmental toxins',
      'Lack of anti-inflammatory foods'
    ],
    solution: 'The SlimPath Inflammatory Protocol eliminates inflammatory triggers and floods your body with anti-inflammatory nutrients to restore metabolic function.',
    features: [
      'Anti-inflammatory meal plans',
      'Food sensitivity identification',
      'Gut healing protocols',
      'Inflammation-fighting superfoods',
      'Toxin reduction strategies'
    ]
  },
  metabolic: {
    type: 'metabolic',
    name: 'Metabolic Type',
    title: 'Slow Metabolism Storing Calories',
    headline: 'Your Slow Metabolism Is Sabotaging Every Diet',
    description: 'Years of yo-yo dieting have damaged your metabolism. Your body now burns far fewer calories than it should, making weight loss feel impossible even on very low calorie diets.',
    icon: '⚙️',
    color: '#2196F3',
    symptoms: [
      'Gain weight easily, lose slowly',
      'Always feel cold',
      'Low energy despite adequate sleep',
      'Constipation or slow digestion',
      'Difficulty losing weight on low calories',
      'History of yo-yo dieting'
    ],
    causes: [
      'Years of restrictive dieting',
      'Metabolic adaptation',
      'Thyroid dysfunction',
      'Insufficient protein intake',
      'Lack of muscle mass'
    ],
    solution: 'The SlimPath Metabolic Protocol rebuilds your metabolism through reverse dieting, strength training, and metabolic restoration techniques.',
    features: [
      'Metabolism-boosting meal plans',
      'Strategic calorie increases',
      'Strength training routines',
      'Thyroid-supporting nutrition',
      'Metabolic restoration tracking'
    ]
  },
  retention: {
    type: 'retention',
    name: 'Retention Type',
    title: 'Water Retention Hiding Progress',
    headline: 'Water Retention Is Masking Your Real Weight Loss',
    description: 'Your body is holding onto excess water, making you look and feel heavier than you actually are. This water retention is hiding your true fat loss progress and keeping you discouraged.',
    icon: '💧',
    color: '#00BCD4',
    symptoms: [
      'Extreme bloating and puffiness',
      'Swollen ankles or fingers',
      'Face looks puffy',
      'Clothes fit differently day-to-day',
      'Weight fluctuates 5+ lbs daily',
      'Indentations from socks or jewelry'
    ],
    causes: [
      'High sodium intake',
      'Hormonal fluctuations',
      'Dehydration paradoxically',
      'Carbohydrate manipulation',
      'Lack of potassium-rich foods',
      'Sedentary lifestyle'
    ],
    solution: 'The SlimPath Retention Protocol eliminates excess water through strategic nutrition, natural diuretic foods, and lymphatic drainage techniques.',
    features: [
      'Water-releasing meal plans',
      'Natural diuretic foods',
      'Lymphatic drainage exercises',
      'Sodium-potassium balance',
      'De-bloating daily routines'
    ]
  },
  insulinic: {
    type: 'insulinic',
    name: 'Insulinic Type',
    title: 'Insulin Resistance Storing Fat',
    headline: 'Your Blood Sugar Issues Are Blocking Fat Loss',
    description: 'Your cells have become resistant to insulin, causing your body to store everything as fat. High blood sugar spikes throughout the day keep you in fat-storage mode 24/7.',
    icon: '🍯',
    color: '#9C27B0',
    symptoms: [
      'Intense sugar and carb cravings',
      'Energy crashes after meals',
      'Always hungry even after eating',
      'Dark patches on skin',
      'Abdominal weight gain',
      'Pre-diabetes or diabetes diagnosis'
    ],
    causes: [
      'High sugar and refined carb diet',
      'Sedentary lifestyle',
      'Genetics and family history',
      'PCOS or metabolic syndrome',
      'Chronic stress affecting blood sugar'
    ],
    solution: 'The SlimPath Insulinic Protocol reverses insulin resistance through strategic carb timing, blood sugar stabilization, and metabolic healing.',
    features: [
      'Blood sugar-stabilizing meals',
      'Strategic carb timing',
      'Insulin-sensitizing exercises',
      'Glucose monitoring guidance',
      'Supplement recommendations'
    ]
  }
}

export function getMetabolismType(type: string): MetabolismTypeInfo {
  return METABOLISM_TYPES[type] || METABOLISM_TYPES.cortisol
}

