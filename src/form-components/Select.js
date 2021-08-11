const useSelectOptions = (field) => {
  const normalizedOptions = field.options.map((option) => {
    if (typeof option === "string") {
      return {
        value: option,
        label: option,
      };
    }
    if (typeof option.value === "string" || typeof option.label === "string") {
      return {
        value: option.value ?? option.label,
        label: option.label ?? option.value,
      };
    }
    throw new Error(
      `Invalid option for select with key "${field.key}"  (${JSON.stringify(
        option
      )})`
    );
  });
  return {
    options: normalizedOptions,
  };
};

export const Select = (props) => {
  const { field, onChange, value } = props;

  const { options } = useSelectOptions(field);

  const optionsElements = options.map((option) => {
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
