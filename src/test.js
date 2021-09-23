describe("month-bits", () => {
  beforeEach(async () => {
    await page.goto(PATH, { waitUntil: "load" });
  });
  test("should return right title", async () => {
    await expect(page.title()).resolves.toMatch(
      "#month-bits (free monthly habits tracker)"
    );
  });
  test("should render header", async () => {
    const header = await expect(page).toMatchElement("header");
    await expect(header).toMatch("#month-bits (Monthly Habits)");
  });
  test("should render footer", async () => {
    const footer = await expect(page).toMatchElement("footer");
    await expect(footer).toMatch(/novicelab/gi);
  });
});
