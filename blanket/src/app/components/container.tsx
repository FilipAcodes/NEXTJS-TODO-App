import type { ReactNode } from "react";
import "./container.css";

function Container({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default Container;
