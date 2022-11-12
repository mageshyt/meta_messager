export const fetcher = async () => {
  const res = await fetch("/api/getmessage");
  const data = await res.json();

  return data;
};
