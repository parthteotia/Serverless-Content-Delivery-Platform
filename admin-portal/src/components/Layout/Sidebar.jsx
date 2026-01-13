import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
return (
<aside className="w-56 bg-white border-r p-4">
<h2 className="font-bold mb-4">Admin</h2>
<nav className="flex flex-col gap-2 text-sm">
<NavLink to="/dashboard" className={({isActive}) => isActive ? 'font-semibold' : ''}>Dashboard</NavLink>
<NavLink to="/upload" className={({isActive}) => isActive ? 'font-semibold' : ''}>Upload</NavLink>
<NavLink to="/videos" className={({isActive}) => isActive ? 'font-semibold' : ''}>Videos</NavLink>
</nav>
</aside>
)
}