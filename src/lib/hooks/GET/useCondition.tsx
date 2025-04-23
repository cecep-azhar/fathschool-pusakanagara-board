import axios from "axios";
import { useQuery } from "react-query";

function useGetCondition() {
  const { data, isLoading, error } = useQuery(
    "getCondition",
    async () => {
      try {
        const response = await axios.get("https://your-api-url.com/dummy/condition");
        return response.data;
      } catch (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _err
      ) {
        throw new Error("Gagal mengambil data kondisi!");
      }
    },
    {
      retry: 2,
      staleTime: 1000 * 60 * 5,
    }
  );

  return {
    Condition: data?.data || [],
    ConditionLoad: isLoading,
    ConditionError: error,
  };
}

export { useGetCondition };
