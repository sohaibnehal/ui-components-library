// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ConfirmationDialog from "./ConfirmationDialog";
import { ConfirmationDialogProps } from "./ConfirmationDialog.types";

describe("Test Component", () => {
  let props: ConfirmationDialogProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ConfirmationDialog {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ConfirmationDialog");

    expect(component).toHaveTextContent("harvey was here");
  });
});
