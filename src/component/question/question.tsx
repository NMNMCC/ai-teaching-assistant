import clsx from "clsx"

export function Question({
	title,
	description,
	children,
	className,
	...other
}: React.FormHTMLAttributes<HTMLFormElement> & {
	title: string
	description?: React.ReactNode
}) {
	return (
		<form
			{...other}
			className={clsx(
				"flex flex-col justify-start items-start gap-4",
				className
			)}
		>
			<div className="flex flex-col justify-start items-start gap-2">
				<h2 className="text-2xl font-bold">{title}</h2>
				<div className="text-lg">{description}</div>
			</div>
			{children}
		</form>
	)
}

export type QuestionProps = React.ComponentProps<typeof Question>
