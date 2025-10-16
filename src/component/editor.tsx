import clsx from "clsx"
import { Action } from "./action.tsx"
import { Box } from "./box.tsx"
import React from "react"
import isHotkey from "is-hotkey"
import rehypeMathjax from "rehype-mathjax"
import remarkMath from "remark-math"
import type { MonacoEditorProps } from "@uiw/react-monacoeditor"
import type { Merge } from "../util/merge.ts"

const MonacoEditor = React.lazy(() => import("@uiw/react-monacoeditor"))
const Markdown = React.lazy(() => import("react-markdown"))

export type EditorMode = "view" | "edit"

export function Editor({
	content: _content,
	mode: _mode,
	in: _in,
	actions,
	limit,
	className,
	onChange,
	...other
}: Merge<
	React.HTMLAttributes<HTMLDivElement>,
	{
		content?: string
		mode?: EditorMode
		actions?: React.ReactNode[]
		in?: MonacoEditorProps
		limit?: number
		onChange?: (content: string) => any
	}
>) {
	const [content, setContent] = React.useState(_content ?? "")
	const [mode, setMode] = React.useState<EditorMode>(_mode ?? "edit")
	const format = React.useRef<() => undefined>(() => undefined)

	return (
		<div
			{...other}
			className={clsx(
				"min-w-180 flex flex-col justify-start items-center",
				className
			)}
		>
			<div className="h-10 *:h-full w-full flex flex-row justify-start items-end">
				<Action
					theme={mode === "edit" ? "red" : "green"}
					onClick={() => setMode(mode === "edit" ? "view" : "edit")}
				>
					{mode === "edit" ? "编辑" : "预览"}
				</Action>
				<Action
					theme="secondary"
					className={clsx(mode === "view" && "hidden")}
					onClick={format.current}
				>
					格式化
				</Action>
			</div>
			<Box
				className="w-full grow min-h-0"
				in={{
					className:
						"flex flex-row justify-stretch items-stretch overflow-hidden",
				}}
			>
				<MonacoEditor
					{...(_in ?? {})}
					onKeyDown={(e) => {
						if (isHotkey("ctrl+s", e)) {
							e.preventDefault()
							format.current()
						}
					}}
					language="markdown"
					className={clsx(
						mode === "view" && "hidden",
						"w-full h-full min-h-0"
					)}
					options={{
						glyphMargin: false,
						folding: false,
						lineNumbers: "off",
						lineDecorationsWidth: 0,
						lineNumbersMinChars: 0,
						minimap: {
							enabled: false,
						},
						scrollbar: {
							vertical: "auto",
						},
						overviewRulerLanes: 0,
						lightbulb: {
							enabled: false,
						},
						renderLineHighlight: "none",
						wordBasedSuggestions: false,
						formatOnPaste: true,
						unicodeHighlight: {
							nonBasicASCII: false,
						},
						wordWrap: "bounded",
						tabSize: 4,
					}}
					editorDidMount={(editor, monaco) => {
						const formatAction = editor.getAction(
							"editor.action.formatDocument"
						)
						format.current = () => {
							formatAction?.run()
						}

						monaco.languages.registerDocumentFormattingEditProvider(
							"markdown",
							{
								displayName: "Prettier",
								provideDocumentFormattingEdits: async (
									model,
									_options
								) => {
									try {
										const prettier = await import(
											"prettier/standalone"
										)
										const markdown = await import(
											"prettier/parser-markdown"
										)

										const text = model.getValue()
										const formatted = await prettier.format(
											text,
											{
												parser: "markdown",
												plugins: [markdown],
												proseWrap: "always",
												useTabs: true,
											}
										)

										return [
											{
												range: model.getFullModelRange(),
												text: formatted,
											},
										]
									} catch (error) {
										console.error(
											"Prettier formatting error:",
											error
										)
										return []
									}
								},
							}
						)
					}}
					value={_content}
					onChange={(content) => {
						setContent(content)
						onChange?.(content)
					}}
				></MonacoEditor>
				<article
					className={clsx(
						"overflow-auto [scroll-width:thin]",
						mode === "edit" && "hidden",
						"prose-sm max-w-full w-full h-full min-h-0"
					)}
				>
					<Markdown
						skipHtml
						rehypePlugins={[rehypeMathjax]}
						remarkPlugins={[remarkMath]}
					>
						{content}
					</Markdown>
				</article>
			</Box>
			<div className="h-10 *:h-full w-full flex flex-row justify-between items-start gap-4">
				<Box
					theme="neutral"
					className="h-full"
					in={{
						className:
							"flex flex-row justify-center items-center gap-2",
					}}
				>
					<div className="material-symbols-sharp">asterisk</div>
					<div>
						{content.length}
						{limit ? ` / ${limit}` : ""}
					</div>
				</Box>
				<div className="h-full *:h-full flex flex-row-reverse justify-start items-start">
					{actions?.map((action, index) => (
						<React.Fragment key={index}>{action}</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

export type EditorProps = React.ComponentProps<typeof Editor>
