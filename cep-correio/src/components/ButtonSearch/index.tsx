import * as Dialog from "@radix-ui/react-dialog";

type Props = { getCep: Function };

export function ButtonSearch({ getCep }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        onClick={() => getCep()}
        className="rounded-md text-left bg-slate-800 flex flex-col p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none"
      >
        <p className="text-sm leading-6 text-slate-400">RESULTADO</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
