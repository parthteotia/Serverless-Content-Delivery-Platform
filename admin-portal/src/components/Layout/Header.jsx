import React from 'react'


export default function Header() {
function logout() {
// clear tokens & redirect to login (Cognito Hosted UI logout could be used)
localStorage.removeItem('access_token')
window.location.href = '/login'
}


return (
<header className="flex items-center justify-between bg-white border-b p-4">
<div className="font-semibold">OTT Admin Portal</div>
<div>
<button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
</div>
</header>
)
}