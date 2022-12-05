import './SearchBarComponent.css';

interface ISearchBarComponentProps {
  searchTerm: string,
  onSearchChange(searchText?: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBarComponent = ({ searchTerm, onSearchChange } : ISearchBarComponentProps) => {
  return (
    <div className='search-bar-wrapper' data-testid="search-bar-wrapper">
      <input className="subreddit_input" value={searchTerm} onChange={onSearchChange} data-testid="search-input" />
    </div>
  )
}

export default SearchBarComponent;