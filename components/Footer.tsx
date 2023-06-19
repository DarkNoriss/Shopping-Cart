import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='flex h-8 justify-center'>
      <a
        href='https://github.com/DarkNoriss'
        target='_blank'
        className='flex cursor-pointer flex-row items-center gap-1 hover:brightness-75'
      >
        <Image src='assets/icons/github.svg' alt='github_icon' height={24} width={24} />
        <h3>DarkNoriss</h3>
      </a>
    </footer>
  );
};
