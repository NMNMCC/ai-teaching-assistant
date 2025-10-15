import React from "react"

export default ({children}: React.PropsWithChildren) => (
	<div className="w-full h-dvh flex justify-center items-center">
		{children}
	</div>
)
