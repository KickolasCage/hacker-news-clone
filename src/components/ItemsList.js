import Item from '@/components/ItemHeader'

export default function PostsList({ items, url }) {
  return (
    <ol className='flex flex-col gap-5'>
      {items.map((itemId, id) => (
        <Item itemId={itemId} key={itemId} url={url} page="list" />
      ))}
    </ol>
  );
}
