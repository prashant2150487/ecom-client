import Header from '../header'
import Footer from '../footer'
import Signin from '../signIn/signIn'
import { useSelector } from 'react-redux'

function BaseLayout({ children }) {
  const { isLoginModalOpen } = useSelector((state) => state.auth)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {isLoginModalOpen && <Signin/>}
    </div>
  )
}

export default BaseLayout

