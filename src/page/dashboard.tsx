import {useState} from "react"
import {define} from "../define.tsx"

export default define(
	function Dashboard({text}: {text: string}) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					height: "100%",
					width: "100%",
				}}
			>
				<div>{text}</div>
			</div>
		)
	},
	() => {
		const [text, _] = useState<string>("Dashboard")
		return {
			text,
		}
	},
)
