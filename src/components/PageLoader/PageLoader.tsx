import React from "react";
import { SpinnerLoading } from "../SpinnerLoading/SpinnerLoading";

interface PageLoaderProps {
  children?: React.ReactNode;
  condition: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  children,
  condition
}) => {
  if (condition) {
    return (
      <div className="bg-slate-100 flex justify-center w-screen h-auto min-h-screen">
        {children}
      </div>
    );
  } else {
    return (
      <div className="bg-slate-100 flex justify-center w-screen h-auto min-h-screen">
        <div className="w-auto h-auto flex justify-center items-center">
          <SpinnerLoading theme="dark" size="LARGE"/>
        </div>
      </div>
    );
  }
};
