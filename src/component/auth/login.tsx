import clsx from "clsx"
import { Action } from "../action.tsx"
import { Input } from "../input.tsx"

export function Login({
	className,
	...other
}: React.FormHTMLAttributes<HTMLFormElement>) {
	return (
		<form
			{...other}
			className={clsx("flex flex-col gap-4 min-w-96", className)}
		>
			<h1 className="text-4xl font-bold">登录</h1>
			<div className="flex flex-col gap-2 text-base">
				<p>用户名</p>
				<Input
					className="font-mono"
					type="text"
					placeholder="用户名"
				></Input>
			</div>
			<div className="flex flex-col gap-2 text-base">
				<p>密码</p>
				<Input
					className="font-mono"
					type="password"
					placeholder="密码"
				></Input>
			</div>
			<div className="w-full flex flex-row justify-end">
				<Action theme="primary">提交</Action>
			</div>
		</form>
	)
}
