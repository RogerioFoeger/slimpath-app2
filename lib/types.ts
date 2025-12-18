export type MetabolismType = 
  | 'hormonal'
  | 'inflammatory'
  | 'cortisol'
  | 'metabolic'
  | 'retention'
  | 'insulinic'

export interface QuizQuestion {
  id: number
  question: string
  options: {
    text: string
    type: MetabolismType
    weight: number
  }[]
}

export interface QuizResult {
  type: MetabolismType
  score: number
  percentage: number
}

export interface MetabolismTypeInfo {
  type: MetabolismType
  name: string
  title: string
  headline: string
  description: string
  icon: string
  color: string
  symptoms: string[]
  causes: string[]
  solution: string
  features: string[]
}

