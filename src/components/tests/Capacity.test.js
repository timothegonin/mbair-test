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
  test('sould render ssd capacities', async () => {
    render(<Capacity capacityType='ssd'/>);
    const ssdParagraph = screen.getByText(/sélectionnez la capacité de la stockage/i);
    const defaultSsdCapacity = await screen.findByRole('radio', {name:"SSD de 256 Go"})
    const ssdRadioExtensions = await screen.findAllByRole('radio',{name: /.*\u20AC\)/})
    const allSsdPrices = ssdRadioExtensions.map((input) => input.value)
    expect(ssdParagraph).toBeInTheDocument()
    expect(defaultSsdCapacity).toBeInTheDocument()
    expect(defaultSsdCapacity).toBeChecked()
    expect(ssdRadioExtensions).toHaveLength(3)
    expect(allSsdPrices).toEqual(['230', '460', '920'])
  });
})
