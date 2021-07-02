export const Text = (props) => {
  const { field, onChange, value } = props;
  const onInputValueChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={field.placeholder}
      onChange={onInputValueChange}
      value={value}
    />
  );
};

export const TextFormComponent = {
  component: Text,
  defaultValue: () => "",
};
