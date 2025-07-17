import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./components/Counter";
export default async function Home() {

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`,
  );

  const posts = await res.json();
  return (
    <div>
      <h2>Welcome to my Website</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} </li>
        ))}
      </ul>

      <hr/>

      <Counter/>
    </div>
  );
}
