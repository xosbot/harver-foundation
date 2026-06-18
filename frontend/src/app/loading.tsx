export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030303]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#0080FF] flex items-center justify-center animate-pulse">
          <span className="font-display font-bold text-lg text-white">H</span>
        </div>
        <p className="text-sm text-[#888]">Loading...</p>
      </div>
    </div>
  );
}
