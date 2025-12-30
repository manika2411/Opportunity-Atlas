const OpportunityCard = ({ opportunity }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-6">
      
      <h3 className="text-xl font-semibold text-slate-900 mb-1">
        {opportunity.title}
      </h3>

      <p className="text-sm text-blue-600 font-medium mb-2">
        {opportunity.type} • {opportunity.location}
      </p>

      <p className="text-slate-600 text-sm mb-4">
        {opportunity.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-500">
          Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
        </span>

        <button className="text-blue-600 font-medium hover:underline">
          View →
        </button>
      </div>
    </div>
  );
};

export default OpportunityCard;
