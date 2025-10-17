import { Router, Route as R, type RouterProps } from "wouter"
import { Shell } from "./layout/shell"
import { Landing } from "./page"

export function App({ ...other }: Omit<RouterProps, "children">) {
	return (
		<Router {...other}>
			<Shell>
				<R path="/" component={Landing}></R>
				<R></R>
			</Shell>
		</Router>
	)
}
