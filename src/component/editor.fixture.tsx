import { Action } from "./action.tsx"
import { Editor } from "./editor.tsx"

export default {
	"Lorem ipsum": (
		<Editor
			className="w-180 h-120"
			content={`# Lorem ipsum\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
		/>
	),
	Chinese: (
		<Editor
			className="w-180 h-120"
			content={`# 赤壁赋\n\n盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎！且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭。是造物者之无尽藏也，而吾与子之所共适。`}
		/>
	),
	Math: (
		<Editor
			className="w-180 h-120"
			content={`# Math\n\nHere are some math equations:\n\nInline: $E=mc^2$\n\nBlock:\n\n$$\n\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\n$$\n\nAnother block:\n\n$$\n\\frac{d}{dx}e^{ax} = ae^{ax}\n$$`}
		/>
	),
	"With Actions": (
		<Editor
			className="w-180 h-120"
			content={`# With Actions\n\nThis editor has action buttons below.`}
			actions={[
				<Action theme="secondary" className="h-full" tabIndex={0}>
					Action 1
				</Action>,
			]}
		/>
	),
}
