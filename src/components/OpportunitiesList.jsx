import OpportunityCard from "./OpportunityCard";

const OpportunitiesList = ({ opportunities }) => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Available Opportunities
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map(op => (
            <OpportunityCard key={op._id} opportunity={op} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OpportunitiesList;
