import React from "react"
import { Action } from "../action.tsx"
import { Editor, type EditorProps } from "../editor.tsx"
import { Question, type QuestionProps } from "./question.tsx"
import type { Merge } from "../../util/merge.ts"
import { Upload } from "../upload.tsx"

export function Essay({
	className,
	editor,
	upload,
	...other
}: Merge<
	QuestionProps,
	{
		editor?: EditorProps
		upload?: boolean
	}
>) {
	const [content, setContent] = React.useState("")

	return (
		<Question
			{...other}
			onSubmit={(e) => {
				e.preventDefault()
				alert(content)
			}}
		>
			<Editor
				{...editor}
				className="w-full h-60"
				actions={[<Action submit>提交</Action>]}
				onChange={setContent}
			></Editor>
			{upload && (
				<>
					<Upload />
				</>
			)}
		</Question>
	)
}
