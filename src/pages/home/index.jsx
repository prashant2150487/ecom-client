import { Link } from 'react-router'
import { Newsletter } from '../../components/newsLetter'

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <img
              src={"https://res.cloudinary.com/makerinc/c_fill,g_auto,…c83a/03d1ea75b5e0b22606b69e8e239a77fe/Group_2.jpg"}
              alt="ccasc"
              width={100}
              className='h-20'
              
            />
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default Home

