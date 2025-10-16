import clsx from "clsx"
import React from "react"
import type { StandardTheme } from "./theme.ts"
import { match } from "../util/match.ts"

export function Box<T extends React.ElementType = "div">({
	theme,
	children,
	className,
	in: _in,
	clickable,
	as,
	...other
}: React.PropsWithChildren<
	React.HTMLAttributes<HTMLDivElement> & {
		theme?: StandardTheme | (string & {})
		clickable?: boolean
		in?: React.ComponentPropsWithoutRef<T>
		as?: T
	}
>) {
	const InnerComponent = as || "div"

	return (
		<div
			{...other}
			className={clsx(
				"relative",
				"origin-bottom-right",
				"transition-[scale]",
				className
			)}
		>
			<InnerComponent
				{...(_in ?? {})}
				className={clsx(
					"relative",
					"flex",
					"justify-center",
					"items-center",
					"w-full",
					"h-full",
					clickable && "left-0 top-0 active:left-1 active:top-1",
					clsx(
						match(theme ?? "plain", [
							[
								["primary", "blue"],
								() =>
									"border-blue_light bg-blue_dark text-white",
							],
							[
								["secondary", "purple"],
								() =>
									"border-purple_light bg-purple_dark text-white",
							],
							[
								["neutral", "grey"],
								() =>
									"border-gray_light bg-gray_dark text-white",
							],
							[
								["plain"],
								() => "border-black bg-white text-black",
							],
							[
								["red"],
								() => "border-red_light bg-red_dark text-white",
							],
							[
								["green"],
								() =>
									"border-green_light bg-green_dark text-white",
							],
							["default", () => theme],
							[
								"finally",
								(i, matched) =>
									matched
										? clsx(
												"border-4",
												"text-lg",
												"text-black",
												i
											)
										: i,
							],
						])
					),
					"px-3",
					"py-2",
					"transition-all",
					_in?.className
				)}
			>
				{children}
			</InnerComponent>
			<div
				className={clsx(
					"pointer-events-none",
					"absolute",
					"left-1",
					"top-1",
					"-z-100",
					"w-full",
					"h-full",
					"bg-black"
				)}
			></div>
		</div>
	)
}

export type BoxProps<T extends React.ElementType = "div"> = Parameters<
	typeof Box<T>
>[0]
