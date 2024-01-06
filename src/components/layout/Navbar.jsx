import { FaSpotify } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg 
    bg-neutral text-neutral-content'>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
            <FaSpotify className='inline pr-2 pb-2 text-3xl'/>
            <Link to='/' className='text-lg font-bold'>
              {title}
            </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='btn btn-primary btn-sm rounded-none mr-2'>
              Home
            </Link>
            <Link to='/about' className='btn btn-primary btn-sm rounded-none'>
              About
            </Link>
          </div>
        </div>
      </div>
    
    </nav>
    )
}

Navbar.defaultProps = {
    title: 'Finder',
}

Navbar.PropTypes = {
  title: PropTypes.string,
}


export default Navbar