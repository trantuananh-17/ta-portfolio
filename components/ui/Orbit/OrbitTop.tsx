import Image, { type ImageProps } from "next/image";

type OrbitTopProps = {
  icon: ImageProps["src"];
  alt?: string;
};

export default function OrbitTop({ icon, alt = "" }: OrbitTopProps) {
  return (
    <div className="bg-background absolute top-0 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.7)]">
      <Image
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
      />
    </div>
  );
}
