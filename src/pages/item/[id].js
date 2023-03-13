import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR, { SWRConfig } from 'swr';
import DOMPurify from 'dompurify';

import { fetchItem } from '../../utils/fetch';
import ItemHeader from '../../components/ItemHeader';
import Comment from '../../components/Comment';


function Item() {
  const router = useRouter();
  const { id } = router.query;
  const { data: item, error } = useSWR(`${id}`, fetchItem);

  console.log(item)

  return (
    <>      
      {error || item === null ? (
        <div className="">Error loading post.</div>
      ) :
       !item ? (
        <div className="font-bold">Loading...</div>
      ) : 
      (
        <>
          <ItemHeader itemId={item.id} key={item.id} url={item.url} page="item" />
          <div className='mx-5'                                   
                  dangerouslySetInnerHTML={{
                    __html:
                    //  DOMPurify.sanitize(
                    //   item.text
                    // ),
                    item.text
                  }}                
                />
          {item.descendants > 0 && (
            <div className="comments">
              <div className='ml-4'>
                {item.descendants}
                {item.descendants > 1 ? ' Comments:' : ' Comment:'}
              </div>
              {item.kids &&
                item.kids.map((comment) => (
                  <Comment item={comment} key={comment} />
                ))}
            </div>
          )}
        </>
      )}      
    </>
  );
 
}

export async function getStaticProps({ params: { id } }) {
  const data = await fetchItem(id);
  return {
    props: {
      fallback: {
        [id]: data,
      },
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export default function Page({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Item />
    </SWRConfig>
  );
}