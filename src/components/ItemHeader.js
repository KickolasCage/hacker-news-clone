import useSWR from "swr";
import { fetchItem } from "@/utils/fetch";
import Link from "next/link";
import ItemMeta from "@/components/ItemMeta";
import Time from "@/components/Time";
import Error from "./Error";
import Loading from "./Loading";

export default function Item({ itemId, url, page }) {
  const { data: item, error } = useSWR(`${itemId}`, fetchItem);
  return (
    <>
      {error ? (
        <Error/>
      ) : !item ? (
        <Loading/>
      ) : (
        <li key={item.id} className="flex justify-start flex-col ml-4">
          <div>
            {item.url && url ? (
              <a href={item.url} rel="nofollow" className="font-bold">
                {item.title}
              </a>
            ) : (
              <Link
                href={`/item/${item.id}`}
                className="font-bold"
                prefetch={false}
              >
                {item.title}
              </Link>
            )}            
          </div>
          {/* {item.url && <Time itemUrl={item.url} />} */}
          <ItemMeta item={item} page={page} />
        </li>
      )}
    </>
  );
}
