import { useRouter } from "next/dist/client/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log(newsId);

  return <h1>Detail Page</h1>;
};

export default DetailPage;
