import { QuizQuestion } from './types'

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How often do you experience bloating or puffiness?",
    options: [
      { text: "Very frequently - I feel bloated almost every day", type: 'inflammatory', weight: 3 },
      { text: "Often, especially after certain meals", type: 'retention', weight: 2 },
      { text: "Occasionally, particularly before my period", type: 'hormonal', weight: 2 },
      { text: "Rarely or never", type: 'metabolic', weight: 1 }
    ]
  },
  {
    id: 2,
    question: "What best describes your energy levels throughout the day?",
    options: [
      { text: "Constant crashes, especially after meals", type: 'insulinic', weight: 3 },
      { text: "Low and tired most of the time", type: 'cortisol', weight: 3 },
      { text: "Fluctuates with my menstrual cycle", type: 'hormonal', weight: 2 },
      { text: "Generally low, always feel cold", type: 'metabolic', weight: 2 }
    ]
  },
  {
    id: 3,
    question: "How would you describe your stress levels?",
    options: [
      { text: "Constantly stressed and overwhelmed", type: 'cortisol', weight: 3 },
      { text: "Moderate stress, hard to relax", type: 'cortisol', weight: 2 },
      { text: "Manageable most of the time", type: 'metabolic', weight: 1 },
      { text: "Generally low stress", type: 'metabolic', weight: 1 }
    ]
  },
  {
    id: 4,
    question: "What are your biggest food cravings?",
    options: [
      { text: "Sweets, bread, pasta - anything sugary or carb-heavy", type: 'insulinic', weight: 3 },
      { text: "Salty, crunchy snacks", type: 'retention', weight: 2 },
      { text: "Comfort foods when stressed", type: 'cortisol', weight: 2 },
      { text: "No major cravings", type: 'metabolic', weight: 1 }
    ]
  },
  {
    id: 5,
    question: "Where do you tend to gain weight first?",
    options: [
      { text: "Around my belly and midsection", type: 'cortisol', weight: 3 },
      { text: "Hips, thighs, and butt", type: 'hormonal', weight: 2 },
      { text: "All over, evenly distributed", type: 'metabolic', weight: 2 },
      { text: "Seems like water weight everywhere", type: 'retention', weight: 3 }
    ]
  },
  {
    id: 6,
    question: "How's your sleep quality?",
    options: [
      { text: "Terrible - trouble falling or staying asleep", type: 'cortisol', weight: 3 },
      { text: "Disrupted, especially during certain times of the month", type: 'hormonal', weight: 2 },
      { text: "Okay but never feel fully rested", type: 'inflammatory', weight: 2 },
      { text: "Generally good", type: 'metabolic', weight: 1 }
    ]
  },
  {
    id: 7,
    question: "Do you experience any of these symptoms?",
    options: [
      { text: "Joint pain, skin issues, or digestive problems", type: 'inflammatory', weight: 3 },
      { text: "Mood swings or irregular periods", type: 'hormonal', weight: 3 },
      { text: "Swelling in hands, feet, or face", type: 'retention', weight: 3 },
      { text: "Always hungry, even after eating", type: 'insulinic', weight: 3 }
    ]
  },
  {
    id: 8,
    question: "What's your dieting history?",
    options: [
      { text: "Tried many diets - lose weight then gain it back quickly", type: 'metabolic', weight: 3 },
      { text: "Work out hard but can't lose weight", type: 'cortisol', weight: 2 },
      { text: "Cut calories but nothing happens", type: 'metabolic', weight: 2 },
      { text: "Haven't tried much yet", type: 'insulinic', weight: 1 }
    ]
  },
  {
    id: 9,
    question: "How does your weight fluctuate?",
    options: [
      { text: "Changes 5+ pounds day to day", type: 'retention', weight: 3 },
      { text: "Varies significantly with menstrual cycle", type: 'hormonal', weight: 3 },
      { text: "Slowly increases over time", type: 'metabolic', weight: 2 },
      { text: "Spikes after carb-heavy meals", type: 'insulinic', weight: 2 }
    ]
  },
  {
    id: 10,
    question: "What health conditions do you have or suspect?",
    options: [
      { text: "PCOS, endometriosis, or hormone issues", type: 'hormonal', weight: 3 },
      { text: "Pre-diabetes or blood sugar issues", type: 'insulinic', weight: 3 },
      { text: "IBS, food sensitivities, or gut problems", type: 'inflammatory', weight: 3 },
      { text: "Thyroid issues or slow metabolism", type: 'metabolic', weight: 3 }
    ]
  }
]

