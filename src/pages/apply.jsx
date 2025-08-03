import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/navbar'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer, Flip } from 'react-toastify'
import { Building2, Upload, User, Mail, FileText, Phone, MapPin } from 'lucide-react'
import jobsData from '../data/jobs.json'

const Apply = () => {
  const navigate = useNavigate()
  const { id: jobId } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()

  // Get job details if jobId is provided
  const job = jobId ? jobsData.jobs.find(j => j.id === parseInt(jobId)) : null

  const onSubmit = (data) => {
    console.log("Application Data:", data)
    toast.success("Application submitted successfully! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    })
    
    //simulate API call delay
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />
      <ToastContainer />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Apply for {job ? job.title : 'Position'}
          </h2>
          {job && (
            <div className="flex items-center justify-center space-x-2 mb-4">
              <p className="text-xl text-slate-600">at {job.company}</p>
            </div>
          )}
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Take the next step in your career. Fill out the form below and we'll review your application.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-emerald-600" />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register("name", { 
                        required: "Full name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters long" }
                      })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email", { 
                        required: "Email address is required",
                        pattern: { 
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                          message: "Please enter a valid email address" 
                        }
                      })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: { 
                          value: /^[\+]?[1-9][\d]{0,15}$/, 
                          message: "Please enter a valid phone number" 
                        }
                      })}
                      placeholder="+92 (339) 123-4567"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Location
                    </label>
                    <input
                      {...register("location")}
                      placeholder="City, State"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-2 text-emerald-600" />
                  Professional Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      {...register("experience", { required: "Experience level is required" })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-7">5-7 years</option>
                      <option value="7-10">7-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Current/Previous Job Title
                    </label>
                    <input
                      {...register("currentTitle")}
                      placeholder="e.g. Frontend Developer"
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    {...register("linkedin", {
                      pattern: { 
                        value: /^https?:\/\/(www\.)?linkedin\.com\/.*$/, 
                        message: "Please enter a valid LinkedIn URL" 
                      }
                    })}
                    placeholder="https://linkedin.com/in/your-profile"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  {errors.linkedin && (
                    <p className="text-red-500 text-sm mt-1">{errors.linkedin.message}</p>
                  )}
                </div>
              </div>

              {/* Documents Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-emerald-600" />
                  Documents
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Resume/CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        {...register("resume", { 
                          required: "Resume is required" 
                        })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                      />
                      <Upload className="absolute right-3 top-3 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-sm mt-1">PDF, DOC, or DOCX format (max 5MB)</p>
                    {errors.resume && (
                      <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Cover Letter
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        {...register("coverLetter")}
                        className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                      />
                      <Upload className="absolute right-3 top-3 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                    <p className="text-slate-500 text-sm mt-1">Optional - PDF, DOC, or DOCX format</p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-emerald-600" />
                  Additional Information
                </h3>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Why are you interested in this position?
                  </label>
                  <textarea
                    {...register("motivation")}
                    rows={4}
                    placeholder="Tell us what excites you about this role and how you can contribute to our team..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-vertical"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Expected Salary Range
                  </label>
                  <input
                    {...register("expectedSalary")}
                    placeholder="e.g. Rs80k - Rs100k"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Availability
                  </label>
                  <select
                    {...register("availability")}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select availability</option>
                    <option value="immediate">Immediately</option>
                    <option value="2weeks">2 weeks notice</option>
                    <option value="1month">1 month notice</option>
                    <option value="2months">2+ months</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-8 py-3 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 rounded-md transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-md transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Apply