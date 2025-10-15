import clsx from "clsx"
import {Box} from "./box.tsx"
import {Checkbox as BaseCheckbox, type CheckboxProps} from "@headlessui/react"
import {Action} from "./action.tsx"
import React from "react"

export function Checkbox(
	{label, title, description, className, ...other}:
		& CheckboxProps
		& {
			title: string
			description?: React.ReactNode
			label?: string
		},
) {
	return (
		<BaseCheckbox {...other} as={React.Fragment}>
			{({checked}) => {
				return (
					<div
						className={clsx(
							"flex flex-row justify-start",
							!checked ? "items-start" : "items-stretch",
							className,
						)}
					>
						<div className="flex flex-row justify-end items-start w-10 h-10 shrink-0 grow-0">
							<Action
								variant={!checked ? "plain" : "primary"}
								className={clsx(
									!checked ? "w-8 h-8" : "w-10 h-10",
									"align-text-bottom",
									"transition-[width,height]",
								)}
							>
								{label
									? (
										<span
											className={clsx(
												!checked
													? "font-normal"
													: "font-bold",
											)}
										>
											{label}
										</span>
									)
									: (
										<span className="material-symbols-sharp">
											{checked ? "check" : " "}
										</span>
									)}
							</Action>
						</div>
						<Box
							className="w-fit grow"
							classNameContent={clsx(
								"flex flex-row gap-2 justify-start items-stretch",
								"bg-gray-50",
							)}
						>
							<div className="w-full flex flex-col">
								<div className="flex flex-row text-lg font-medium">
									{title}
								</div>
								{description && (
									<div className="text-base">
										{description}
									</div>
								)}
							</div>
						</Box>
					</div>
				)
			}}
		</BaseCheckbox>
	)
}
