import React from "react";
import { ButtonSearch } from "../components/ButtonSearch";
import { Table } from "../components/Table";
import { InputSearch } from "../components/InputSearch";
import { ChangeEvent, useState } from "react";
import { api } from "../service/api";

interface Address {
  bairro?: string;
  cep?: string;
  complemento?: string;
  localidade?: string;
  logradouro?: string;
  uf?: string;
}

function Main() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState<Address>();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  async function getCep() {
    const response = await api.get(`/${search}/json`);

    setResponse(response.data);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <InputSearch handleSearch={handleSearch} />
      <ButtonSearch getCep={getCep} />
      <Table response={response ? response : {}} />
    </div>
  );
}

export default Main;
