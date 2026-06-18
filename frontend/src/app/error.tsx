"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030303] px-6">
      <div className="text-center max-w-md">
        <h2 className="font-display text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-[#888] mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="btn-premium px-8 py-3 text-sm"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
