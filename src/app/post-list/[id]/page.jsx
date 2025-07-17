import React from 'react'

const PostDetails = () => {
  return (
    <div>PostDetails</div>
  )
}

export async function generateStaticParams(){
    const posts = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`,
    );
    const posts = await res.json();

    return posts.map((post) => ({
        id:post.id,
    }))

}

export default PostDetails