export function AccountsSkeleton() {
  return (
    <>
      <div>
        <div className="h-4 w-24 animate-pulse rounded-md bg-teal-800" />
        <div className="mt-2 h-6 w-28 animate-pulse rounded-md bg-teal-800" />
      </div>

      <div className="flex flex-1 flex-col justify-end gap-4">
        <div className="flex items-center justify-between">
          <div className="h-6 w-28 animate-pulse rounded-md bg-teal-800" />

          <div className="h-10 w-20 animate-pulse rounded-md bg-teal-800" />
        </div>

        <div className="mt-10 flex gap-4 lg:mt-0">
          <div className="h-52 w-1/2 animate-pulse rounded-2xl bg-teal-800" />
          <div className="h-52 w-1/2 animate-pulse rounded-2xl bg-teal-800" />
        </div>
      </div>
    </>
  );
}
