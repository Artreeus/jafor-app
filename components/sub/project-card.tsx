import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform transform hover:scale-105"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-auto object-contain"
      />

      <div className="relative p-4 bg-[#1A1A2E] bg-opacity-90">
        <h1 className="text-xl sm:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm sm:text-base">{description}</p>
      </div>
    </Link>
  );
};
