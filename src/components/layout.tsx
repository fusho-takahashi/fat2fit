import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const siteTitle = '100日後にマッチョになるデブ'

const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/flexed-biceps_1f4aa.png"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content="https://fat2fit.fusho-takahashi.me/posts/5%E6%97%A5%E7%9B%AE"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {home ? (
        <header className={styles.homeHeader}>
          <Image
            priority
            src="/logo.svg"
            height={420}
            width={420}
            alt={siteTitle}
          />
        </header>
      ) : (
        <header className={styles.postsHeader}>
          <Link href="/">
            <a>
              <Image
                priority
                src="/logo_min.svg"
                height={40}
                width={40}
                alt={siteTitle}
              />
            </a>
          </Link>
        </header>
      )}
      <main className={styles.content}>{children}</main>
    </div>
  )
}

export default Layout
