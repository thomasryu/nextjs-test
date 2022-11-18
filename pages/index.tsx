import Link from 'next/link'

const Home = () => (
  <div>
    Trailing slash
    <Link href="/about/">Link with trailing slash</Link>
    <Link href="/about">Link without trailing slash</Link>
  </div>
)

export default Home
