import { FC, useState } from "react";
import { cn } from "@/utils/cn";

interface MainContentProps {
  title: string;
}

const classes = {
  main: "animate__animated min-w-[400px] w-8/12 bg-white rounded-md shadow-md p-2 fixed z-10 right-10 top-10 border border-gray-200",
};

const MainContent: FC<MainContentProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main
      className={cn(
        classes.main,
        isOpen ? "animate__bounceInDown" : "animate__bounceOutUp"
      )}
    >
      <h1>{title}</h1>
      <section className="content-section">
        <p>This is the main content area of your portfolio.</p>
      </section>
    </main>
  );
};

export default MainContent;
