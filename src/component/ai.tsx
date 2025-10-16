import clsx from "clsx"
import { Action, type ActionProps } from "./action"
import { match } from "../util/match"
import type { Merge } from "../util/merge"
import React from "react"

export type AISize = "small" | "medium" | "large"

export function AI({ size, ...other }: Merge<ActionProps, { size?: AISize }>) {
	const [speed, setSpeed] = React.useState(1)
	const [deg, setDeg] = React.useState(0)

	React.useEffect(() => {
		const interval = setInterval(
			() => {
				setDeg((deg) => (deg + 0.1) % 360)
			},
			10 * (1 / speed)
		)
		return () => clearInterval(interval)
	}, [speed])
	return (
		<Action
			{...other}
			onMouseEnter={() => setSpeed(8)}
			onMouseLeave={() => setSpeed(1)}
			theme="border-4 border-transparent text-white font-semibold hover:font-bold text-opacity-95 hover:text-opacity-100 hover:brightness-110%"
			className={clsx(
				match(size || "medium", [
					[["small"], () => "w-8 h-8 text-xs hover:text-sm"],
					[["medium"], () => "w-12 h-12 text-xl hover:text-2xl"],
					[["large"], () => "w-16 h-16 text-3xl hover:text-4xl"],
				])
			)}
			in={{
				style: {
					background: `linear-gradient(blue, darkcyan) padding-box,
                    conic-gradient(from ${deg}deg, #f63b35 0%, #f63b35 3%, #1265f0 7%, #477dff 17%, #2caf4f 20%, #72bb44 25%, #ffe523 27%, #ffcc25 30%, #ea4335 33%, #ea4335 45%, #1265f0 49%, #477dff 68%, #34a853 72%, #2caf4f 79%, #ffe523 82%, #ffcc25 87%, #f63b35 90%, #f63b35 100%) border-box`,
				},
				className: clsx(
					match(size || "medium", [
						[["small"], () => "px-2 py-1 text-sm"],
						[["medium"], () => "px-4 py-2 text-base"],
						[["large"], () => "px-6 py-3 text-lg"],
					])
				),
			}}
		>
			AI
		</Action>
	)
}

export type AIProps = React.ComponentProps<typeof AI>
