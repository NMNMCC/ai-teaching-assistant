import { Action } from "../../component/action.tsx"
import { Box } from "../../component/box.tsx"
import { useLocale } from "../../locale/_.ts"

export function Shell({
	children,
	...other
}: React.HTMLAttributes<HTMLDivElement>) {
	const i = useLocale()
	return (
		<div
			{...other}
			className="w-full h-full flex flex-col justify-center items-center gap-4 p-4"
		>
			<header className="w-full h-fit flex flex-row justify-between items-center gap-4">
				<Box>
					<span>
						<span className="font-bold">AI</span> Teaching Assistant
					</span>
				</Box>
				<div className="flex flex-row-reverse justify-start items-center gap-4">
					<Action>
						<span className="material-symbols-sharp text-2xl">
							person
						</span>
					</Action>
					<div>
						<button
							className="hover:cursor-pointer"
							onClick={() => {
								if (i.current === "zh-CN") {
									i.set("en-US")
								} else {
									i.set("zh-CN")
								}
							}}
						>
							{i.current === "zh-CN" ? "ZH" : "EN"}
						</button>
					</div>
				</div>
			</header>
			<div className="w-full h-full">{children}</div>
			<footer></footer>
		</div>
	)
}
