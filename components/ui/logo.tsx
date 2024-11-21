import Image from 'next/image';

export function Logo() {
  return (
    <div className="relative w-20 h-20 mb-4">
      <Image
        src="./bishnu.jpg"
        alt="Profile"
        width={80}
        height={80}
        className="rounded-full border-4 border-[#952A52] shadow-lg"
      />
    </div>
  );
}