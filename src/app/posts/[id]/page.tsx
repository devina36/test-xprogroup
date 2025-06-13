import { Post } from '@/app/types/Post';
import ButtonBack from './button-back';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getById(id);

  return {
    title: post.title,
    description: post.body,
  };
}

async function getById(params: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params}`
  );
  const post = await res.json();

  return post;
}
export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getById(id);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Post Detail</h1>
        <ButtonBack />
      </div>

      <div className="space-y-4 bg-white text-black p-4 rounded">
        <h2 className="capitalize text-xl">{post.title}</h2>

        <h3>User ID: {post.userId}</h3>
        <div className="space-y-2">
          <h4>Description: </h4>
          <p>{post.body}</p>
        </div>
      </div>
    </>
  );
}
