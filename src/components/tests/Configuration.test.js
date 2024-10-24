import { rest } from "msw"
import { server } from "../../mocks/server"
import { render, screen, waitFor } from "../../test-utils"
import userEvent from "@testing-library/user-event"
import Configuration from "../Configuration"
import MacBookProviders from "../../providers/MacBookProviders"

test('RAM and SSD errors', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/ram', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
    rest.get('http://localhost:3030/ssd', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<Configuration/>, {wrapper: MacBookProviders})
  // const alerts = await screen.findAllByRole('alert')
  // expect(alerts).toHaveLength(2)
  
  // const alerts = await screen.findAllByText('Nous avons une erreur')
  // expect(alerts).toHaveLength(2)

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert')
    expect(alerts).toHaveLength(2)
  })
})
test('Updating price and displaying product information based on selected capacities', async () => {
  const user = userEvent.setup()  
  render(<Configuration/>)
  const productPrice = screen.getByRole("heading", {level:4, name: "1199,00 €"})
  const ramCapacity = screen.getByText('8 Go de mémoire unifiée')
  const ssdCapacity = screen.getByText('SSD de 256 Go')

  await waitFor(async () => {
    const allRamOptions = await screen.findAllByRole("option")
    expect(allRamOptions).toHaveLength(2)
  })

  const selectElement = screen.getByRole('combobox', {name: /default select/i})
  await user.selectOptions(selectElement, "230")
  expect(selectElement.value).toBe('230')
  expect(screen.getByRole("option", {name: /16 Go de mémoire unifiée/i, exact: false}).selected).toBe(true)
})