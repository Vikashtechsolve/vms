import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

const INITIAL_FORM = {
  title: '',
  skills: '',
  experience: '',
  trainersNeeded: '',
  email: '',
  contact: '',
  level: '',
  trainingType: '',
  mode: '',
  duration: '',
  location: '',
  budget: '',
  accommodation: '',
  language: [],
}

export default function PostJobForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleLanguageToggle = (lang) => {
    setForm((prev) => {
      const current = prev.language.includes(lang)
        ? prev.language.filter((l) => l !== lang)
        : [...prev.language, lang]
      return { ...prev, language: current }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.accommodation) {
      setMessage({ type: 'error', text: 'Please select whether accommodation is provided.' })
      return
    }
    if (!form.language.length) {
      setMessage({ type: 'error', text: 'Please select at least one language preference.' })
      return
    }
    setLoading(true)
    setMessage({ type: '', text: '' })
    try {
      const payload = {
        ...form,
        language: form.language.join(', '),
      }
      const res = await fetch(`${API_URL}/jobs/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setForm(INITIAL_FORM)
      setMessage({ type: 'success', text: 'Your job has been posted successfully! We will get back to you soon.' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#FAFAFA] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-[#C1272D] text-white shadow flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold border-b-2 border-[#C1272D]">
            Post a Job
          </h2>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-[#FFF5F5] rounded-2xl p-8 shadow-sm">

          {/* Status message */}
          {message.text && (
            <div
              className={`mb-6 px-4 py-3 rounded-lg text-sm ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <Label text="Job Title" />
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter the Job Title"
                className="input-field"
                required
              />
            </div>

            <div>
              <Label text="Skills / Technologies Required" />
              <input
                type="text"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="e.g. Python, Java, React"
                className="input-field"
                required
              />
            </div>

            <div>
              <Label text="Experience Required" />
              <input
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                placeholder="e.g. 3+ years"
                className="input-field"
                required
              />
            </div>

            <div>
              <Label text="Number of Trainers" />
              <input
                type="number"
                name="trainersNeeded"
                value={form.trainersNeeded}
                onChange={handleChange}
                placeholder="Enter the Number of Trainers"
                className="input-field"
                required
                min="1"
              />
            </div>

            <div>
              <Label text="Email Address" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter the Email Address"
                className="input-field"
                required
              />
            </div>

            <div>
              <Label text="Phone Number" />
              <input
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Enter the Phone Number"
                className="input-field"
                required
              />
            </div>

            <div>
              <Label text="Level of Training" />
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>

            <div>
              <Label text="Training Type" />
              <select
                name="trainingType"
                value={form.trainingType}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select type</option>
                <option value="Technical">Technical</option>
                <option value="Soft Skills">Soft Skills</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="Workshop">Workshop</option>
                <option value="Certification">Certification</option>
                <option value="University">University</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <Label text="Training Mode" />
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select mode</option>
                <option value="Online Mode">Online</option>
                <option value="Offline Mode">Offline / On-site</option>
                <option value="Hybrid Mode">Hybrid</option>
              </select>
            </div>

            <div>
              <Label text="Training Duration (Total Hours Approx.)" />
              <input
                type="text"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                placeholder="e.g. 40 hours"
                className="input-field"
              />
            </div>

            <div>
              <Label text="Training Location" />
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter the Training Location"
                className="input-field"
              />
            </div>

            <div>
              <Label text="Budget / Pay Range" />
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="e.g. ₹500–₹800/hr or Negotiable"
                className="input-field"
              />
            </div>
          </div>

          {/* Accommodation */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Accommodation Provided <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="accommodation"
                  value="Yes"
                  checked={form.accommodation === 'Yes'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4"
                /> Yes
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="accommodation"
                  value="No"
                  checked={form.accommodation === 'No'}
                  onChange={handleChange}
                  className="w-4 h-4"
                /> No
              </label>
            </div>
          </div>

          {/* Language */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Language Preference <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-wrap gap-6">
              {['English', 'Hindi', 'Regional'].map((lang) => (
                <label key={lang} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.language.includes(lang)}
                    onChange={() => handleLanguageToggle(lang)}
                    className="w-4 h-4"
                  /> {lang}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

const Label = ({ text }) => (
  <label className="text-sm text-gray-600">
    {text} <span className="text-red-500">*</span>
  </label>
)