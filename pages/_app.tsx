import React from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Derek Zeng's Blog</title>
      </Head>
      <div className="main">
        <nav>
          <ul>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </nav>
        <header>
          <h1>Derek Zeng's Blog</h1>
        </header>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
