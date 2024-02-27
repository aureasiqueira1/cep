import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Main from "./Main";
import { api } from "../service/api";

jest.mock("../service/api");

describe("Main component", () => {
  const mockResponse = {
    bairro: "Jardim Paulista",
    cep: "01452-000",
    complemento: "lado ímpar",
    localidade: "São Paulo",
    logradouro: "Avenida Paulista",
    uf: "SP",
  };

  beforeEach(() => {
    (api.get as jest.Mock).mockResolvedValue({ data: mockResponse });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the InputSearch and ButtonSearch components correctly", () => {
    const { getByPlaceholderText, getByText } = render(<Main />);
    expect(getByPlaceholderText("Digite o CEP...")).toBeDefined();
    expect(getByText("RESULTADO")).toBeDefined();
  });

  it("should call getCep function when button is clicked and render the response correctly", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(<Main />);
    fireEvent.change(getByPlaceholderText("Digite o CEP..."), {
      target: { value: "01452-000" },
    });
    fireEvent.click(getByText("RESULTADO"));
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith("/01452-000/json");
      expect(findByText("SP")).toBeDefined();
      expect(findByText("São Paulo")).toBeDefined();
      expect(findByText("Jardim Paulista")).toBeDefined();
      expect(findByText("Avenida Paulista")).toBeDefined();
      expect(findByText("lado ímpar")).toBeDefined();
    });
  });
});
