import React from 'react'

const PostDetails = async({params}) => {
  const {id} = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await res.json();
  return (
    <div>
        <h2>Post Details of Post - {id}</h2>
        <p>post title - {post.title}</p>
    </div>
  )
}

export async function generateStaticParams(){
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`,
    );
    const posts = await res.json();

    return posts.map((post) => ({
        id:String(post.id),
    }))

}

export default PostDetails