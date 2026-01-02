import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOpportunityById } from "../api/opportunityApi";
import Navbar from "../components/Navbar";

const OpportunityDetail = () => {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    fetchOpportunityById(id).then(setOpportunity);
  }, [id]);

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold">{opportunity.title}</h1>
        <p className="text-slate-400 mt-2 text-lg">
          {opportunity.organisation}
        </p>

        <div className="flex gap-4 mt-6">
          <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm">
            {opportunity.type}
          </span>
          <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">
            {opportunity.location}
          </span>
        </div>

        <p className="mt-8 text-slate-300 leading-relaxed">
          {opportunity.description}
        </p>

        <p className="mt-6 text-slate-400">
          Deadline:{" "}
          <span className="text-white">
            {new Date(opportunity.deadline).toDateString()}
          </span>
        </p>

        <a
          href={opportunity.applyLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default OpportunityDetail;
