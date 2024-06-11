import Image from "next/image";

import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Text from '../components/Text'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{"Don't have"}</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Header /> */}

      {/* <Header /> */}

      <main className="flex-grow p-8">
        <div className="flex flex-col space-y-4">
          <Text variant="h2" color="green" > PK store front</Text>
          <Card title="Card 1" description="This is the first card." />
          <Card title="Card 2" description="This is the second card." />
          <Card title="Card 2" description="This is the second card." />
          <Card title="Card 2" description="This is the second card." />
        </div>
      </main>

      <Footer />
    </div>
  )
}

