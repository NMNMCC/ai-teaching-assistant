import clsx from "clsx"
import { useState } from "react"
import { Checkbox } from "../checkbox.tsx"
import { Question, type QuestionProps } from "./question.tsx"

export type Item = {
	title: string
	description?: React.ReactNode
}

export function Choice({
	className,
	items,
	numbering,
	multiple,
	...other
}: QuestionProps & {
	items: Item[]
	numbering?: "decimal" | "alpha"
	multiple?: boolean
}) {
	const [selected, _setSelected] = useState<Record<number, boolean>>({})
	const select = (idx: number, checked: boolean) =>
		!multiple
			? _setSelected({ [idx]: checked })
			: _setSelected({ ...selected, [idx]: checked })

	return (
		<Question {...other}>
			{items
				.map((item) => {
					switch (numbering) {
						case "decimal":
							return {
								...item,
								label: `${items.indexOf(item) + 1}`,
							}
						case "alpha":
							return {
								...item,
								label: String.fromCharCode(
									"A".charCodeAt(0) + items.indexOf(item)
								),
							}
						default:
							return { ...item }
					}
				})
				.map((item, index) => (
					<Checkbox
						key={`${index}${item.title}`}
						{...item}
						checked={selected[index] || false}
						onChange={(checked) => select(index, checked)}
						className={clsx("w-full max-w-full")}
					/>
				))}
		</Question>
	)
}
