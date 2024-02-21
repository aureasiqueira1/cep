type Props = { getCep: Function };

export function ButtonSearch({ getCep }: Props) {
  return (
    <>
      <button
        onClick={() => getCep()}
        className="text-sm leading-6 text-slate-400 rounded-md bg-slate-800 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 bg-gradient-to-t from-black/60 to-black/0"
      >
        RESULTADO
      </button>
    </>
  );
}
