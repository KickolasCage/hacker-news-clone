import Link from "next/link";
import Time from "./Time";

export default function Meta({ item, page }) {
  return (
    <div>
      <div className="flex justify-start align-middle">
        {item.score && item.score > 1 && (
          <>
            <span className="text-gray-500">{`${item.score} points`}</span>
            <span>&nbsp;</span>
          </>
        )}
        {item.by && (
          <span className="font-bold">
            <Link href={`/user/${item.by}`} prefetch={false}>
              {"by "}
              {item.by}
              <span>&nbsp;</span>
            </Link>
          </span>
        )}
        {item.time && (
          <span className="">
            {"posted "}
            <Time time={item.time} />
            <span>&nbsp;</span>
          </span>
        )}
        {item.descendants > 0 && page !== "item" && (
          <div className="underline">
            <Link href={`/item/${item.id}`} prefetch={false}>
              {item.descendants}
              {item.descendants > 1 ? " comments" : " comment"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
