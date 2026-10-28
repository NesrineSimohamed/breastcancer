import Card from "../../components/Card"
import NumberBadge from "../../components/NumberBadge"
import { screeningTypes } from "../../data/screeningTypes"

export default function ScreeningTypes() {
  return (
    <ul className="space-y-4">
      {screeningTypes.map((type) => (
        <li key={type.id}>
          <Card className="border border-brand/10">
            <div className="flex items-center gap-3">
              <NumberBadge>{type.id}</NumberBadge>
              <h3 className="font-bold text-brand">{type.title}</h3>
            </div>
            <p className="mt-3 leading-8 text-ink/80">{type.text}</p>
          </Card>
        </li>
      ))}
    </ul>
  )
}