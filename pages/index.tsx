import Link from 'next/link'

const Home = () => (
  <div>
    Trailing slash
    <br />
    <br />
    <Link href="/about/">Link with trailing slash</Link>
    <br />
    <br />
    <Link href="/about">Link without trailing slash</Link>
  </div>
)

export default Home
