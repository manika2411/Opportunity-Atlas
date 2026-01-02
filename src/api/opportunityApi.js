export const fetchOpportunities = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();

  const res = await fetch(
    `http://localhost:5000/api/opportunities?${params}`
  );

  if (!res.ok) throw new Error("Failed to fetch opportunities");
  return res.json();
};

export const fetchOpportunityById = async (id) => {
  const res = await fetch(
    `http://localhost:5000/api/opportunities/${id}`
  );

  if (!res.ok) throw new Error("Failed to fetch opportunity");
  return res.json();
};
