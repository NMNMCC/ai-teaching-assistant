import React from "react"
import clsx from "clsx"
import {Box} from "./box.tsx"

export function Input(
	{children, variant, className, clickable, ...other}:
		React.PropsWithChildren<
			& React.InputHTMLAttributes<HTMLInputElement>
			& {variant: "normal" | "monospace"; clickable?: boolean}
		>,
) {
	return (
		<Box
			className={clsx(
				"bg-gray-50 focus-within:bg-white",
				className,
			)}
			clickable={clickable}
		>
			<label
				className={clsx(
					"flex",
					"w-full",
					"h-full",
				)}
			>
				{children}
				<input
					{...other}
					className={clsx(
						variant === "normal" ? "font-sans" : "font-mono",
						"outline-0",
						"px-2",
						"py-1",
						"text-lg",
						"align-bottom",
					)}
					hidden={children !== undefined}
				/>
			</label>
		</Box>
	)
}
