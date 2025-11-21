const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const fetchProjects = async () => {
  const res = await fetch(`${API_BASE_URL}/projects`); 
  if (!res.ok) {
    throw new Error("Failed to load projects");
  }
  return res.json();
};

export const submitMessage = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/contact`, { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.detail || "Failed to send message");
  }
  return res.json();
};
