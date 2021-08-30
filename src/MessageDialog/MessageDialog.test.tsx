// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MessageDialog from "./MessageDialog";
import { MessageDialogProps } from "./MessageDialog.types";

describe("Test Component", () => {
  let props: MessageDialogProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<MessageDialog {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("MessageDialog");

    expect(component).toHaveTextContent("harvey was here");
  });
});
