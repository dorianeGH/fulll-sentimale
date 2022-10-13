interface CheckboxProps {
  id: string;
  type: string;
  name: string;
  handleClick: (e: any) => void;
  isChecked: boolean;
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
