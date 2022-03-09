import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className='mb-8 w-full'>
            <Link to="/react">React</Link>
            <Link to="/vite">Vite</Link>
        </nav>
    )
}