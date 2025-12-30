import { useEffect, useState } from "react";
import { fetchOpportunities } from "../api/opportunityApi";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OpportunitiesList from "../components/OpportunitiesList";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    fetchOpportunities().then(setOpportunities);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <OpportunitiesList opportunities={opportunities} />
    </>
  );
};

export default Opportunities;
