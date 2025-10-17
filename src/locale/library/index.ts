type Path<T, S extends string> = T extends object
	? {
			[K in keyof T]: `${Exclude<K, symbol>}${Path<T[K], S> extends never ? "" : `${S}${Path<T[K], S>}`}`
		}[keyof T]
	: never

type FromPath<
	T,
	P extends string,
	S extends string,
> = P extends `${infer K}${S}${infer R}`
	? K extends keyof T
		? FromPath<T[K], R, S>
		: never
	: P extends keyof T
		? T[P]
		: never

const match = <T extends string[]>(
	source: string,
	targets: T
): T[number] | null => {
	const [language] = source.split("-")
	return (
		targets.find((target) => target === source) ??
		targets.find((target) => target === language) ??
		null
	)
}

const matchMany = <T extends string[]>(
	[head, ...tail]: readonly string[],
	targets: T
): T[number] | null =>
	head === undefined ? null : match(head, targets) || matchMany(tail, targets)

export default <
	T extends { [K in string]: T[K] },
	K extends keyof T,
	S extends string = "->",
>(
	_default: K,
	locale: T,
	{
		splitter = "->" as S,
		sources = navigator.languages,
	}: Partial<{
		splitter: S
		sources: readonly string[]
	}> = {}
) => {
	const locales = Object.keys(locale)
	let matched = (matchMany(sources, locales) || _default) as keyof T

	return function get(k = matched) {
		return <P extends Path<T[K], S>>(p: P): FromPath<T[K], P, S> => {
			const leaves = p.split(splitter) as string[]

			return leaves.reduce((acc, curr) => {
				if (acc && typeof acc === "object" && curr in acc) {
					return (acc as Record<string, any>)[curr]
				} else {
					if (k !== _default) {
						console.warn(
							`'${p}' can not be found in locale '${k.toString()}', falling back to main '${_default.toString()}'.`
						)
						return get(_default)(p)
					} else {
						throw new Error(
							`'${p}' can not be found in locale '${k.toString()}' and no fallback is available.`
						)
					}
				}
			}, locale[k!]!) as any
		}
	}
}
