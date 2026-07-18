import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

const INITIAL_FORM = {
  company: '',
  type: '',
  size: '',
  hrName: '',
  email: '',
  phone: '',
  skills: '',
  hiring: [],
  mode: [],
}

export default function CompanyRegistration() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckbox = (field, value) => {
    setForm((prev) => {
      const current = prev[field]
      const exists = current.includes(value)
      return {
        ...prev,
        [field]: exists ? current.filter((v) => v !== value) : [...current, value],
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (!form.company.trim()) return setMessage({ type: 'error', text: 'Company name is required.' })
    if (!form.email.trim()) return setMessage({ type: 'error', text: 'Email is required.' })
    if (!form.phone.trim()) return setMessage({ type: 'error', text: 'Contact number is required.' })
    if (form.hiring.length === 0) return setMessage({ type: 'error', text: 'Please select at least one Hiring Type.' })
    if (form.mode.length === 0) return setMessage({ type: 'error', text: 'Please select at least one Mode.' })

    setLoading(true)
    try {
      const payload = {
        company: form.company.trim(),
        type: form.type.trim(),
        size: form.size.trim(),
        hrName: form.hrName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        skills: form.skills.trim(),
        hiring: form.hiring.join(', '),
        mode: form.mode.join(', '),
        status: 'Active',
      }
      const res = await fetch(`${API_URL}/vendors/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setForm(INITIAL_FORM)
      setMessage({ type: 'success', text: 'Your company has been registered successfully! We will get back to you soon.' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-[#FAFAFA] px-4 py-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#EEF5FF] to-[#F8FBFF] rounded-2xl p-5 sm:p-6 md:p-10">

        {/* Page title */}
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Company Registration</h2>

        {/* Status message */}
        {message.text && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>

          {/* Company Details */}
          <h3 className="text-base font-semibold text-gray-800 mb-4">Company Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <Input
              label="Company Name *"
              name="company"
              placeholder="Enter Company Name"
              value={form.company}
              onChange={handleChange}
            />
            <Input
              label="Company Type *"
              name="type"
              placeholder="e.g. IT Firm, Training Institute"
              value={form.type}
              onChange={handleChange}
            />
            <Input
              label="Company Size"
              name="size"
              placeholder="e.g. 10–50 employees"
              value={form.size}
              onChange={handleChange}
            />
          </div>

          {/* Contact Person Details */}
          <h3 className="text-base font-semibold text-gray-800 mb-4">Contact Person Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <Input
              label="HR Name"
              name="hrName"
              placeholder="Enter HR Name"
              value={form.hrName}
              onChange={handleChange}
            />
            <Input
              label="Email *"
              name="email"
              placeholder="Enter the Email"
              value={form.email}
              onChange={handleChange}
              type="email"
            />
            <Input
              label="Contact Number *"
              name="phone"
              placeholder="Enter the Contact Number"
              value={form.phone}
              onChange={handleChange}
              type="tel"
            />
          </div>

          {/* Hiring Preferences */}
          <h3 className="text-base font-semibold text-gray-800 mb-4">Hiring Preferences</h3>
          <div className="mb-5">
            <Input
              label="Training Skills Required"
              name="skills"
              placeholder="e.g. Python, Java, DSA, Power BI"
              value={form.skills}
              onChange={handleChange}
            />
          </div>

          {/* Hiring Type */}
          <div className="mb-5">
            <p className="text-sm font-medium text-gray-600 mb-2">Hiring Type *</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Part-Time Trainer', 'Full-Time Trainer'].map((opt) => (
                <CheckboxCard
                  key={opt}
                  label={opt}
                  checked={form.hiring.includes(opt)}
                  onChange={() => handleCheckbox('hiring', opt)}
                />
              ))}
            </div>
          </div>

          {/* Mode */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-600 mb-2">Mode *</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Online Mode', 'Offline Mode'].map((opt) => (
                <CheckboxCard
                  key={opt}
                  label={opt}
                  checked={form.mode.includes(opt)}
                  onChange={() => handleCheckbox('mode', opt)}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

/* ---------- Reusable Input ---------- */
function Input({ label, name, placeholder, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-[#FFF8F8] border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#C1272D]"
      />
    </div>
  )
}

/* ---------- Checkbox Card ---------- */
function CheckboxCard({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 bg-[#FFF8F8] border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#C1272D] transition">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />
      <span className="text-sm text-gray-500">{label}</span>
    </label>
  )
}
