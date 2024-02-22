import { getAllByText, render } from "@testing-library/react";
import { Table } from ".";

describe("Table component", () => {
  it("should render correctly", () => {
    expect(render(<Table response={{}} />));
  });

  it('should render "CEP INEXISTENTE!" when response does not contain data', () => {
    const response = {};
    const { getByText } = render(<Table response={response} />);
    expect(getByText("CEP INEXISTENTE!")).toBeDefined();
  });

  it("should render the table correctly when response contains data", () => {
    const response = {
      uf: "SP",
      localidade: "São Paulo",
      bairro: "Jardim Paulista",
      logradouro: "Avenida Paulista",
      complemento: "lado ímpar",
    };
    const { getByText } = render(<Table response={response} />);
    expect(getByText("SP")).toBeDefined();
    expect(getByText("São Paulo")).toBeDefined();
    expect(getByText("Jardim Paulista")).toBeDefined();
    expect(getByText("Avenida Paulista")).toBeDefined();
    expect(getByText("lado ímpar")).toBeDefined();
  });

  it("should render the table correctly when response does not contains bairro, logradour, complemento", () => {
    const response = {
      uf: "MG",
      localidade: "Santa Rita do Sapucaí",
      bairro: "",
      logradouro: "",
      complemento: "",
    };
    const { getByText, getAllByText } = render(<Table response={response} />);
    expect(getByText("MG")).toBeDefined();
    expect(getByText("Santa Rita do Sapucaí")).toBeDefined();
    expect(getAllByText("-")[0]).toBeDefined();
    expect(getAllByText("-")[1]).toBeDefined();
    expect(getAllByText("-")[2]).toBeDefined();
  });
});
