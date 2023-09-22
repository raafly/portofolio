import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16 px-4">
      <div className="self-center">
        <div className="relative rotate-3 aspect-square w-36 sm:w-40 md:w-48 rounded-lg overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow">
          <Image
            src="/me2.webp"
            alt="me making some bug"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="grow">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
          About me
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-1 lg:mt-2">
        Hello, my name is Rafly Nur Ramadhani. I live in Semarang, Indonesia. 
        I am someone who is interested in the world of computers and technology. 
        Interested in the field of backend and blockchain developer, 
        I gradually improve my skills until now and will continue to continue to 
        grow in the future and always explore new things.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-1 lg:mt-2">
          I love to learn new things, write some code, creating some bugs, and
          play video games.
        </p>
      </div>
    </div>
  );
};
