export type TierType = {
  name: string
  href: string
  description: string
  effort: 1 | 2 | 3 | 4 | 5
}

export type SectionType = {
  name: string
  features: Array<{
    name: string
    tiers: {
      [key in string]: boolean | string
    }
  }>
}

export type LanguageType = { label: string; disabled: boolean; hide?: boolean }

export type StackType = {
  frontEnd: LanguageType
  backEnd: LanguageType[]
}
