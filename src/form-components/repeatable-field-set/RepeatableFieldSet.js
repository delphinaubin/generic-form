import { FieldSet, FieldSetFormComponent } from "../FieldSet";
import { moveDown, moveUp } from "./MoveItems";

export const RepeatableFieldSet = (props) => {
  const { value, onChange, field } = props;

  const fieldSetField = {
    fields: field.fields,
    name: "",
  };

  const addItem = () => {
    onChange([...value, FieldSetFormComponent.defaultValue(fieldSetField)]);
  };

  const onItemChange = (itemIndex) => (newItemValue) => {
    onChange(
      value.map((currentItem, currentItemIndex) => {
        if (currentItemIndex === itemIndex) {
          return newItemValue;
        }
        return currentItem;
      })
    );
  };

  const removeItem = (itemToRemoveIndex) => () => {
    onChange(value.filter((_, index) => index !== itemToRemoveIndex));
  };

  const moveItemUp = (itemToMoveIndex) => () => {
    onChange(moveUp(value, itemToMoveIndex));
  };

  const moveItemDown = (itemToMoveIndex) => () => {
    onChange(moveDown(value, itemToMoveIndex));
  };
  const mainDivStyle = {
    padding: "1rem",
    margin: "1rem",
    border: "dashed 1px grey",
  };

  const itemElements = value.map((itemValue, index) => {
    const isFirstElement = index === 0;
    const isLastElement = index >= value.length - 1;
    return (
      <div key={index} style={mainDivStyle}>
        <FieldSet
          onChange={onItemChange(index)}
          value={itemValue}
          field={fieldSetField}
          shouldBeUnWrapped={true}
        />
        <button onClick={removeItem(index)}>Remove Item</button>
        {!isFirstElement ? (
          <button onClick={moveItemUp(index)}>Move up</button>
        ) : null}
        {!isLastElement ? (
          <button onClick={moveItemDown(index)}>Move down</button>
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <h1>{field.name}</h1>
      {itemElements}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export const RepeatableFieldSetComponent = {
  component: RepeatableFieldSet,
  defaultValue: () => [],
};
