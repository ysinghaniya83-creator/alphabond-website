import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export function EnquiryForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "",
    phone: "", email: "", enquiryType: "Supply Enquiry", message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.message) {
      setStatus("error"); setErrorMsg("Name, phone and message are required."); return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const d = await res.json();
        setStatus("error"); setErrorMsg(d.error || "Failed to send.");
      }
    } catch {
      setStatus("error"); setErrorMsg("Network error. Please call us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Enquiry received!</h3>
        <p className="text-slate-500 mb-6">
          Our team will respond within hours. You can also reach us directly at +91 96385 63857.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="rounded-full px-6">
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
      <h3 className="text-2xl font-display font-bold mb-1">Send an Enquiry</h3>
      <p className="text-slate-500 text-sm mb-6">Supply · Samples · Job Work · Technical queries</p>
      <form className="space-y-4" onSubmit={submit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">First Name *</label>
            <Input value={form.firstName} onChange={set("firstName")} placeholder="Rajesh" className="bg-slate-50 border-slate-200" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Last Name</label>
            <Input value={form.lastName} onChange={set("lastName")} placeholder="Patel" className="bg-slate-50 border-slate-200" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Company Name</label>
          <Input value={form.company} onChange={set("company")} placeholder="Your Company Ltd." className="bg-slate-50 border-slate-200" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Phone *</label>
            <Input value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className="bg-slate-50 border-slate-200" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Email</label>
            <Input value={form.email} onChange={set("email")} type="email" placeholder="you@company.com" className="bg-slate-50 border-slate-200" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Enquiry Type</label>
          <select
            value={form.enquiryType} onChange={set("enquiryType")}
            className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option>Supply Enquiry</option>
            <option>Sample Request</option>
            <option>Job Work / White Label</option>
            <option>Technical Query / TDS</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Message *</label>
          <Textarea
            value={form.message} onChange={set("message")}
            placeholder="Describe your project, product interest, or job-work requirement..."
            className="bg-slate-50 border-slate-200 min-h-[90px]" required
          />
        </div>
        {status === "error" && (
          <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-2">{errorMsg}</p>
        )}
        <Button
          type="submit" disabled={status === "sending"}
          className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl text-base font-semibold"
        >
          {status === "sending" ? "Sending…" : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
}
