import Link from 'next/link'

const Home = () => (
  <div>
    Trailing slash
    <br />
    <br />
    <a href="/about/" target="_blank">
      Link with trailing slash
    </a>
    <br />
    <br />
    <a href="/about" target="_blank">
      Link without trailing slash
    </a>
  </div>
)

export default Home
