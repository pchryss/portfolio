import Link from 'next/link';

interface NavbarButtonProps {
  text: string;
  scrollTo: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ text, scrollTo }) => {
  return (
    <Link href={scrollTo} scroll={true}>
      <div className="bg-black h-20 w-40 flex justify-center items-center">
        <h1 className="text-white text-lg">{text}</h1>
      </div>
    </Link>
  );
};

export default NavbarButton;
