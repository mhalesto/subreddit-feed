import './SortByComponent.css';
interface ISortByProps {
  sortBy: string,
  handleSortBy(sortBy: React.ChangeEvent<HTMLSelectElement>): void
}

const SortByComponent = ({ sortBy, handleSortBy }: ISortByProps) => {
  return (
    <div className="select right" data-testid="sort-by-wrapper">
      <select value={sortBy} onChange={handleSortBy}>
        <option value="hot" data-testid="sort-by-hot">Hot</option>
        <option value="new" data-testid="sort-by-new">New</option>
        <option value="top" data-testid="sort-by-top">Top</option>
      </select>
    </div>
  );
}

export default SortByComponent