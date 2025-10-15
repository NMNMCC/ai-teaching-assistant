import {Action} from "./action.tsx"
import {Input} from "./input.tsx"

export default {
	"Normal": <Input variant="normal" placeholder="Type here..."></Input>,
	"Monospace": <Input variant="monospace" placeholder="Type here..."></Input>,
	"With Action": (
		<div className="flex flex-row gap-4 justify-center items-center h-12">
			<Action variant="secondary" className="h-full" tabIndex={0}>
				<span className="material-symbols-sharp">
					add
				</span>
			</Action>
			<Input
				variant="normal"
				className="h-full"
				placeholder="这个知识点可以怎么出题？"
				tabIndex={0}
			>
			</Input>
			<Action variant="primary" className="h-full" tabIndex={0}>
				<span className="material-symbols-sharp">
					send
				</span>
			</Action>
		</div>
	),
}
