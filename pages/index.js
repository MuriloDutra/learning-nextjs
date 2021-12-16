import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Paul Atreides é um personagem fictício do universo Dune criado por Frank Herbert.
          Paul é o protagonista principal dos dois primeiros romances da série, Dune e Dune Messiah, e retorna em Children of Dune.
          O personagem é trazido de volta como dois gholas diferentes nos romances de Brian Herbert / Kevin J
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}