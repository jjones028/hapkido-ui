import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react"
import {msalConfig} from "./authConfig.ts"
import {InteractionType, PublicClientApplication} from "@azure/msal-browser"
import {MsalAuthenticationTemplate, MsalProvider} from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig)
const authRequest = {
    scopes: ["openid", "profile"],
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MsalProvider instance={msalInstance}>
          <MsalAuthenticationTemplate interactionType={InteractionType.Redirect} authenticationRequest={authRequest}>
              <NextUIProvider>
                  <main className="text-foreground bg-background min-h-screen">
                      <App />
                  </main>
              </NextUIProvider>
          </MsalAuthenticationTemplate>
      </MsalProvider>
  </React.StrictMode>,
)
