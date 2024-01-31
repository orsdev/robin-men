export const Spinner = ({ label = 'Loading...' }: { label: string }) => {
  return (
    <div className="w-full flex  flex-col items-center justify-center relative">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-others-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <span className="text-sm">{label}</span>
    </div>
  );
};
