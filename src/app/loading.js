"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-t-4 border-b-4 border-cyan-400 animate-spin shadow-[0_0_40px_#22d3ee]"></div>
        <span className="absolute text-cyan-400 font-semibold text-lg animate-pulse drop-shadow-[0_0_10px_#22d3ee]">
          Loading...
        </span>
      </div>
    </div>
  );
}
