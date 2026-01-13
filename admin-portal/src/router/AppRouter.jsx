import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import UploadVideo from '../pages/UploadVideo'
import VideoList from '../pages/VideoList'
import VideoDetails from '../pages/VideoDetails'
import { useAuth } from '../hooks/useAuth'
import Layout from '../components/Layout/Layout'


export default function AppRouter() {
return (
<BrowserRouter>
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/login/callback" element={<Login callback />} />


<Route path="/" element={<Protected><Layout /></Protected>}>
<Route index element={<Navigate to="/dashboard" />} />
<Route path="dashboard" element={<Dashboard />} />
<Route path="upload" element={<UploadVideo />} />
<Route path="videos" element={<VideoList />} />
<Route path="videos/:id" element={<VideoDetails />} />
</Route>


</Routes>
</BrowserRouter>
)
}


function Protected({ children }) {
const { isAuthenticated, loading } = useAuth()
if (loading) return <div className="p-6">Checking session...</div>
if (!isAuthenticated) return <Navigate to="/login" replace />
return children
}