import Image from "next/image";

export default function BulldogCrest({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Bali Bulldogs FC"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
