import { Inter } from 'next/font/google';
import Layout from '@/components/layouts';
import RedLine from '@/components/sections/RedLine';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <RedLine />
      </Layout>
    </>
  )
}
