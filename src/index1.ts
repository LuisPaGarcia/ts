type FuncValidador = (c: number) => { [k: string]: number } | null

const f: FuncValidador = value => {
  return {
    a: value
  }
}

f(1)
