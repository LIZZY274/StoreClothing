
export default function FilterRadio({ id, label, value, filterName }) {
  return (
    <div className="flex flex-row gap-1">
      <input
        className="cursor-pointer"
        type="radio"
        id={id}
        name={filterName}
        onChange={(e) => handleChangeFilter(filterName, value)}
        value={value}
        checked={filters[filterName] === value}
      />
      <span>{label}</span>
    </div>
  );
}


