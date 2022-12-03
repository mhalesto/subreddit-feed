
interface ISearchBarComponentProps {
  searchTerm: string,
  onSearchChange(searchText?: React.ChangeEvent<HTMLInputElement>): any
}

const SearchBarComponent = ({ searchTerm, onSearchChange } : ISearchBarComponentProps) => {
  return (
    <div>
      <input className="subreddit_input" value={searchTerm} onChange={onSearchChange} />
    </div>
  )
}

export default SearchBarComponent;
