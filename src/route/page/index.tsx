import { Login } from "../../component/auth/login.tsx"
import { useLocale } from "../../locale/_.ts"

export function Landing() {
	const i = useLocale()
	return (
		<>
			<div className="w-full h-fit flex flex-row justify-between items-start">
				<div className="leading-tight w-fit h-full flex flex-col justify-center items-center">
					<div className="text-8xl font-semibold whitespace-pre-line">
						{i.get("landing->slogan")}
					</div>
				</div>
				<div className="grow flex flex-row-reverse justify-start items-start">
					<Login className="w-128"></Login>
				</div>
			</div>
		</>
	)
}
