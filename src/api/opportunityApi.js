import axios from "axios"

const API_BASE = "http://localhost:5000/api/opportunities"

export const fetchOpportunities = async () => {
  const response = await axios.get(API_BASE)
  return response.data
}
