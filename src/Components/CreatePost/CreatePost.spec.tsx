import "@testing-library/jest-dom";
import { FC } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CreatePost, CreatePostProps } from "./CreatePost";

const componentProps = {
  handleCreatePost: jest.fn(),
};
const TestComponent: FC<CreatePostProps> = ({ ...props }) => (
  <CreatePost {...props} />
);

describe("<CreatePost />", () => {
  it("renders component", () => {
    const { container } = render(<TestComponent {...componentProps} />);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent(/create post/i);
    expect(container).toHaveTextContent(/title/i);
    expect(container).toHaveTextContent(/description/i);
    expect(
      screen.getByRole("button", {
        name: /create/i,
      })
    ).toBeInTheDocument();
  });
  it("renders component", () => {
    const { container } = render(<TestComponent {...componentProps} />);
    const titleInput = container.querySelector("#title") as Element;
    const descriptionInput = container.querySelector("#description") as Element;
    fireEvent.change(titleInput, { e: { target: { value: "title test" } } });
    fireEvent.change(descriptionInput, {
      e: { target: { value: "description test" } },
    });
    screen.logTestingPlaygroundURL();
  });
});
