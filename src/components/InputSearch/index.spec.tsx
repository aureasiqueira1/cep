import { render, fireEvent } from "@testing-library/react";
import { InputSearch } from ".";

describe("InputSearch component", () => {
  const handleSearchMock = jest.fn();

  beforeEach(() => {
    handleSearchMock.mockClear();
  });

  it("should render the input field correctly", () => {
    const { getByPlaceholderText } = render(
      <InputSearch handleSearch={handleSearchMock} />
    );
    expect(getByPlaceholderText("Digite o CEP...")).toBeDefined();
  });

  it("should call handleSearch function when input value changes", () => {
    const { getByPlaceholderText } = render(
      <InputSearch handleSearch={handleSearchMock} />
    );
    fireEvent.change(getByPlaceholderText("Digite o CEP..."), {
      target: { value: "1" },
    });
    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });

  it("should call handleSearch function 2 times when input value changes 2 times", () => {
    const { getByPlaceholderText } = render(
      <InputSearch handleSearch={handleSearchMock} />
    );
    fireEvent.change(getByPlaceholderText("Digite o CEP..."), {
      target: { value: "1" },
    });
    fireEvent.change(getByPlaceholderText("Digite o CEP..."), {
      target: { value: "2" },
    });
    expect(handleSearchMock).toHaveBeenCalledTimes(2);
  });
});
