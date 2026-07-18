import Image, { type ImageProps } from "next/image";

type OrbitRightProps = {
  icon: ImageProps["src"];
  alt?: string;
};

export default function OrbitRight({ icon, alt = "" }: OrbitRightProps) {
  return (
    <div className="bg-background absolute top-1/2 right-0 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.7)]">
      <Image
        src={icon}
        alt={alt}
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
      />
    </div>
  );
}
