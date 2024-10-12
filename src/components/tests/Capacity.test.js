import { render, screen } from '@testing-library/react';
import Capacity from "../Capacity"

describe('Checking ram and ssd capacities', () => {
  test('sould render ram capacities', async () => {
    render(<Capacity capacityType='ram'/>);
    const ramParagraph = screen.getByText(/sélectionnez la capacité de la mémoire/i);
    const selectElement = screen.getByRole('combobox', {name:/default select/i})
    const allRamOptions = await screen.findAllByRole('option')
    expect(ramParagraph).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(allRamOptions).toHaveLength(2)
    expect(screen.getByRole("option", {name: "8 Go de mémoire unifiée"}).selected).toBe(true)
  });
})
