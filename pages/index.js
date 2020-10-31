import Link from 'next/link';

const h1 = {
  fontSize: '68pt',
  textAlign: 'right',
  letterSpacing: '-8px',
  color: '#f0f0f0',
  margin: '-32px 0px',
  fontWeight: 'bold',
}

const p = {
  margin: '0px',
  color: '#666',
  fontSize:'16pt',
}

export default () => <div>
  <h1 style={h1}>Next.js</h1>
  <p style={p}>Welcome to next.js!!</p>
  <hr />
  <div>
    <Link href="/other">
      <a>Go to Other page &gt;&gt;</a>
    </Link>
  </div>
</div>
