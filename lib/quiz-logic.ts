import { MetabolismType, QuizResult } from './types'

export function calculateQuizResult(answers: Record<number, { type: MetabolismType; weight: number }>): QuizResult {
  const scores: Record<MetabolismType, number> = {
    hormonal: 0,
    inflammatory: 0,
    cortisol: 0,
    metabolic: 0,
    retention: 0,
    insulinic: 0
  }

  // Calculate scores based on answers
  Object.values(answers).forEach(answer => {
    scores[answer.type] += answer.weight
  })

  // Find the highest score
  let maxScore = 0
  let resultType: MetabolismType = 'cortisol'
  
  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score
      resultType = type as MetabolismType
    }
  })

  // Calculate total possible score
  const totalAnswered = Object.keys(answers).length
  const maxPossible = totalAnswered * 3 // Max weight is 3

  return {
    type: resultType,
    score: maxScore,
    percentage: Math.round((maxScore / maxPossible) * 100)
  }
}

export function saveQuizResult(result: QuizResult): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('quizResult', JSON.stringify(result))
  }
}

export function getQuizResult(): QuizResult | null {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('quizResult')
    if (saved) {
      return JSON.parse(saved)
    }
  }
  return null
}

