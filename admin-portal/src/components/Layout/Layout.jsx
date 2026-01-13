import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'


export default function Layout() {
return (
<div className="min-h-screen flex bg-slate-50">
<Sidebar />
<div className="flex-1">
<Header />
<main className="p-6">
<Outlet />
</main>
</div>
</div>
)
}