type ButtonCatTypes = {
  name: string;
};
export const ButtonCat: React.FC<ButtonCatTypes> = ({ name }) => {
  return <button className="w-24">{name}</button>;
};
