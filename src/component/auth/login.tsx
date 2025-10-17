import clsx from "clsx"
import { Action } from "../action.tsx"
import { Input } from "../input.tsx"
import { Box } from "../box.tsx"

export function Login({
	className,
	...other
}: React.FormHTMLAttributes<HTMLFormElement>) {
	return (
		<form {...other} className={clsx("flex flex-col", className)}>
			<Box>
				<div className="w-full h-full *:w-full flex flex-col gap-4 justify-start items-start px-2 py-4">
					<h1 className="text-4xl font-bold">登录</h1>
					<div className="flex flex-col gap-2 text-base">
						<p>用户名</p>
						<Input
							className="w-full font-mono"
							type="text"
							placeholder="用户名"
						></Input>
					</div>
					<div className="flex flex-col gap-2 text-base">
						<p>密码</p>
						<Input
							className="w-full font-mono"
							type="password"
							placeholder="密码"
						></Input>
					</div>
				</div>
			</Box>
			<div className="h-10 *:h-full w-full flex flex-row-reverse justify-start items-start gap-4">
				<Action theme="primary">提交</Action>
			</div>
		</form>
	)
}
