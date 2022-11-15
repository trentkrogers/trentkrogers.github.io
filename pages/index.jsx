import Head from 'next/head'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Trenton Rogers | Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen flex flex-col justify-center items-center bg-slate-800">
        <div className="max-w-xl px-4">
          <h1 className="flex justify-center text-white text-4xl font-bold tracking-wide mb-2">Trenton Rogers</h1>
          <p className="text-slate-200 text-lg mb-4">Software Developer | Milwaukee, WI</p>
          <div className="flex justify-center gap-10">
            <a href="https://github.com/trentkrogers" target="_blank" rel="noopener noreferrer">
              <img src="./static/GitHub-Mark-Light-64px.png"
                height={32}
                width={32}
                alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/trentonrogers/" target="_blank" rel="noopener noreferrer">
              <img
                src={"./static/In-White-48@2x.png"}
                height={32}
                width={32}
                alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}