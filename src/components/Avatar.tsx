import Image from "next/image";

const INITIAL_COLORS: Record<string, string> = {
  A: "#E8A838",
  B: "#3B6B3B",
  C: "#D94040",
  D: "#8B5E3C",
  E: "#B8A070",
  F: "#5C4033",
  G: "#6B7B3A",
  H: "#3A6B6B",
  I: "#5DADE2",
  J: "#7D3C98",
  K: "#6B6B3A",
  L: "#5C4033",
  M: "#C0392B",
  N: "#27AE60",
  O: "#2C3E50",
  P: "#8E44AD",
  Q: "#7F8C8D",
  R: "#6B4226",
  S: "#D4AC0D",
  T: "#E74C8F",
  U: "#1ABC9C",
  V: "#E67E22",
  W: "#2ECC71",
  X: "#95A5A6",
  Y: "#F1C40F",
  Z: "#E59866",
};

function getColorForInitial(letter: string): string {
  return INITIAL_COLORS[letter.toUpperCase()] || "#7F8C8D";
}

interface AvatarProps {
  username: string;
  avatarUrl?: string;
  size?: number;
  className?: string;
}

export default function Avatar({
  username,
  avatarUrl,
  size = 48,
  className = "",
}: AvatarProps) {
  const initial = username.charAt(0).toUpperCase();
  const bgColor = getColorForInitial(initial);

  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={username}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-bold ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        fontSize: size * 0.42,
      }}
    >
      {initial}
    </div>
  );
}
