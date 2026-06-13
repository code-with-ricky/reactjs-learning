import React from 'react'

const ProfileSummary = () => (
  <aside className="space-y-5 rounded-3xl bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700 backdrop-blur-sm">
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-white">About</h3>
      <p className="text-slate-400">
        Avery leads design-to-development handoff with polished UI components, confident interactions, and attention to detail.
      </p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-white">Contact</h3>
      <ul className="space-y-2 text-slate-300">
        <li>Email: <span className="text-slate-400">avery.chen@example.com</span></li>
        <li>Location: <span className="text-slate-400">San Francisco, CA</span></li>
        <li>Availability: <span className="text-slate-400">Open for freelance</span></li>
      </ul>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-white">Skills</h3>
      <div className="grid grid-cols-2 gap-2">
        {['UI Design', 'Accessibility', 'Animations', 'API Integration'].map((skill) => (
          <span
            key={skill}
            className="rounded-2xl bg-slate-800 px-3 py-2 text-sm text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </aside>
)

export default ProfileSummary
