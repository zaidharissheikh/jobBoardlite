import React from "react"
export default function FilterBar({ jobCount, onFilterChange }) {
  const handleFilterChange = (filterType, value) => {
    onFilterChange?.(filterType, value)
  }

  return (
    <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
      <div className="flex items-center space-x-4">
        <h3 className="text-2xl font-bold text-slate-900">Latest Jobs</h3>
        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
          {jobCount} positions
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <select
          onChange={(e) => handleFilterChange("type", e.target.value)}
          className="w-fit md:w-40 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="all">All Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="remote">Remote</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("experience", e.target.value)}
          className="w-fit md:w-40 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="all">All Levels</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("sort", e.target.value)}
          className="w-fit md:w-32 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="relevance">Relevance</option>
          <option value="salary">Salary</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  )
}
