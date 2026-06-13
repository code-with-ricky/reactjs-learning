import React from 'react'

const StatCard = ({ value, label }) => (
  <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 text-center">
    <p className="text-3xl font-semibold text-white">{value}</p>
    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">{label}</p>
  </div>
)

export default StatCard
