import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home_div'>
      <h1>React Accordion</h1>
      <Link to='/countries'>With Class Component</Link>
      <Link to='/countries/1'>With Functional Component</Link>
    </div>
  )
}

export default Home