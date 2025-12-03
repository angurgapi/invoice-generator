import { useQuery } from "@tanstack/react-query";
import { checkHealth } from "@/lib/api";

export const useHealthCheck = () => {
    return useQuery({
        queryKey: ["health"],
        queryFn: checkHealth,
        refetchInterval: 30000, // Refetch every 30 seconds
        retry: 3,
    });
};
