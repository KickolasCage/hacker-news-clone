import {PageTemplate, getStaticPropsTemplate} from '../components/PageTemplate'

import storiesType from '../utils/storiesType'

const stories = storiesType('top')

export default function Top() {
    return <PageTemplate stories={stories}/>
}

export const getStaticProps = getStaticPropsTemplate(stories)



// export default function Top() {
//   const { data: list, error } = useSWR("newstories", fetchList);

//   return (
//     <>
//       {error ? (
//         <Error />
//       ) : !list ? (
//         <Loading />
//       ) : (
//         <PostList items={list.slice(0, 30)} url={false} />        
//       )}
//     </>
//   );
// }

// export async function getStaticProps() {
//   const list = await fetchList("newstories");
//   return {
//     props: {
//       fallback: {
//         beststories: list,
//       },
//     },
//     revalidate: 60,
//   };
// }
