import React from "react";

type ThingProps = {
  children: React.ReactNode;
};
export const Thing = ({ children }: ThingProps) => {
  return <div className="mt-10 bg-blue-100 p-5 rounded-md">{children}</div>;
};
