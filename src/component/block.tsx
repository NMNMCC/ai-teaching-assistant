import { Button } from "@headlessui/react"
import { Box } from "./box.tsx"
import clsx from "clsx/lite"
import React from "react"

export function Block({
	children,
	className,
	icon,
	...other
}: React.PropsWithChildren<
	React.HTMLAttributes<HTMLDivElement> & {
		icon: string
	}
>) {
	return (
		<Button as={React.Fragment}>
			{({ hover, active }) => (
				<Box
					{...other}
					in={{ className: clsx("select-none", className) }}
				>
					<div className={clsx("flex flex-col min-w-24 min-h-24")}>
						<div
							className={clsx(
								"h-0 grow material-symbols-sharp text-4xl",
								hover && "filled"
							)}
						>
							{icon}
						</div>
						<div className="flex flex-row justify-end items-center w-full text-lg text-right">
							<div
								className={clsx(
									"underline-offset-4",
									!active ? "no-underline" : "underline"
								)}
							>
								{children}
							</div>
							<div
								className={clsx(
									"material-symbols-sharp",
									!hover
										? "w-0 opacity-0 ml-0"
										: "w-4 opacity-100 ml-2",
									"transition-[width,opacity,margin-left]"
								)}
							>
								arrow_forward
							</div>
						</div>
					</div>
				</Box>
			)}
		</Button>
	)
}
