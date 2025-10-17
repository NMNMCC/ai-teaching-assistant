import i18n from "./library/index.ts"
import { create } from "zustand"
import zhCN from "./zh-CN.tsx"
import enUS from "./en-US.tsx"

const locale = {
	"zh-CN": zhCN,
	"en-US": enUS,
} as const

const engine = i18n("zh-CN", locale)

export type Locales = keyof typeof locale

type LocaleStore = {
	current: string
	get: ReturnType<typeof engine>
	set: (l: Locales) => void
}

export const useLocale = create<LocaleStore>((set) => ({
	current: navigator.language,
	get: engine(undefined),
	set: (l: Locales) => set({ get: engine(l), current: l }),
}))
