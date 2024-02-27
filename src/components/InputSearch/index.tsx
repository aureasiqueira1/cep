import React from "react";

import { ChangeEventHandler } from "react";

type Props = { handleSearch: ChangeEventHandler<HTMLInputElement> };

export function InputSearch({ handleSearch }: Props) {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <form className="w-full">
        <input
          type="text"
          placeholder="Digite o CEP..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
          onChange={handleSearch}
        />
      </form>
      <div className="h-px bg-slate-700" />
    </div>
  );
}
