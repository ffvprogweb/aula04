import { render, fireEvent, screen } from "@testing-library/react";
import ControladorTemperatura from "./componentes/ControladorTemperatura";
test("CT01- verifica o estado do contador na inicializacao", () => {
  //dado que o contador foi inicializado
  render(<ControladorTemperatura />);
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toBe(0);
});
