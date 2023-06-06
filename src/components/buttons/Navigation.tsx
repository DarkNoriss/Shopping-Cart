type NavigationTypes = {
  name: string;
  link: string;
};

export const Navigation: React.FC<NavigationTypes> = ({ name, link }) => {
  return (
    <a className="w-20 text-center" href={link}>
      {name}
    </a>
  );
};
