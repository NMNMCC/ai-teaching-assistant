import {createRoot} from "react-dom/client"
import {Route, Router} from "wouter"
import {Intro} from "./page/intro.tsx"
import Dashboard from "./page/dashboard.tsx"
import {Shell} from "./layout/shell.tsx"

createRoot(document.getElementById("root")!)
	.render(
		<Shell>
			<Router>
				<Route path="/" component={Intro}></Route>
				<Route path="/dashboard" component={Dashboard}></Route>
			</Router>
		</Shell>,
	)
