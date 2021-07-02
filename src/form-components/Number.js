export const Text = (props) => {
  const { field, onChange, value } = props;
  const onInputValueChange = (e) => {
    onChange(+e.target.value);
  };
  return (
    <input
      type="number"
      placeholder={field.placeholder}
      onChange={onInputValueChange}
      value={value}
    />
  );
};

export const NumberFormComponent = {
  component: Text,
  defaultValue: () => 0,
};
