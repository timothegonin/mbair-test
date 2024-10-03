import { render, screen } from '@testing-library/react';
import ProductInfos from '../ProductInfos';

describe('Product infos', () => {
  test('sould render the image, title, price and specs', () => {
    render(<ProductInfos />);
    //PRESENTATION
    const productImage = screen.getByRole('img', {name: /macbookair/i});
    const productTitle = screen.getByRole('heading', {name:/macbook air - gris sidéral/i, level:5});
    const productPrice = screen.getByRole('heading', {name:"1199,00 €", level:4});
    expect(productImage).toBeInTheDocument()
    expect(productTitle).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
    expect(productPrice).toHaveClass('green')
    expect(productPrice).toHaveTextContent('1199,00 €')
    //CONFIGURATION
    const helperTitle = screen.getByRole('heading', {level: 3, name:/personnalisez votre macbook air - gris sidéral/i}) 
    const specsList = screen.getByRole("list")
    const specsListItems = screen.getAllByRole('listitem')
    expect(helperTitle).toBeInTheDocument()
    expect(specsList).toBeInTheDocument()
    expect(specsListItems.length).toBe(7)
    const featuresListText = specsListItems.map((item) => item.textContent)
    expect(featuresListText).toEqual(["Puce Apple M1 avec CPU 8 coeurs, Neutral Engine 16 coeurs",
      "8 Go de mémoire unifiée",
      "SSD de 256 Go",
      "Ecran Retina 15 pouces avec True Tone",
      "Deux ports Thunderbolt/USB 4",
      "Adaptateur USB-C 30 W",
      "Magic Keuboard rétroéclairé avec Touch ID - Français"]) 
  });
})
