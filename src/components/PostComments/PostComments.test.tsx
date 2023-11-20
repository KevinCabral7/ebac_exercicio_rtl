import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar 2 comentários", async () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: {
        value: "Lorem ipsum",
      },
    });
    fireEvent.click(screen.getByTestId("btn-adicionar"));

    await waitFor(() => {
      expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    });
    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: {
        value: "Dolor",
      },
    });
    fireEvent.click(screen.getByTestId("btn-adicionar"));

    await waitFor(() => {
      expect(screen.getByText("Dolor")).toBeInTheDocument();
    });
  });
});
