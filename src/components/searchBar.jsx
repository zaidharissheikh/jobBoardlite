import React from "react"
import { useState } from "react"

export default function SearchBar({ onSearch }) {
  const [searchData, setSearchData] = useState({
    title: "",
    location: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(searchData)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-2 shadow-xl border-0 bg-white/90 backdrop-blur-sm rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                name="title"
                value={searchData.title}
                onChange={handleInputChange}
                placeholder="Job title, keywords, or company"
                className="pl-10 border-0 text-lg h-14 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full rounded-md"
              />
            </div>
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                name="location"
                value={searchData.location}
                onChange={handleInputChange}
                placeholder="City, state, or remote"
                className="pl-10 border-0 text-lg h-14 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              className="h-14 px-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg font-semibold text-white rounded-md transition-all duration-200"
              onClick={handleSubmit}
            >
              Search Jobs
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}