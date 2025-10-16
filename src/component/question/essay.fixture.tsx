import { Essay } from "./essay.tsx"

export default {
	Basic: (
		<Essay
			editor={{ limit: 300 }}
			title="Essay Question"
			description="Please write an essay on the given topic."
		/>
	),
	"With Upload": (
		<Essay
			editor={{ limit: 300 }}
			upload
			title="Essay Question"
			description="You can upload documents to support your essay."
		/>
	),
}
