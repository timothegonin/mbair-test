import { rest } from "msw"
import { server } from "../../mocks/server"
import { render, screen, waitFor } from "@testing-library/react"
import Configuration from "../Configuration"

test('RAM and SSD errors', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/ram', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
    rest.get('http://localhost:3030/ssd', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<Configuration/>)
  // const alerts = await screen.findAllByRole('alert')
  // expect(alerts).toHaveLength(2)
  
  // const alerts = await screen.findAllByText('Nous avons une erreur')
  // expect(alerts).toHaveLength(2)

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert')
    expect(alerts).toHaveLength(2)
  })

})