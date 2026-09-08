import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "default";
}

/** Chiều rộng dùng chung cho phần nội dung bên trong mỗi <section>. */
const sectionContainer =
  "container mx-auto sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl";

const sizeClasses = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[96rem]",
  full: "max-w-full",
  default: "max-w-[var(--container-max-width)]",
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "default",
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 py-4 flex flex-col items-center justify-center",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Container, sectionContainer };
