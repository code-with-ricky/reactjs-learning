import React from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileSummary from './components/ProfileSummary'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Tailwind CSS Profile</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            User profile card demo
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            A simple responsive layout built with Tailwind utility classes and a clean profile card component.
          </p>
        </header>

        <main className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
          <ProfileCard />
          <ProfileSummary />
        </main>
      </div>
    </div>
  )
}

export default App