import React from "react";
import { getFieldComponent } from "./formTypeToComponent";
import { FormComponent } from "./FormComponent";

export const FieldSet = (props) => {
  const { onChange, value, field, shouldBeUnWrapped } = props;


  const onFieldValueChange = (field) => (changedValue) => {
    onChange({
      ...value,
      [field.key]: changedValue,
    });
  };
  const formComponents = field.fields.map((currentField) => {
    const currentFieldValue = value[currentField.key];
    return (
      <div key={currentField.key}>
        <FormComponent
          onChange={onFieldValueChange(currentField)}
          value={currentFieldValue}
          field={currentField}
        />
      </div>
    );
  });

  const mainDivStyle = shouldBeUnWrapped
    ? {}
    : { margin: "1rem", padding: "1rem", border: 'dashed 1px' };
  return (
    <div style={mainDivStyle}>
      {!!field.name ? <h1>{field.name}</h1> : null}
      {formComponents}
    </div>
  );
};
export const FieldSetFormComponent = {
  component: FieldSet,
  defaultValue: ({ fields }) => {
    const defaultValue = fields.reduce((prev, currentField) => {
      return {
        ...prev,
        [currentField.key]: getFieldComponent(currentField.type).defaultValue(
          currentField
        ),
      };
    }, {});
    return defaultValue;
  },
};
