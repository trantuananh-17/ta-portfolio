import Image, { type ImageProps } from "next/image";

type OrbitBotLeftProps = {
  icon: ImageProps["src"];
  alt?: string;
};

export default function OrbitBotLeft({ icon, alt = "" }: OrbitBotLeftProps) {
  return (
    <div className="bg-background absolute bottom-0 left-1/4 flex h-12 w-12 -translate-x-1/4 translate-y-1/4 items-center justify-center rounded-full border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.7)]">
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
