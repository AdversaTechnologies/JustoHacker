import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { sendLead } from "@/config/leads.js";
import { pickMessages, useI18n } from "@/i18n/I18nContext.jsx";

export default function LeadForm({ open, onOpenChange, defaultSource }) {
  const { locale } = useI18n();
  const L = pickMessages(locale).lead;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setName("");
    setCompany("");
    setEmail("");
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendLead({ name, company, email, source: defaultSource || window.location.href });
      setSuccess(true);
      setTimeout(() => {
        setLoading(false);
        onOpenChange(false);
        reset();
      }, 1500);
    } catch (err) {
      setLoading(false);
      setError(err?.message || L.error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) reset(); onOpenChange(v); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{L.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input required placeholder={L.name} value={name} onChange={(e) => setName(e.target.value)} />
            <Input required placeholder={L.company} value={company} onChange={(e) => setCompany(e.target.value)} />
            <Input required type="email" placeholder={L.email} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}
          {success && <div className="text-sm text-green-500">{L.success}</div>}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>{L.cancel}</Button>
            <Button type="submit" disabled={loading}>{loading ? L.sending : L.send}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
