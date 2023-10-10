
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

  it('renders the primary button with icon', async () => {
    let buttonIconDesignTest = {
      component: "Button",
      story: "Icon",
      design: "designs/primary-button-icon.png",
    }

    await expect(buttonIconDesignTest).toMatchDesign();
  })
})

