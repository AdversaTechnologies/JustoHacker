export const LEAD_API_URL = import.meta.env.VITE_LEAD_API_URL || "";

export async function sendLead({ name, company, email, source }) {
  if (!LEAD_API_URL) {
    throw new Error("LEAD API URL no configurada. Define VITE_LEAD_API_URL en tu entorno.");
  }

  const response = await fetch(LEAD_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, company, email, source, timestamp: new Date().toISOString() })
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Lead API error: ${response.status} ${text}`);
  }

  return response.json().catch(() => ({}));
}


