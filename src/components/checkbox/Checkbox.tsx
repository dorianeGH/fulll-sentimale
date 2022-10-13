interface CheckboxProps {
  id: string;
  type: string;
  name: string;
  handleClick: any;
  isChecked: any;
}
const Checkbox = ({
  id,
  type,
  name,
  handleClick,
  isChecked,
}: CheckboxProps) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox;
