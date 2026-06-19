import Image from "next/image";

export default function BulldogCrest({ size = 48 }: { size?: number }) {
  return (
    <div
      className="rounded-full overflow-hidden flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="Bali Bulldogs FC"
        width={size}
        height={size}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
}
