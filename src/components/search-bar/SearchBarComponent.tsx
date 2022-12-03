import './SearchBarComponent.css';

interface ISearchBarComponentProps {
  searchTerm: string,
  onSearchChange(searchText?: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBarComponent = ({ searchTerm, onSearchChange } : ISearchBarComponentProps) => {
  return (
    <div className='search-bar-wrapper'>
      <input className="subreddit_input" value={searchTerm} onChange={onSearchChange} />
    </div>
  )
}

export default SearchBarComponent;