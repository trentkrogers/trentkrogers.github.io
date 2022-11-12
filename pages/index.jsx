import Head from 'next/head'
import Image from 'next/image'


export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Trenton Rogers | Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div class="h-screen flex flex-col justify-center items-center bg-slate-800">
        <div class="max-w-xl px-4">
          <h1 class="text-slate-300 text-4xl font-bold tracking-wide mb-2">Trenton Rogers</h1>
          <p class="text-slate-200 text-xl mb-4">I am a software developer based out of Milwaukee, Wisconsin.</p>
          <div class="flex justify-center gap-10">
            <a href="https://github.com/trentkrogers">
              <Image
                src="/images/GitHub-Mark-Light-64px.png"
                height={32}
                width={32}
                alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/trentonrogers/">
              <Image
                src="/images/In-White-48@2x.png"
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