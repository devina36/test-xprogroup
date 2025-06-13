import Link from 'next/link';
import { Post } from './types/Post';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-2xl">Posts</h1>

      <div className="grid grid-cols-4 gap-4">
        {posts?.map((post, index) => {
          return (
            <article
              key={post.id}
              className="p-3 flex flex-col justify-between rounded border bg-white text-black h-40 max-h-40 truncate">
              <div className="w-full inline-block">
                <p className="truncate w-full capitalize text-xl">
                  {index + 1}. {post.title}
                </p>
                <p className="truncate">{post?.body}</p>
              </div>

              <div className="text-white bg-blue-500 rounded px-4 py-2 cursor-pointer w-fit">
                <Link href={`/posts/${post.id}`}>View Details</Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
