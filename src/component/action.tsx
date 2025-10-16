import { Button } from "@headlessui/react"
import clsx from "clsx"
import React from "react"
import { Box, type BoxProps } from "./box.tsx"

export function Action({
	submit,
	theme,
	className,
	in: _in,
	...other
}: BoxProps<"button"> & {
	submit?: boolean
}) {
	return (
		<Button as={React.Fragment}>
			{({ active }) => {
				return (
					<Box
						{...other}
						as="button"
						theme={theme ?? "neutral"}
						className={clsx("select-none", className)}
						in={{
							..._in,
							type: submit ? "submit" : "button",
							className: clsx(
								"hover:cursor-pointer",
								!active ? "brightness-100" : "brightness-95"
							),
						}}
						clickable
					/>
				)
			}}
		</Button>
	)
}

export type ActionProps = React.ComponentProps<typeof Action>
