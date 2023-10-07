
/**
 * @jest-environment node
 */

describe('Button', () => {
  it('renders the primary button', async () => {
    let buttonDesignTest = {
      component: "Button",
      story: "Primary",
      design: "designs/primary-button.png",
    }

    await expect(buttonDesignTest).toMatchDesign();
  })
})

