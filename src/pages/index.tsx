import { useState, useEffect, ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import board from '../board'
import { SurfKingGame } from '../game'
import { Client } from 'boardgame.io/react'
import { DEFAULT_DEBUG } from '../app-constants'

import {
  intlAuthenticationSignIn,
  intlAuthenticationSignOut,
  loadLanguage,
  SUPPORT_LOCALES,
} from '../internationalization'

const SurfKingClient = Client({
  game: SurfKingGame,
  board,
  debug: process.env.DEBUG || DEFAULT_DEBUG ? true : false,
  // multiplayer: { server: process.env.REACT_APP_SERVER },
})

export default function Home(): ReactNode {
  const [session] = useSession()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(!(await loadLanguage()))
      } catch (e) {
        // TODO: Log better.
        console.log('Home:useEffect:::error', e)
      }
    })()
  }, [])

  const renderLocaleSelector = (): JSX.Element => {
    return (
      <select onBlur={onSelectLocale} defaultValue="">
        <option value="" disabled>
          Change Language
        </option>
        {SUPPORT_LOCALES.map((locale) => (
          <option key={locale.value} value={locale.value}>
            {locale.name}
          </option>
        ))}
      </select>
    )
  }

  const onSelectLocale = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const lang = e.target.value
    window.location.search = `?lang=${lang}`
    e.preventDefault
  }

  return (
    !loading && (
      <div
        style={{
          minHeight: '100vh',
          padding: '0 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Head>
          <title>Surf King Game</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Surf King Game" />
        </Head>

        <main
          style={{
            padding: '5rem 0',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {renderLocaleSelector()}

          {!session && (
            <div>
              <Link href="/api/auth/signin">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    signIn()
                  }}
                >
                  {intlAuthenticationSignIn()}
                </button>
              </Link>
            </div>
          )}
          {session && (
            <div>
              <Link href="/api/auth/signout">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  {intlAuthenticationSignOut()}
                </button>
              </Link>
              <div>
                <span>{session.user.email}</span>
              </div>
              <div>
                <SurfKingClient playerID="0" />
              </div>
            </div>
          )}
        </main>

        <footer></footer>
      </div>
    )
  )
}
