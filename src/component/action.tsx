import {Button as BaseButton} from "@headlessui/react"
import clsx from "clsx"
import React from "react"

export type ActionVariant = "primary" | "secondary" | "plain"

export function Action(
	{children, variant, as, className, ...other}: React.PropsWithChildren<
		& React.ButtonHTMLAttributes<HTMLButtonElement>
		& {variant: ActionVariant; as?: React.ElementType}
	>,
) {
	return (
		<BaseButton as={as || React.Fragment}>
			{({hover, active}) => {
				return (
					<button
						{...other}
						type="button"
						className={clsx(
							"outline-0",
							"relative",
							hover && "cursor-pointer",
							// !active ? "scale-100" : "scale-95",
							"origin-bottom-right",
							"transition-[scale]",
							className,
						)}
					>
						<div
							className={clsx(
								"relative",
								"flex",
								"justify-center",
								"items-center",
								"w-full",
								"h-full",
								variant === "primary"
									? (!hover
										? "border-blue-700 bg-blue-600"
										: "border-blue-900 bg-blue-700")
									: variant === "secondary"
									? (!hover
										? "border-amber-700 bg-amber-600"
										: "border-amber-900 bg-amber-700")
									: (
										!hover
											? "border-gray-700 bg-gray-600"
											: "border-gray-900 bg-gray-700"
									),
								!active ? "left-0 top-0" : "left-1 top-1",
								"border-4",
								"px-3",
								"py-2",
								"text-lg",
								"text-white",
								"transition-[left,top,border-color,background-color]",
							)}
						>
							{children}
						</div>
						<div
							className={clsx(
								"absolute",
								"left-1",
								"top-1",
								"-z-10",
								"w-full",
								"h-full",
								"bg-black",
							)}
						>
						</div>
					</button>
				)
			}}
		</BaseButton>
	)
}
