import { TextFormComponent } from "./Text";
import { NumberFormComponent } from "./Number";
import { FieldSetFormComponent } from "./FieldSet";
import { RepeatableFieldSetComponent } from "./repeatable-field-set/RepeatableFieldSet";
import { SelectFormComponent } from "./Select";

let formTypeToComponent;

const initMap = () => {
  if (formTypeToComponent) {
    return;
  }
  formTypeToComponent = new Map([
    ["text", TextFormComponent],
    ["number", NumberFormComponent],
    ["select", SelectFormComponent],
    ["fieldSet", FieldSetFormComponent],
    ["repeatableFieldSet", RepeatableFieldSetComponent],
  ]);
};

export const getFieldComponent = (fieldType) => {
  initMap();
  if (!formTypeToComponent.has(fieldType)) {
    throw new Error(`Unknown field type ${fieldType}`);
  }
  return formTypeToComponent.get(fieldType);
};
