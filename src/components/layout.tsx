import React, { ReactNode, FC } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-[100vh] w-[100vw] p-8 flex items-start justify-center gap-4">
      {children}
    </div>
  );
};
