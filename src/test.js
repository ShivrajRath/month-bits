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
  test("should render 31 days", async () => {
    const mainGridHeader = await expect(page).toMatchElement(
      "#container > div:nth-child(32)"
    );
    await expect(mainGridHeader).toMatch(/31/gi);
  });
  test("should add a habit", async () => {
    await expect(page).toFill("#add-a-task-input", "task1");
    await expect(page).toClick("#add-a-task");
    const element = await expect(page).toMatchElement("#container > div.task");
    await expect(element).toMatch(/task1/gi);
  });
  test("should delete the habit", async () => {
    await expect(page).toClick(".delete-task");
    await expect(page).not.toMatchElement("#container > div.task");
  });
  test("should completely reset", async () => {
    await expect(page).toFill("#add-a-task-input", "task1");
    await expect(page).toClick("#add-a-task");
    await expect(page).toFill("#add-a-task-input", "task2");
    await expect(page).toClick("#add-a-task");
    await expect(page).toClick("#reset");
    await page.goto(PATH, { waitUntil: "load" });
    await expect(page).not.toMatchElement("#container > div.task");
  });
});
