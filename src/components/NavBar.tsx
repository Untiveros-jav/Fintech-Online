import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-yellow-400 font-semibold' : 'text-white hover:text-yellow-400'

  return (
    <nav className="w-full bg-slate-900 px-6 py-4 flex items-center justify-between">
      <NavLink to="/" className="text-xl font-bold text-yellow-400">
        Fintech GO
      </NavLink>

      <div className="flex items-center justify-stretch gap-6">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/servicies" className={linkClass}>Servicies</NavLink>
      </div>
      
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-end gap-3'>
          <NavLink to="/login" className='text-amber-700 hover:text-amber-300 font-medium'>Login</NavLink>
          <NavLink to="/register" className='text-cyan-700 hover:text-cyan-300 font-bold'>Registrar</NavLink>
        </div>
      </div>
    </nav>
  )
}