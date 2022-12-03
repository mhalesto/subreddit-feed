import './SortByComponent.css';
interface ISortByProps {
  sortBy: string,
  handleSortBy(sortBy: React.ChangeEvent<HTMLSelectElement>): void
}

const SortByComponent = ({ sortBy, handleSortBy }: ISortByProps) => {
  return (
    <div className="select right">
      <select value={sortBy} onChange={handleSortBy}>
        <option value="hot">Hot</option>
        <option value="new">New</option>
        <option value="top">Top</option>
      </select>
    </div>
  );
}

export default SortByComponent