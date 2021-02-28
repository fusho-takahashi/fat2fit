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
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
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
