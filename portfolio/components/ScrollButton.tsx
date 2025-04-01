import Link from 'next/link';

interface ScrollButtonProps {
  text: string;
  scrollTo: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ text, scrollTo }) => {
  return (
    <Link href={scrollTo} scroll={true}>
      <div className="h-20 w-40 flex justify-center items-center border-6 rounded-3xl hover:opacity-40">
        <h1 className="text-black text-lg">{text}</h1>
      </div>
    </Link>
  );
};

export default ScrollButton;
