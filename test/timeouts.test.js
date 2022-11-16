import MoviesDAO from "../src/dao/moviesDAO"

describe("Timeouts", () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test("Timeout is set to 2500 milliseconds", async () => {
    const { wtimeout } = await MoviesDAO.getConfiguration()
    console.log({wtimeout})
    expect(wtimeout).toBe(2500)
  })
})
