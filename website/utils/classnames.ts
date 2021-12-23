type ClassName = string | undefined

export function classNames(...classes: ClassName[]) {
  return classes.filter(Boolean).join(' ')
}
