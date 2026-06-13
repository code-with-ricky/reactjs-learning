import React from 'react'
import StatCard from './StatCard'

const ProfileCard = () => {
  const skills = ['React', 'Tailwind', 'TypeScript', 'Figma']
  const profileStats = [
    { value: '5.0', label: 'Rating' },
    { value: '12+', label: 'Projects' },
    { value: '20k', label: 'Followers' },
  ]

  return (
    <section className="rounded-3xl bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left sm:items-start">
        <img
          className="h-32 w-32 rounded-full border-4 border-sky-500 object-cover shadow-lg shadow-sky-500/20"
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
          alt="Profile"
        />
        <div className="space-y-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Frontend Developer</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Avery Chen</h2>
          </div>
          <p className="max-w-xl text-slate-400">
            Experienced UI engineer focused on scalable React applications, clean design systems, and joyful user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 shadow-sm ring-1 ring-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {profileStats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          View portfolio
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
        >
          Contact
        </a>
      </div>
    </section>
  )
}

export default ProfileCard
