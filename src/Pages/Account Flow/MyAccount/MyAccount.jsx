import React from 'react'
import HeroAccount from '../../../Components/HeroAccount/HeroAccount'
import Newsletter from '../../../Components/Newsletter/Newsletter'
import Footer from '../../../Components/Footer/Footer'
import TabsAccount from '../../../Components/TabsAccount/TabsAccount'
export default function MyAccount() {
  return (
    <>
    <main className='MS-main'>
      <HeroAccount />
      <TabsAccount />
      <Newsletter />
    </main>
    <Footer />
    </>
  )
}
