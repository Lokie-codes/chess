// font-[family-name:var(--font-geist-mono)]
// font-[family-name:var(--font-geist-sans)]

import Chessboard from "@/components/Chessboard";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Chess</h1>
      <Chessboard />
    </div>
  );
}
