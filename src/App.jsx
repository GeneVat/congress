import React, { useState, useEffect } from 'react';
import { fetchBills } from './congress-api';
import * as billsData from './bills-data';
import './App.css';

function App() {
  const [bills, setBills] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterChips, setFilterChips] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [showIntroduced, setShowIntroduced] = useState(false); // For toggling "Introduced" tags
  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(20); // Number of bills to show per page
  const steps = billsData.getSteps();

  // Hardwired tags that should not show up or be selectable
  const excludedTags = ['Pinned']; // Add tags that should be hidden here

  useEffect(() => {
    const getBills = async () => {
      await fetchBills();
      setBills(billsData.getBills());

      // Extract all unique tags from the bills, excluding hardwired tags
      const allTags = billsData.getBills().reduce((acc, bill) => {
        bill.tags.forEach(tag => {
          if (!acc.includes(tag) && !excludedTags.includes(tag)) {
            acc.push(tag);
          }
        });
        return acc;
      }, []);
      setAvailableTags(allTags);
    };

    getBills();
  }, []);

  const handleChipClick = (chip) => {
    if (filterChips.includes(chip)) {
      setFilterChips(filterChips.filter((c) => c !== chip));
    } else {
      setFilterChips([...filterChips, chip]);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Updated filter logic to ensure all filters must be met
  const filteredBills = bills.filter((bill) => {
    const matchesSearchTerm = bill.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      bill.summary.toLowerCase().includes(searchInput.toLowerCase());

    // Check if bill has all selected filter tags
    const matchesFilters = filterChips.length === 0 || filterChips.every(chip => bill.tags.includes(chip));

    // Ensure pinned bills are always shown, even if Introduced is hidden
    const matchesIntroducedTag = (showIntroduced || !bill.tags.includes('Introduced')) || bill.tags.includes('Pinned');

    return matchesSearchTerm && matchesFilters && matchesIntroducedTag;
  });

  const getFilteredSuggestions = () => {
    const inputValue = searchInput.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : availableTags.filter(
      (filter) => filter.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const filteredSuggestions = getFilteredSuggestions();

  const handleSuggestionClick = (suggestion) => {
    if (!filterChips.includes(suggestion)) {
      setFilterChips([...filterChips, suggestion]);
    }
    setSearchInput('');
  };

  // Sort the bills such that pinned ones are at the top
  // Pinned bills are still at the top but now we sort by the `steps` order for all bills
  const sortedBills = filteredBills.sort((a, b) => {
    const aIsPinned = a.tags.includes('Pinned');
    const bIsPinned = b.tags.includes('Pinned');
    if (aIsPinned && !bIsPinned) {
      return -1; // Pinned bills come first
    } else if (!aIsPinned && bIsPinned) {
      return 1; // Pinned bills come first
    }

    // If both are pinned or both are not pinned, compare by step
    const stepIndexA = steps.indexOf(a.currentStep);
    const stepIndexB = steps.indexOf(b.currentStep);
    return stepIndexB - stepIndexA; // Sort by step in reverse order (farther along in process comes first)
  });

  const toggleIntroduced = () => setShowIntroduced(!showIntroduced);

  // Pagination logic
  const indexOfLastBill = currentPage * billsPerPage;
  const indexOfFirstBill = indexOfLastBill - billsPerPage;
  const currentBills = sortedBills.slice(indexOfFirstBill, indexOfLastBill);

  const totalPages = Math.ceil(filteredBills.length / billsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="app-container dark-mode">
      <header>
        <h1>Bills in Congress</h1>
      </header>

      <main>
        {/* Combined Search and Filter Autocomplete */}
        <div className="autocomplete">
          <input
            type="text"
            placeholder="Search bills or filter by Tags..."
            value={searchInput}
            onChange={handleInputChange}
            className="search-filter-input"
          />
          {filteredSuggestions.length > 0 && (
            <ul className="autocomplete-list">
              {filteredSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="autocomplete-item"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
  {/* Display Available Tags at the Top */}            <div className="available-tags">           <strong>Available Tags:</strong>           {availableTags.length > 0 && (             <div className="tags">               {availableTags.map((tag, index) => (                 <span                   key={index}                   className={`tag tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}                   onClick={() => handleChipClick(tag)}                 >                   {tag}                 </span>               ))}             </div>           )}         </div>
        {/* Filter Chips */}
        <div className="filter-chips">
          {filterChips.map((chip) => (
            <span
              key={chip}
              className={`chip active`}
              onClick={() => handleChipClick(chip)}
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Toggle Button for Showing "Introduced" Tags */}
        <button onClick={toggleIntroduced} className="toggle-button">
          {showIntroduced ? 'Hide "Introduced" Bills' : 'Show "Introduced" Bills'}
        </button>

        <section className="bills-list">
          <ul>
            {currentBills.map((bill) => (
              <li key={bill.bill_id}>
                <article>
                  <strong>{bill.title}</strong>
                  <p>{bill.summary}</p>
                  <p>Party Support: {bill.partySupport}</p>

                  {/* Tags Display */}
                  <div className="tags">
                    {bill.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`tag tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="tracker">
                    {steps.map((step, index) => (
                      <div key={index} className={`step ${bill.currentStep === step ? 'active' : steps.indexOf(bill.currentStep) > index ? 'completed' : ''}`}>
                        {step}
                      </div>
                    ))}
                  </div>
                  <a href={bill.govtrack_url} target="_blank" rel="noopener noreferrer">
                    More Info
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default App;
