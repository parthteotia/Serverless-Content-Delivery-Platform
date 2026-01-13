import React, { useEffect } from "react";
import { COGNITO_DOMAIN, COGNITO_CLIENT_ID, COGNITO_REDIRECT_URI } from "../utils/config";

export default function Login({ callback = false }) {

  useEffect(() => {
    if (callback) {
      // After redirect from Cognito Hosted UI
      const hash = window.location.hash;
      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.replace("#", ""));
        const access_token = params.get("access_token");
        localStorage.setItem("access_token", access_token);
        window.location.href = "/";
      }
    }
  }, [callback]);

  function startLogin() {
    const authUrl = `${COGNITO_DOMAIN}/oauth2/authorize?response_type=token&client_id=${COGNITO_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      COGNITO_REDIRECT_URI
    )}&scope=openid+email+profile`;
    window.location.href = authUrl;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <button
          onClick={startLogin}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Login with Cognito
        </button>
      </div>
    </div>
  );
}
