import clsx from "clsx"
import React from "react"

export function Box(
	{children, border, className, classNameContent, clickable, ...other}:
		React.PropsWithChildren<
			React.HTMLAttributes<HTMLDivElement> & {
				border?: string
				clickable?: boolean
				classNameContent?: string
			}
		>,
) {
	return (
		<div
			{...other}
			className={clsx(
				"relative",
				"hover:cursor-pointer",
				// "scale-100 active:scale-95",
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
					clickable && "left-0 top-0 active:left-1 active:top-1",
					!border
						? "border-grey-800 focus-within:border-grey-600"
						: border,
					"border-4",
					"px-3",
					"py-2",
					"text-lg",
					"text-black",
					"transition-[left,top,border-color,background-color]",
					classNameContent,
				)}
			>
				{children}
			</div>
			<div
				className={clsx(
					"absolute",
					"hover:scale-125",
					"left-1",
					"top-1",
					"-z-10",
					"w-full",
					"h-full",
					"bg-black",
				)}
			>
			</div>
		</div>
	)
}
