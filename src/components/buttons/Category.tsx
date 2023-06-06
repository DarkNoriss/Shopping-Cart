type CategoryTypes = {
  name: string;
  link: string;
};
export const Category: React.FC<CategoryTypes> = ({ name, link }) => {
  return (
    <a className="w-24 text-center" href={link}>
      {name}
    </a>
  );
};
