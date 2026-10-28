import Card from "../../components/Card"
import { riskFactors } from "../../data/riskFactors"

export default function RiskFactors() {
  return (
    // 1 column on phones, 2 on tablets, 4 on large screens
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {riskFactors.map((factor) => (
        <li key={factor.id}>
          <Card className="h-full border border-brand/10">
            <h3 className="font-bold text-brand">{factor.title}</h3>
            <p className="mt-2 text-sm leading-7 text-ink/70">{factor.text}</p>
          </Card>
        </li>
      ))}
    </ul>
  )
}