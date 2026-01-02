export const fetchOpportunities = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();

  const res = await fetch(
    `http://localhost:5000/api/opportunities?${params}`
  );

  if (!res.ok) throw new Error("Failed to fetch opportunities");
  return res.json();
};

