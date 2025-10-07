"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught by error boundary:", error);
  }, [error]);

  return (
    <div className="p-4 bg-red-100 text-red-700 rounded flex justify-center items-center w-full ">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
