import { useState } from "react"
import Card from "../components/Card"
import { quizQuestions } from "../data/quizQuestions"
import QuizIntro from "./quiz/QuizIntro"
import QuizQuestion from "./quiz/QuizQuestion"
import QuizResult from "./quiz/QuizResult"

const TOTAL = quizQuestions.length
const emptyAnswers = () => Array(TOTAL).fill(null)

export default function FinalQuiz() {
  // 0 = intro, 1..5 = questions, 6 = result
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(emptyAnswers())

  // Calculated, not stored
  const score = quizQuestions.filter((q, i) => answers[i] === q.correct).length

  const choose = (questionIndex, optionIndex) =>
    setAnswers((prev) =>
      prev.map((a, i) => (i === questionIndex ? optionIndex : a))
    )

  const restart = () => {
    setAnswers(emptyAnswers())
    setStep(1)
  }

  const views = [
    <QuizIntro key="intro" onStart={() => setStep(1)} />,
    ...quizQuestions.map((q, i) => (
      <QuizQuestion
        key={q.id}
        question={q}
        selected={answers[i]}
        onSelect={(optionIndex) => choose(i, optionIndex)}
        onNext={() => setStep(i + 2)}
      />
    )),
    <QuizResult key="result" score={score} total={TOTAL} onRestart={restart} />,
  ]

  return (
    <section id="quiz" className="bg-blush py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Card className="mx-auto w-full max-w-2xl p-6 md:p-10">
          {/* All screens stacked in one cell: the frame fits the tallest one */}
          <div className="grid">
            {views.map((view, i) => (
              <div
                key={i}
                className={`col-start-1 row-start-1 flex flex-col justify-center transition-opacity duration-300 ${
                  i === step ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {view}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}