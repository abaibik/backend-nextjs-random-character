import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const birthday = new Date(data.birthday).toString();

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>birthday: {birthday}</p>
      <p>
        twitter: {data.twitter}, geohash: {data.geohash}
      </p>
    </>
  );
}
