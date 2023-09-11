import "@testing-library/jest-dom";
import { FC } from "react";
import {
  AuthenticationModal,
  AuthenticationModalProps,
} from "./AuthenticationModal";
import { fireEvent, render, screen } from "@testing-library/react";

const componentProps = {
  label: "Testing Label",
  handleCloseModal: jest.fn(),
};
const TestComponent: FC<AuthenticationModalProps> = ({ ...props }) => (
  <AuthenticationModal {...props}>
    <div>Test</div>
  </AuthenticationModal>
);

describe("< AuthenticationModal />", () => {
  it("renders component", () => {
    const { container } = render(<TestComponent {...componentProps} />);
    expect(container).toBeInTheDocument();
    expect(screen.getByText(componentProps.label)).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("should fire a close modal", () => {
    const { container } = render(<TestComponent {...componentProps} />);
    const closeIcon = container.querySelector("#CrossIcon > path") as Element;
    fireEvent.click(closeIcon);
    expect(componentProps.handleCloseModal).toBeCalled();
  });
});
