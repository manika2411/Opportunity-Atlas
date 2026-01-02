import { useEffect, useState } from "react";
import { fetchOpportunities } from "../api/opportunityApi";
import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OpportunitiesList from "../components/OpportunitiesList";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filters, setFilters] = useState({});

  const loadData = async (updatedFilters = filters) => {
    const data = await fetchOpportunities(updatedFilters);
    setOpportunities(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFilterChange = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    loadData(updated);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6">
        <Filters onChange={handleFilterChange} />
        <OpportunitiesList opportunities={opportunities} />
      </div>
    </div>
  );
};

export default Opportunities;
