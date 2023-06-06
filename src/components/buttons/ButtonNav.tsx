type ButtonNavTypes = {
  name: string;
};
export const ButtonNav: React.FC<ButtonNavTypes> = ({ name }) => {
  return <button className="w-20">{name}</button>;
};
