import type { NextPage } from 'next'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {session ? (<Profile session={session} supabaseClient={supabase} />) : (<></>)}
      <Footer />
    </div>
  )
}

export default Home
