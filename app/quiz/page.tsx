'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { ProgressBar } from '@/components/ProgressBar'
import { QUIZ_QUESTIONS } from '@/lib/quiz-questions'
import { calculateQuizResult, saveQuizResult } from '@/lib/quiz-logic'
import { MetabolismType } from '@/lib/types'

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, { type: MetabolismType; weight: number }>>({})
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const question = QUIZ_QUESTIONS[currentQuestion]
  const isLastQuestion = currentQuestion === QUIZ_QUESTIONS.length - 1

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = () => {
    if (selectedOption === null) return

    const selectedAnswer = question.options[selectedOption]
    const newAnswers = {
      ...answers,
      [question.id]: {
        type: selectedAnswer.type,
        weight: selectedAnswer.weight
      }
    }
    setAnswers(newAnswers)

    if (isLastQuestion) {
      // Calculate result and redirect
      const result = calculateQuizResult(newAnswers)
      saveQuizResult(result)
      router.push(`/result?type=${result.type}`)
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8 px-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Metabolism Type Quiz</h1>
          <p className="text-gray-600">Answer honestly for the most accurate results</p>
        </div>
        <ProgressBar current={currentQuestion + 1} total={QUIZ_QUESTIONS.length} />
      </div>

      {/* Question Card */}
      <Card className="max-w-2xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedOption === index
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedOption === index
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedOption === index && (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </div>
                <span className="text-gray-700">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="flex-1"
          >
            ← Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="flex-1"
          >
            {isLastQuestion ? 'See My Result →' : 'Next →'}
          </Button>
        </div>
      </Card>

      {/* Footer Note */}
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <p className="text-sm text-gray-500">
          ✓ Your answers are private and secure · No email required
        </p>
      </div>
    </div>
  )
}

