import Link from "next/link";

const Nav = () => {
    return (
        <nav >
            <ul style={{
        display: "flex",
        gap: "20px",
        listStyle: "none",
        padding: 0,
        margin:20,
      }}>
                <li>
                    <Link href="/">Home</Link>
                    
                </li>
                <li>
                     <Link href="/about">About</Link>    
                </li>

                <li>
                    <Link href="/abc/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/abc">ABC</Link>
                </li>
                <li>
                    <Link href="/post-list">Post List</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;