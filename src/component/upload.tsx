import {Input} from "./input.tsx"

export function Upload(
	{...other}: React.InputHTMLAttributes<HTMLInputElement>,
) {
	return (
		<Input {...other} variant="normal" type="file" clickable>
			<div className="h-24 flex flex-row justify-center items-center gap-2 select-none hover:cursor-pointer">
				<div className="material-symbols-sharp text-8xl">
					publish
				</div>
				<div className="h-full p-4 flex flex-col justify-start items-start gap-2">
					<div className="h-fit text-2xl font-bold">
						上传文件
					</div>
					<div className="h-0 grow">
						点击此处或将文件拖拽到此处
					</div>
				</div>
			</div>
		</Input>
	)
}
