import { Choice } from "./choice.tsx"

export default {
	Single: (
		<Choice
			title="Choice the correct answer"
			items={[
				{
					title: "Item A",
				},
				{
					title: "Item B",
				},
			]}
			className="w-128"
		/>
	),
	Multiple: (
		<Choice
			title="Choice the correct answer(s)"
			items={[
				{
					title: "Item A",
				},
				{
					title: "Item B",
				},
			]}
			multiple
			className="w-128"
		/>
	),
	"With Numbering": (
		<Choice
			title="Choice the correct answer"
			items={[
				{
					title: "Item A",
				},
				{
					title: "Item B",
				},
			]}
			numbering="decimal"
			className="w-128"
		/>
	),
	"With Description": (
		<Choice
			title="Why do programmers always mix up Halloween and Christmas?"
			description={
				<>
					While both major holidays with ancient roots, Halloween and
					Christmas possess contrasting atmospheres. Halloween centers
					on spooky, supernatural themes celebrated with costumes and
					trick-or-treating. Conversely, Christmas focuses on joy,
					light, and goodwill, observed through gift-giving and
					festive decorations.
				</>
			}
			items={[
				{
					title: "Because they are both holidays.",
				},
				{
					title: "Because Oct 31 == Dec 25 in base 8.",
				},
				{
					title: "Because they are too busy coding to notice the date.",
				},
				{
					title: "Because they both involve spooky bugs.",
				},
			]}
			className="w-128"
			numbering="alpha"
		/>
	),
}
