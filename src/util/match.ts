export const match = <TIn, TOut = never>(
	i: TIn,
	cases: [TIn[] | "default", (i: TIn) => TOut][]
) => {
	for (const [k, v] of cases) {
		if (k === "default") {
			continue
		}
		if (k.includes(i)) {
			return v(i)
		}
	}

	const _default = cases.find(([k]) => k === "default")
	if (_default) {
		return _default[1](i)
	}

	throw new Error(`Non-exhaustive match for value: ${i}`)
}
