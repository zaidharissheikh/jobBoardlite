import React from "react"
import jobsData from "../data/jobs.json"
import { useNavigate, useParams } from "react-router-dom"
export default function JobDetail() {
  const { id: jobId } = useParams()
  // Find the job by ID, fallback to first job if not found
  const job = jobsData.jobs.find((j) => j.id === Number.parseInt(jobId)) || jobsData.jobs[0]

  // Extended job data for detail view
  const jobDetails = {
    ...job,
    applicants: Math.floor(Math.random() * 150),
    responsibilities: [
      "Develop and maintain high-quality React applications using TypeScript",
      "Collaborate with UX/UI designers to implement pixel-perfect designs",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and well-documented code",
      "Mentor junior developers and contribute to code reviews",
      "Stay up-to-date with the latest frontend technologies and best practices",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Experience with Next.js and server-side rendering",
      "Proficiency in CSS-in-JS solutions and responsive design",
      "Experience with GraphQL and REST APIs",
      "Knowledge of testing frameworks (Jest, React Testing Library)",
      "Familiarity with AWS services and deployment pipelines",
      "Strong problem-solving skills and attention to detail",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements and remote options",
      "Professional development budget ($3,000/year)",
      "Unlimited PTO and sabbatical opportunities",
      "State-of-the-art equipment and workspace",
      "Team building events and company retreats",
    ],
    companyInfo: {
      size: `${Math.floor(Math.random() * 151) + 50} employees`,
      founded: Math.floor(Math.random() * 24) + 2000,
      industry: "Technology",
      website: "https://techflow.com",
      description:
        `${job.company} is a fast-growing technology company focused on building innovative solutions that transform how businesses operate. We're passionate about creating products that make a real difference in people's lives.`,
    },
  }
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1);
  }

  //APPLICATION LOGIC 
  const handleApply = (jobId) => {
    navigate(`/job/${jobId}/apply`)
  }

  const handleBookmark = () => {
    console.log("Bookmark job:", jobId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                onClick={handleBack}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Jobs
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </button>
              <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors" onClick={handleBookmark}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <div className="border-0 bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {jobDetails.company.charAt(0)}
                  </div>
                  {jobDetails.featured && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 mb-2">{jobDetails.title}</h1>
                      <p className="text-xl text-slate-600 font-medium">{jobDetails.company}</p>
                    </div>
                    {jobDetails.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center text-slate-600">
                      <svg
                        className="w-5 h-5 mr-2 text-slate-400"
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
                      <span className="font-medium">{jobDetails.location}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <svg
                        className="w-5 h-5 mr-2 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium">{jobDetails.type}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <svg
                        className="w-5 h-5 mr-2 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      <span className="font-medium">{jobDetails.salary}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <svg
                        className="w-5 h-5 mr-2 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        />
                      </svg>
                      <span className="font-medium">{jobDetails.applicants} applicants</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {jobDetails.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="border-0 bg-white/80 backdrop-blur-sm shadow-lg rounded-lg">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-slate-900">Job Description</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-slate-600 leading-relaxed">{jobDetails.description}</p>
                </div>

                <hr className="border-slate-200" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {jobDetails.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-slate-200" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {jobDetails.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-slate-200" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Benefits & Perks</h3>
                  <ul className="space-y-3">
                    {jobDetails.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="border-0 bg-white/80 backdrop-blur-sm shadow-lg sticky top-24 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-slate-900 mb-2">{jobDetails.salary}</div>
                <div className="text-slate-600">Annual Salary</div>
              </div>

              <button
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg font-semibold rounded-md mb-4 transition-all duration-200"
                onClick={() => handleApply(jobDetails.id)}
              >
                Apply Now
              </button>

              <button
                className="w-full py-3 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 rounded-md mb-4 transition-colors flex items-center justify-center"
                onClick={handleBookmark}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                Save Job
              </button>

              <div className="text-center text-sm text-slate-500">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                  />
                </svg>
                Posted {jobDetails.posted}
              </div>
            </div>

            {/* Company Info */}
            <div className="border-0 bg-white/80 backdrop-blur-sm shadow-lg rounded-lg">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-slate-900 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 8h10M7 12h4m1 8l-1-1v-1a1 1 0 011-1h2a1 1 0 011 1v1l-1 1"
                    />
                  </svg>
                  About {jobDetails.company}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">{jobDetails.companyInfo.description}</p>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Company Size</span>
                    <span className="text-slate-900 font-medium">{jobDetails.companyInfo.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Founded</span>
                    <span className="text-slate-900 font-medium">{jobDetails.companyInfo.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Industry</span>
                    <span className="text-slate-900 font-medium">{jobDetails.companyInfo.industry}</span>
                  </div>
                </div>

                <button className="w-full py-2 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 rounded-md transition-colors flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}