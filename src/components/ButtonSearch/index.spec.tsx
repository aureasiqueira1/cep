import React from "react";

import { render, fireEvent } from "@testing-library/react";
import { ButtonSearch } from ".";

describe("Tests ButtonSearch", () => {
  const getCepMock = jest.fn();

  it("should render the button correctly", () => {
    const { getByText } = render(<ButtonSearch getCep={getCepMock} />);
    expect(getByText("RESULTADO")).toBeDefined();
  });

  it("should call getCep function when button is clicked", () => {
    const { getByText } = render(<ButtonSearch getCep={getCepMock} />);
    fireEvent.click(getByText("RESULTADO"));
    expect(getCepMock).toHaveBeenCalledTimes(1);
  });
});
