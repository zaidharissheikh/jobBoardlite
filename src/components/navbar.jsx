import React from 'react'
import { Building2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { NavLink } from 'react-router-dom'

const navbar = () => {
  const navigate = useNavigate()
  const postJob = () => {
    navigate("/post-job")
  }

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    JobFlow
                  </NavLink>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                  <a href="#" className="text-slate-600 hover:text-slate-900 font-medium">
                    Jobs
                  </a>
                  <a href="#" className="text-slate-600 hover:text-slate-900 font-medium">
                    Companies
                  </a>
                  <a href="#" className="text-slate-600 hover:text-slate-900 font-medium">
                    About
                  </a>
                  <button className="px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:text-slate-900 transition-colors">
                    Sign In
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-md transition-all duration-200" onClick={() => postJob()}>
                    Post Job
                  </button>
                </nav>
              </div>
            </div>
    </header>
  )
}

export default navbar