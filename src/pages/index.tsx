import { useQuery } from "@/hooks";

const Index = () => {
  const { data, loading, error } = useQuery();
  console.log(data, loading, error);
  return null;
};

export default Index;
