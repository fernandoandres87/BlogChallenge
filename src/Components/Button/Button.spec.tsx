import "@testing-library/jest-dom";
import { FC, createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";

const componentProps = {
  onClick: jest.fn(),
};
const TestComponent: FC<ButtonProps> = ({ ...props }) => (
  <Button {...props}>Testing button</Button>
);

describe("<Button />", () => {
  it("renders component and fire click event", () => {
    render(<TestComponent {...componentProps} />);
    const button = screen.getByRole("button", {
      name: /testing button/i,
    });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(componentProps.onClick).toHaveBeenCalled();
  });
  it("Should be disabled the button", () => {
    render(<TestComponent {...componentProps} disabled />);
    const button = screen.getByRole("button", {
      name: /testing button/i,
    });
    expect(button).toHaveAttribute("disabled");
    expect(button).toBeDisabled();
  });
});
