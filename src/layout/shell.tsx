import {
	Header,
	HeaderGlobalAction,
	HeaderGlobalBar,
	HeaderName,
} from "@carbon/react"
import {User} from "@carbon/react/icons"
import {Link} from "wouter"

export function Shell({children}: React.PropsWithChildren) {
	return (
		<>
			<Header>
				<HeaderName href="/" prefix="AI" as={Link}>
					Teaching Assistant
				</HeaderName>
				<HeaderGlobalBar>
					<HeaderGlobalAction
						aria-label="User Profile"
						tooltipAlignment="end"
					>
						<User />
					</HeaderGlobalAction>
				</HeaderGlobalBar>
			</Header>
			{children}
		</>
	)
}
