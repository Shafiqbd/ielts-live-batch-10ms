"use client";
import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="sweet-loading">
      <BeatLoader
        color="#36d7b7"
        loading={true}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
