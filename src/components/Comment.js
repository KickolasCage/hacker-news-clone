import React, { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
// import DOMPurify from 'dompurify-isomor';
import DOMPurify from 'isomorphic-dompurify';

import { fetchItem } from '../utils/fetch';

import Time from './Time';
import Error from './Error';
import Loading from './Loading';



export default function Comment({ item }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const { data: comment, error } = useSWR(`${item}`, fetchItem
  );
    
  return (
    <>
      {error ? (
        <Error/>
      ) : !comment ? (
        <Loading/>
      ) : !comment.deleted && !comment.dead ? (
        <div className="border-gray-500 border-[1px] p-5 m-5" key={comment.id}>
          <div>
            <div>
              <span className="font-bold">
                <Link href={`/user/${comment.by}`} prefetch={false}>
                  {comment.by}
                </Link>
              </span>
              <span> said </span>
              {comment.time && (
                <span className="text-gray-500">
                  <Time time={comment.time} />
                </span>
              )}
              |
            <span className='text-gray mx-1 text-1xl font-bold cursor-pointer px-2' type="button" onClick={toggleCollapse}>
              {collapsed ? `+` : `-`}
            </span>
            </div>
          </div>
          {!collapsed && (
            <div>
              {comment.text && (
                <div                                    
                  dangerouslySetInnerHTML={{
                    __html:
                    //  DOMPurify.sanitize(
                    //   comment.text
                    // )
                    comment.text
                  }}                
                />
              )}
              {comment.kids &&
                comment.kids.map((kid) => (
                  <Comment item={kid} key={kid} />
                ))}
            </div>
          )}
        </div>
      ) : null}
            
    </>
  );
}