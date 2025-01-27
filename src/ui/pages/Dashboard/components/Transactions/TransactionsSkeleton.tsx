interface TransactionsSkeletonProps {
  condensed?: boolean;
}

export function TransactionsSkeleton({
  condensed = false,
}: TransactionsSkeletonProps) {
  if (condensed) {
    return (
      <div className="flex flex-1 flex-col gap-2">
        {Array.from("12345").map((value) => (
          <div
            key={value}
            className="h-20 w-full animate-pulse rounded-md bg-gray-300"
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="h-8 w-32 animate-pulse rounded-md bg-gray-300" />
        <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300" />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="h-12 w-full animate-pulse rounded-md bg-gray-300" />

        <div className="flex flex-1 flex-col gap-2">
          {Array.from("12345").map((value) => (
            <div
              key={value}
              className="h-20 w-full animate-pulse rounded-md bg-gray-300"
            />
          ))}
        </div>
      </div>
    </>
  );
}
