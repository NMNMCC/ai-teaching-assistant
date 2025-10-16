export type Resolver<TIn, TOut> = (i: TIn) => TOut
export type Finally<TIn, TOut> = (i: TIn, o: TOut, matched: boolean) => TOut

export const match = <TIn, TOut = never>(
	i: TIn,
	cases: (
		| [TIn[], Resolver<TIn, TOut>]
		| ["default", Resolver<TIn, TOut>]
		| ["finally", Finally<TIn, TOut>]
	)[]
) => {
	const _default = cases.find((c) => c[0] === "default")?.[1]
	const _finally = cases.find((c) => c[0] === "finally")?.[1]

	for (const [values, resolver] of cases.filter(
		(v) => typeof v[0] !== "string"
	)) {
		if (values.includes(i)) {
			if (_finally) {
				return _finally(i, resolver(i), true)
			}
			return resolver(i)
		}
	}

	if (_default) {
		if (_finally) {
			return _finally(i, _default(i), false)
		}
		return _default(i)
	}

	throw new Error(`No match for value: ${i}`)
}
