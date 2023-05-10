import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/shared/Header'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Websites from '@/components/home/Websites'
import Advantages from '@/components/home/Advantages'
import Product from '@/components/home/Product'
import Footer from '@/components/shared/Footer'
import Messenger from '@/components/home/Messenger'
import Stacks from '@/components/home/Stacks'
import Projects from '@/components/home/Projects'
import VideoAudit from '@/components/home/VideoAudit'
import Form from '@/components/home/Form'
import Question from '@/components/home/Question'
import StagesWork from '@/components/home/StagesWork'
import TeamSlider from '@/components/home/TeamSlider'
import Zoom from '@/components/shared/Zoom'

const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps() {
  const query = `query Assets {
    posts {
      title
      excerpt
      tags
      createdAt
      slug
      coverImage {
        url
      }
    }
  }`;

  const teamQuery = `query MyQuery {
    posts {
      name
      excerpt
      profession
      slug
      tags
      coverImage {
        url
      }
      rewards
    }
  }`;

  const response = await fetch(
    'https://api-us-west-2.hygraph.com/v2/clh546yux60qk01t8c3g66zqz/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  );

  const teamResponse = await fetch(
    'https://api-us-west-2.hygraph.com/v2/clh4zdcwq5s5p01ue7mgtbapo/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: teamQuery }),
    }
  );

  const data = await response.json();
  const projects = data.data.posts;

  const teamData = await teamResponse.json();
  const teamMembers = teamData.data.posts;

  return {
    props: {
      // ...
      projects,
      teamMembers,
    },
  };
}


export default function Home({projects, teamMembers}) {
  return (
    <>
      <Head>
        <title>Azart tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main_container'>
        <div>
          <img className='lines' src="./assets/images/3d-lines.png" alt="" />
          <Header/>
          <Section1/>
        </div>

        <Section2/>


        <Websites/>

        <div className='container'>
          <Advantages/>
          <Product/>
          <Stacks/>
          <Messenger/>
        </div>
        <Projects projects={projects} />
        <div className='container'>
          <Zoom/>
          <VideoAudit/>
        </div>
          <StagesWork/>
          <TeamSlider teamMembers={teamMembers}/>
        <div className='container'>
          <Question/>
          <Form/>
        </div>
        <Footer/>
      </main>
    </>
  )
}
