import type React from "react"

export const define = <P extends object, A extends object>(
	view: React.FC<P>,
	transformer: (props: A) => P,
	name?: string,
): React.FC<A> => {
	return Object.assign(
		(props: A) => view(transformer(props)),
		{view, transformer, displayName: name || view.name},
	)
}
