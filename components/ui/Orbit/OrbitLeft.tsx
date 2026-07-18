import Image, { type ImageProps } from "next/image";

type OrbitLeftProps = {
  icon: ImageProps["src"];
  alt?: string;
};

export default function OrbitLeft({ icon, alt = "" }: OrbitLeftProps) {
  return (
    <div className="bg-background absolute top-1/2 left-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.7)]">
      <Image
        src={icon}
        alt={alt}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    </div>
  );
}
