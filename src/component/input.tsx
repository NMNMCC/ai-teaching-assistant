import React from "react"
import clsx from "clsx"
import { Box } from "./box.tsx"

export function Input({
	children,
	className,
	clickable,
	...other
}: React.PropsWithChildren<
	React.InputHTMLAttributes<HTMLInputElement> & { clickable?: boolean }
>) {
	return (
		<Box theme="plain" className={clsx(className)} clickable={clickable}>
			<label className={clsx("flex", "w-full", "h-full")}>
				{children}
				<input
					{...other}
					className={clsx(
						"w-full",
						"outline-0",
						"px-2",
						"py-1",
						"text-lg",
						"align-bottom"
					)}
					hidden={children !== undefined}
				/>
			</label>
		</Box>
	)
}
