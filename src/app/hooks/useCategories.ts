import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "../services/categoriesService";

export function useCategories() {
  const { isFetching, data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return categoriesService.getAll();
    },
    staleTime: Infinity,
  });

  return {
    categories: data ?? [],
    isFetching,
  };
}
