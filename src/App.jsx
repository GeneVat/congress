import React, { useState, useEffect } from 'react';
import * as billsData from './bills-data';
import './App.css';

function App() {
  const [bills, setBills] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterChips, setFilterChips] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(20);
  const [visibleBillDetails, setVisibleBillDetails] = useState(null);
  const steps = billsData.getSteps();

  const excludedTags = ['Pinned'];

  useEffect(() => {
    const getBills = async () => {
      const billsList = billsData.getBills();

      const sanitizedBills = billsList.map(bill => ({
        ...bill,
        summary: sanitizeHtml(bill.summary),
      }));

      const uniqueBills = sanitizedBills.filter((value, index, self) =>
        index === self.findIndex((t) => t.title === value.title)
      );

      setBills(uniqueBills);

      const allTags = uniqueBills.reduce((acc, bill) => {
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

  const sanitizeHtml = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };

  const handleChipClick = (chip) => {
    setFilterChips((prevChips) =>
      prevChips.includes(chip)
        ? prevChips.filter((c) => c !== chip)
        : [...prevChips, chip]
    );
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredBills = bills.filter((bill) => {
    const matchesSearchTerm = bill.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      bill.summary.toLowerCase().includes(searchInput.toLowerCase());
    
    const matchesTags = filterChips.every((chip) => bill.tags.includes(chip));

    return matchesSearchTerm && matchesTags;
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

  const sortedBills = filteredBills.sort((a, b) => {
    const aIsPinned = a.tags.includes('Pinned');
    const bIsPinned = b.tags.includes('Pinned');
    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;

    const stepIndexA = steps.indexOf(a.currentStep);
    const stepIndexB = steps.indexOf(b.currentStep);
    return stepIndexB - stepIndexA;
  });

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

  const toggleDetailsVisibility = (billId) => {
    if (visibleBillDetails === billId) {
      setVisibleBillDetails(null); // If clicked again, hide it
    } else {
      setVisibleBillDetails(billId); // Show the details for this bill
    }
  };

  return (
    <div className="app-container dark-mode">
      <header>
        <h1>Congress Bills</h1>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </header>

      <main>
        {/* Search input */}
        <div className="autocomplete">
          <input
            type="text"
            placeholder="Search bills"
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

        {/* Available tags */}
        <div className="available-tags">
          <strong>Filter tags:</strong>
          {availableTags.length > 0 && (
            <div className="tags">
              {availableTags.map((tag, index) => (
                <span
                  key={index}
                  className={`tag tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleChipClick(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Filter chips */}
        <div className="filter-chips">
          <strong>Filters:</strong>
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

        {/* Bill list */}
        <section className="bills-list">
          <ul>
            {currentBills.map((bill) => (
              <li key={bill.bill_id}>
                <article>
                  <strong>{bill.title}</strong>

                  <div className="bill-summary">{bill.summary}</div>

                  <p
                    className={`party-support ${bill.partySupport === 'Democratic' ? 'democrat' : 
                      bill.partySupport === 'Republican' ? 'republican' : 'other'}`}
                  >
                    Party Support: {bill.partySupport}
                  </p>

                  {/* Toggle Button */}
                  <button onClick={() => toggleDetailsVisibility(bill.bill_id)}>
                    {visibleBillDetails === bill.bill_id ? 'Hide Details' : 'Show Details'}
                  </button>

                  {/* Hidden Details Section with Animation */}
                  <div
                    className={`bill-details ${visibleBillDetails === bill.bill_id ? 'show' : ''}`}
                  >
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
                        <div
                          key={index}
                          className={`step ${bill.currentStep === step ? 'active' : steps.indexOf(bill.currentStep) > index ? 'completed' : ''}`}
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                    <a href={bill.govtrack_url} target="_blank" rel="noopener noreferrer">
                      Link to Bill's Page
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
