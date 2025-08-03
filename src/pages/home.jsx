import React from "react"
import { useState, useEffect } from "react"
import { Building2 } from "lucide-react"
import SearchBar from "../components/searchBar"
import FilterBar from "../components/filterBar"
import JobCard from "../components/jobCard"
import jobsData from "../data/jobs.json"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"

export default function Home({ onJobClick }) {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [filters, setFilters] = useState({
    type: "all",
    experience: "all",
    sort: "relevance",
  })

  useEffect(() => {
    setJobs(jobsData.jobs)
    setFilteredJobs(jobsData.jobs)
  }, [])

  //SEARCH LOGIC HERE
  const handleSearch = (searchData) => {
    console.log("Search:", searchData)
    let filtered = jobs

    if (searchData.title) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchData.title.toLowerCase()) ||
          job.company.toLowerCase().includes(searchData.title.toLowerCase()) ||
          job.tags.some((tag) => tag.toLowerCase().includes(searchData.title.toLowerCase())),
      )
    }

    if (searchData.location) {
      filtered = filtered.filter((job) => job.location.toLowerCase().includes(searchData.location.toLowerCase()))
    }

    setFilteredJobs(filtered)
  }

  //FILTER LOGIC HERE
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)

    let filtered = jobs

    //type filter
    if (newFilters.type !== "all") {
      filtered = filtered.filter((job) => job.type.toLowerCase().includes(newFilters.type.toLowerCase()))
    }

    //sorting
    if (newFilters.sort === "salary") {
      filtered = [...filtered].sort((a, b) => {
        const salaryA = Number.parseInt(a.salary.replace(/[^0-9]/g, ""))
        const salaryB = Number.parseInt(b.salary.replace(/[^0-9]/g, ""))
        return salaryB - salaryA
      })
    } else if (newFilters.sort === "newest") {
      // Parse date strings like "2 days ago", "1 week ago" to actual dates
      const parsePostedDate = (postedString) => {
        const today = new Date()
        const parts = postedString.toLowerCase().split(' ')
        const number = parseInt(parts[0])
        const unit = parts[1]
        
        if (unit.includes('day')) {
          return new Date(today.getTime() - (number * 24 * 60 * 60 * 1000))
        } else if (unit.includes('week')) {
          return new Date(today.getTime() - (number * 7 * 24 * 60 * 60 * 1000))
        } else if (unit.includes('month')) {
          return new Date(today.getTime() - (number * 30 * 24 * 60 * 60 * 1000))
        } else if (unit.includes('year')) {
          return new Date(today.getTime() - (number * 365 * 24 * 60 * 60 * 1000))
        }
        return today // fallback for "today" or unrecognized formats
      }
      
      filtered = [...filtered].sort((a, b) => {
        const dateA = parsePostedDate(a.posted)
        const dateB = parsePostedDate(b.posted)
        return dateB - dateA // newest first
      })
    }

    if (newFilters.experience !== "all") {
        filtered = filtered.filter((job) => {
            return job.experience.toLowerCase().includes(newFilters.experience.toLowerCase())
        })
    }

    setFilteredJobs(filtered)
  }
  const navigate = useNavigate()
  //NAVIGATION LOGIC HERE
  const handleJobClick = (jobId) => {
    console.log("Navigate to job:", jobId)
    navigate(`/job/${jobId}`)
  }

  const handleBookmark = (jobId) => {
    console.log("Bookmark job:", jobId)
  }

  //APPLY 
  const handleApply = (jobId) => {
    console.log("Apply to job:", jobId)
    navigate(`/job/${jobId}/apply`)
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Find Your Dream Job
            <span className="block text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text">
              Today
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Discover thousands of opportunities from top companies worldwide. Your next career move is just a click
            away.
          </p>

          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <FilterBar jobCount={filteredJobs.length} onFilterChange={handleFilterChange} />

          {/* Job Cards Grid */}
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onJobClick={()=>{
                    handleJobClick(job.id)
                }}
                onBookmark={()=>{
                    handleBookmark(job.id)
                }}
                onApply={()=>{
                    handleApply(job.id)
                }}
              />
            ))}
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">JobFlow</h3>
              </div>
              <p className="text-slate-400">Connecting talented professionals with amazing opportunities worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Resume Builder
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Post Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Find Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 JobFlow. All rights reserved. Created by Zaid Haris</p>
          </div>
        </div>
      </footer>
    </div>
  )
}