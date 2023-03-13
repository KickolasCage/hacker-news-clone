import React from "react";
import { useRouter } from "next/router";
import useSWR, { SWRConfig } from "swr";
import DOMPurify from "isomorphic-dompurify";

import { getUser } from "../../utils/fetch";

import Time from "../../components/Time";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function User() {
  const router = useRouter();
  const { nickname } = router.query;
  const { data: user, error } = useSWR(`${nickname}`, getUser);

  return (
    <>
      {error || user === null ? (
        <Error />
      ) : !user ? (
        <Loading />
      ) : (
        <div className="m-5">
          <div className="text-gray-500">
            user: <span className="font-bold text-black">{user.id}</span>
          </div>
          {user.created && (
            <div className="">
              <span className="text-gray-500">registered: </span>
              <span>
                <Time time={user.created} />
              </span>
            </div>
          )}
          {user.karma && (
            <div className="">
              <span className="text-gray-500">karma: </span>
              <span>{`${user.karma} points`}</span>
            </div>
          )}
          {user.submitted && (
            <div>
              <span className="text-gray-500">posted: </span>
              <span>{`${user.submitted.length} times`}</span>
            </div>
          )}
          {user.about && (
            <div>
              <span className="text-gray-500">about: </span>
              <br/>
              <span
                className="content about_text"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(user.about),
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export async function getStaticProps({ params: { nickname } }) {
  const data = await getUser(nickname);
  return {
    props: {
      fallback: {
        [nickname]: data,
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default function Page({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <User />
    </SWRConfig>
  );
}
