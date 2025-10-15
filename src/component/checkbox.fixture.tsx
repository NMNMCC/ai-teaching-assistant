import {Checkbox} from "./checkbox.tsx"

export default {
	"Basic": (
		<Checkbox
			title="Basic Checkbox"
			description="This is a basic checkbox"
		/>
	),
	"Checked": (
		<Checkbox
			title="Checked Checkbox"
			description="This checkbox is checked"
			checked
		/>
	),
	"With Label": (
		<Checkbox
			label="A"
			title="Checkbox with Label"
			description="This checkbox has a label"
		/>
	),
}
