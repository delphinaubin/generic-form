import React from "react";
import { getFieldComponent } from "./formTypeToComponent";

export const FormComponent = (props) => {
  const { field, value, onChange } = props;

  const { component } = getFieldComponent(field.type);
  return React.createElement(component, {
    field,
    onChange,
    value: value,
  });
};
