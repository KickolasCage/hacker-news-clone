import { fetchList } from "@/utils/fetch";
import useSWR from "swr";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import PostList from "@/components/ItemsList";

export function PageTemplate({stories}) {
  const { data: list, error } = useSWR(stories, fetchList);

  return (
    <>
      {error ? (
        <Error />
      ) : !list ? (
        <Loading />
      ) : (
        <PostList items={list.slice(0, 30)} url={false} />        
      )}
    </>
  );
}

export const getStaticPropsTemplate = (stories) => async () =>  {
  const list = await fetchList(stories);
  return {
    props: {
      fallback: {
        [stories]: list,
      },
    },
    revalidate: 60,
  };
}
