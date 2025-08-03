import React from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"
import { Building2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form'
import {toast, ToastContainer, Bounce, Flip} from 'react-toastify'
import jobs from "../data/jobs.json"

const PostJob = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      experience: 'Entry',
      salary: '',
      logo: '/placeholder.svg?height=48&width=48',
      tags: '',
      featured: false,
      description: '',
    }
  })

  const onSubmit = async (data) => {
    // Convert tags string to array
    const formattedData = {
      ...data,
      tags: data.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      posted: "0 days ago",
    }

    jobs.jobs.push({...formattedData, id: jobs.jobs.length + 1}) 
    
    toast.success("Job posted successfully!")
    setTimeout(() => {
        navigate('/')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}/>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Post a New Job
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Find the perfect candidate for your team. Reach thousands of qualified professionals.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Job Title & Company Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    {...register("title", { required: "Job title is required" })}
                    placeholder="e.g. Senior Frontend Developer"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    {...register("company", { required: "Company name is required" })}
                    placeholder="e.g. TechFlow Inc."
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>
              </div>

              {/* Location & Salary Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Location *
                  </label>
                  <input
                    {...register("location", { required: "Location is required" })}
                    placeholder="e.g. San Francisco, CA or Remote"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Salary Range *
                  </label>
                  <input
                    {...register("salary", { required: "Salary range is required" })}
                    placeholder="e.g. $120k - $160k"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  {errors.salary && (
                    <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
                  )}
                </div>
              </div>

              {/* Job Type & Experience Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Job Type
                  </label>
                  <select 
                    {...register("type")}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Experience Level
                  </label>
                  <select 
                    {...register("experience")}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="Entry">Entry Level</option>
                    <option value="Mid">Mid Level</option>
                    <option value="Senior">Senior Level</option>
                  </select>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  {...register("description", { required: "Job description is required" })}
                  placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-vertical"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                )}
              </div>

              {/* Tags & Logo Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Skills & Tags *
                  </label>
                  <input
                    {...register("tags", { required: "At least one tag is required" })}
                    placeholder="e.g. React, TypeScript, Next.js"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <p className="text-slate-500 text-sm mt-1">Separate tags with commas</p>
                  {errors.tags && (
                    <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Logo URL
                  </label>
                  <input
                    {...register("logo")}
                    placeholder="https://example.com/logo.png"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <p className="text-slate-500 text-sm mt-1">Optional - we'll use a placeholder if empty</p>
                </div>
              </div>

              {/* Featured Job Checkbox */}
              <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                <input
                  {...register("featured")}
                  type="checkbox"
                  id="featured"
                  className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                />
                <label htmlFor="featured" className="text-sm font-medium text-slate-700">
                  Make this a featured job posting
                </label>
                <span className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-medium rounded-full">
                  Premium
                </span>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="px-8 py-3 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 rounded-md transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-md transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PostJob