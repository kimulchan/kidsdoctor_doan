export type ArgumentsType<F extends Function> = F extends (
  ...arg: infer A
) => any
  ? A
  : never;
