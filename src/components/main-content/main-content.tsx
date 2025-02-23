"use client";
import { FC } from "react";
import { useAppContext } from "@/app/provider";
import { cn } from "@/utils/cn";

interface MainContentProps {
  title: string;
  className?: string;
}

const classes = {
  main: "animate__animated min-w-[400px] w-6/12 bg-white rounded-md shadow-md p-2 border border-gray-200",
};

export const MainContent: FC<MainContentProps> = ({ title, className }) => {
  const { isShow } = useAppContext();

  return (
    <main
      className={cn(
        classes.main,
        isShow ? "animate__bounceInRight" : "animate__bounceOutRight",
        className
      )}
    >
      <h1>{title}</h1>
      <section>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
        <p>This is the main content area of your portfolio.</p>
      </section>
    </main>
  );
};
