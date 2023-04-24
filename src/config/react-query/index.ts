import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const reactQueryCacheTime = (time = 5) => time * 60 * 1000;