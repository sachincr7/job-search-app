import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clicked",
        type: "primary",
      },
    });

    expect(wrapper.text().toMatch("Clicked"));
  });
});
