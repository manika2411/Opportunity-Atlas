import { useNavigate } from "react-router-dom";

const OpportunitiesList = ({ opportunities }) => {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {opportunities.map((op) => (
        <div
          key={op._id}
          onClick={() => navigate(`/opportunities/${op._id}`)}
          className="cursor-pointer bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition"
        >
          <h3 className="text-xl font-semibold text-white">
            {op.title}
          </h3>
          <p className="text-slate-400 mt-2">{op.organisation}</p>
          <p className="text-indigo-400 mt-3">{op.type}</p>
        </div>
      ))}
    </div>
  );
};

export default OpportunitiesList;
