import { TabsProps } from "../interfaces";

export function Tabs({ className, children }: TabsProps) {
  return <div className={className}>{children}</div>;
}
