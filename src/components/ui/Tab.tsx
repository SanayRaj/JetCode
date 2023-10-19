import React, { Children } from "react";
const TOOLBAR_HEIGHT = 80;

export function TabContainer({ children }: { children: any }) {
  return (
    <div
      className="flex w-full border-t border-t-[var(--border)] overflow-x-scroll bg-[var(--backgroundDark)]"
      style={{ height: TOOLBAR_HEIGHT / 2 }}
    >
      {children}
    </div>
  );
}

interface ITabProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  icon?: any;
  onClose: () => void;
  active?: boolean;
}

export function Tab({ title, icon, onClose, active, ...props }: ITabProps) {
  return (
    <div
      className={`flex items-center justify-center border-r  border-r-[var(--border)] px-2 relative text-[var(--textDim)] ${
        active && "bg-[var(--background)] tab-active text-white"
      }`}
      {...props}
    >
      {/* {icon && icon} */}
      {title}
      <i
        onClick={onClose}
        className={`ml-1 p-1 transition-colors hover:bg-[var(--textDim)] rounded codicon codicon-close`}
      ></i>
    </div>
  );
}
