export const Select = (props) => {
  const { field, onChange, value } = props;

  const normalizedOptions = field.options.map((option) => {
    if (typeof option === "string") {
      return {
        value: option,
        label: option,
      };
    }
    return option;
  });

  const optionsElements = normalizedOptions.map((option) => {
    return (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    );
  });

  const onInputValueChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <select
      placeholder={field.placeholder}
      onChange={onInputValueChange}
      value={value}
    >
      <option value="" key="__not-chosen-option">
        {field.placeholder}
      </option>
      {optionsElements}
    </select>
  );
};

export const SelectFormComponent = {
  component: Select,
  defaultValue: () => "",
};
