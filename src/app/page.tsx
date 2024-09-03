import Head from 'next/head'
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

import styles from '@/styles/Home.module.css';

import Readme from '../../README.md';

export default function Home() {
  return (
    <>
      <Head>
        <title>Timeout Server</title>
        <meta name="description" content="Mini app to validate long http request responses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div>
          <ReactMarkdown>
            {Readme}
          </ReactMarkdown>
        </div>

      </main>
    </>
  )
}
