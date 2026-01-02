const Filters = ({ onChange }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-8 flex flex-wrap gap-4">

      <select
        className="bg-slate-950 text-slate-200 border border-slate-700 rounded px-3 py-2"
        onChange={(e) => onChange("type", e.target.value)}
      >
        <option value="">All Types</option>
        <option value="internship">Internship</option>
        <option value="job">Job</option>
        <option value="scholarship">Scholarship</option>
      </select>

      <select
        className="bg-slate-950 text-slate-200 border border-slate-700 rounded px-3 py-2"
        onChange={(e) => onChange("location", e.target.value)}
      >
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
      </select>

      <select
        className="bg-slate-950 text-slate-200 border border-slate-700 rounded px-3 py-2"
        onChange={(e) => onChange("sort", e.target.value)}
      >
        <option value="">Default</option>
        <option value="deadline">Nearest Deadline</option>
        <option value="recent">Recently Added</option>
      </select>

    </div>
  );
};

export default Filters;
