import { useState } from "react"
import { toast } from "sonner"

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    standard: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error("Please fill in Name and Phone Number.")
      return
    }
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    toast.success("Inquiry submitted! We'll contact you within 24 hours.")
    setForm({ name: "", phone: "", email: "", standard: "", message: "" })
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-lg font-bold text-navy mb-5">Admission Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name *"
            required
            className="col-span-1 border border-gray-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="col-span-1 border border-gray-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="col-span-1 border border-gray-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
          />
          <select
            name="standard"
            value={form.standard}
            onChange={handleChange}
            className="col-span-1 border border-gray-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-500"
          >
            <option value="">Select Standard</option>
            <option value="8th">Std 8th</option>
            <option value="9th">Std 9th</option>
            <option value="10th">Std 10th</option>
          </select>
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message (optional)"
          rows={3}
          className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400 resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-navy font-semibold py-3 rounded-md text-sm transition-colors disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  )
}

export default InquiryForm
