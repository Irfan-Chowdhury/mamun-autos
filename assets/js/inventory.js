/**
 * Mamun Autos - Premium Multi-Brand Car Showroom
 * Inventory Listing & Live Filter Engine (inventory.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('inventoryListing')) return;

  const state = {
    allCars: window.CarService ? window.CarService.getAllCars() : [],
    filteredCars: [],
    currentPage: 1,
    perPage: 9,
    currentSort: 'newest',
    filters: {
      searchQuery: '',
      brand: 'all',
      category: 'all',
      maxPrice: 200000,
      year: 'all',
      fuelType: 'all',
      transmission: 'all'
    }
  };

  // Cache DOM elements
  const elements = {
    listingContainer: document.getElementById('inventoryListing'),
    resultsCount: document.getElementById('resultsCount'),
    totalCount: document.getElementById('totalCount'),
    activeFiltersContainer: document.getElementById('activeFiltersList'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    loadMoreWrap: document.getElementById('loadMoreWrap'),
    searchInput: document.getElementById('inventorySearch'),
    brandFilter: document.getElementById('filterBrand'),
    categoryFilter: document.getElementById('filterCategory'),
    priceRange: document.getElementById('filterPriceRange'),
    priceDisplay: document.getElementById('filterPriceValue'),
    yearFilter: document.getElementById('filterYear'),
    fuelFilter: document.getElementById('filterFuel'),
    transmissionFilter: document.getElementById('filterTransmission'),
    sortSelect: document.getElementById('sortSelect'),
    resetBtn: document.getElementById('resetFiltersBtn'),
    resetBtnMobile: document.getElementById('resetFiltersBtnMobile')
  };

  // Init state from URL params
  function readUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('brand')) state.filters.brand = urlParams.get('brand');
    if (urlParams.has('category')) state.filters.category = urlParams.get('category');
    if (urlParams.has('maxPrice')) state.filters.maxPrice = parseInt(urlParams.get('maxPrice'), 10);
    if (urlParams.has('fuel')) state.filters.fuelType = urlParams.get('fuel');
    if (urlParams.has('q')) state.filters.searchQuery = urlParams.get('q');
    
    // Sync input values to match URL state
    if (elements.searchInput && state.filters.searchQuery) elements.searchInput.value = state.filters.searchQuery;
    if (elements.brandFilter && state.filters.brand) elements.brandFilter.value = state.filters.brand;
    if (elements.categoryFilter && state.filters.category) elements.categoryFilter.value = state.filters.category;
    if (elements.priceRange && state.filters.maxPrice) {
      elements.priceRange.value = state.filters.maxPrice;
      if (elements.priceDisplay) elements.priceDisplay.textContent = `$${state.filters.maxPrice.toLocaleString()}`;
    }
  }

  // Populate dynamic select options
  function populateFilterOptions() {
    if (elements.brandFilter && window.CarService) {
      const brands = window.CarService.getAllBrands();
      brands.forEach(b => {
        const option = document.createElement('option');
        option.value = b.name;
        option.textContent = `${b.name} (${b.count})`;
        elements.brandFilter.appendChild(option);
      });
      if (state.filters.brand !== 'all') {
        elements.brandFilter.value = state.filters.brand;
      }
    }

    if (elements.categoryFilter && window.CarService) {
      const categories = window.CarService.getAllCategories();
      categories.forEach(c => {
        const option = document.createElement('option');
        option.value = c.name;
        option.textContent = `${c.name} (${c.count})`;
        elements.categoryFilter.appendChild(option);
      });
      if (state.filters.category !== 'all') {
        elements.categoryFilter.value = state.filters.category;
      }
    }
  }

  // Filter application
  function applyFilters() {
    state.filteredCars = state.allCars.filter(car => {
      // Keyword match
      if (state.filters.searchQuery.trim() !== '') {
        const query = state.filters.searchQuery.toLowerCase().trim();
        const haystack = `${car.brand} ${car.model} ${car.category} ${car.fuelType} ${car.exteriorColor} ${car.engine}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      // Brand match
      if (state.filters.brand !== 'all' && car.brand.toLowerCase() !== state.filters.brand.toLowerCase()) {
        return false;
      }

      // Category match
      if (state.filters.category !== 'all' && car.category.toLowerCase() !== state.filters.category.toLowerCase() && car.bodyType.toLowerCase() !== state.filters.category.toLowerCase()) {
        return false;
      }

      // Price match
      if (car.price > state.filters.maxPrice) {
        return false;
      }

      // Year match
      if (state.filters.year !== 'all') {
        const minYear = parseInt(state.filters.year, 10);
        if (car.year < minYear) return false;
      }

      // Fuel match
      if (state.filters.fuelType !== 'all') {
        if (!car.fuelType.toLowerCase().includes(state.filters.fuelType.toLowerCase())) return false;
      }

      // Transmission match
      if (state.filters.transmission !== 'all') {
        if (car.transmission.toLowerCase() !== state.filters.transmission.toLowerCase()) return false;
      }

      return true;
    });

    // Apply Sorting
    sortCars();

    // Reset pagination to first page
    state.currentPage = 1;

    // Render results
    renderInventory();
    renderActiveFilterPills();
  }

  // Sort logic
  function sortCars() {
    switch (state.currentSort) {
      case 'price-asc':
        state.filteredCars.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        state.filteredCars.sort((a, b) => b.price - a.price);
        break;
      case 'oldest':
        state.filteredCars.sort((a, b) => a.year - b.year);
        break;
      case 'mileage-asc':
        state.filteredCars.sort((a, b) => a.mileage - b.mileage);
        break;
      case 'newest':
      default:
        state.filteredCars.sort((a, b) => b.year - a.year || b.price - a.price);
        break;
    }
  }

  // Render car cards in listing container
  function renderInventory() {
    const total = state.filteredCars.length;
    const carsToShow = state.filteredCars.slice(0, state.currentPage * state.perPage);

    if (elements.resultsCount) elements.resultsCount.textContent = carsToShow.length;
    if (elements.totalCount) elements.totalCount.textContent = total;

    if (total === 0) {
      elements.listingContainer.innerHTML = `
        <div class="col-12 py-5 text-center">
          <div class="card p-5 border-0 shadow-sm rounded-4 text-center">
            <div class="mb-3">
              <i class="fa-solid fa-car-tunnel text-gold" style="font-size: 3.5rem;"></i>
            </div>
            <h4 class="fw-bold mb-2">No Matching Vehicles Found</h4>
            <p class="text-muted mb-4">We couldn't find any vehicles matching your selected criteria. Try adjusting or clearing your filters.</p>
            <div>
              <button class="btn btn-gold" id="emptyResetBtn">
                <i class="fa-solid fa-rotate-left me-2"></i> Reset All Filters
              </button>
            </div>
          </div>
        </div>
      `;
      const emptyResetBtn = document.getElementById('emptyResetBtn');
      if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

      if (elements.loadMoreWrap) elements.loadMoreWrap.style.display = 'none';
      return;
    }

    // Generate Cards
    const cardsHtml = carsToShow.map(car => window.CarService.createCarCardHTML(car)).join('');
    elements.listingContainer.innerHTML = cardsHtml;

    // Manage Load More Button visibility
    if (elements.loadMoreWrap) {
      if (carsToShow.length < total) {
        elements.loadMoreWrap.style.display = 'block';
      } else {
        elements.loadMoreWrap.style.display = 'none';
      }
    }
  }

  // Render Active Filter Chips
  function renderActiveFilterPills() {
    if (!elements.activeFiltersContainer) return;

    const pills = [];

    if (state.filters.searchQuery.trim() !== '') {
      pills.push({ key: 'searchQuery', label: `Search: "${state.filters.searchQuery}"` });
    }
    if (state.filters.brand !== 'all') {
      pills.push({ key: 'brand', label: `Brand: ${state.filters.brand}` });
    }
    if (state.filters.category !== 'all') {
      pills.push({ key: 'category', label: `Category: ${state.filters.category}` });
    }
    if (state.filters.maxPrice < 200000) {
      pills.push({ key: 'maxPrice', label: `Max: $${state.filters.maxPrice.toLocaleString()}` });
    }
    if (state.filters.year !== 'all') {
      pills.push({ key: 'year', label: `Year: ${state.filters.year}+` });
    }
    if (state.filters.fuelType !== 'all') {
      pills.push({ key: 'fuelType', label: `Fuel: ${state.filters.fuelType}` });
    }
    if (state.filters.transmission !== 'all') {
      pills.push({ key: 'transmission', label: `Trans: ${state.filters.transmission}` });
    }

    if (pills.length === 0) {
      elements.activeFiltersContainer.innerHTML = '';
      return;
    }

    elements.activeFiltersContainer.innerHTML = pills.map(p => `
      <span class="active-filter-pill">
        ${p.label}
        <button type="button" class="btn-close-pill ms-1" data-key="${p.key}" aria-label="Remove filter">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </span>
    `).join('') + `
      <button type="button" class="btn btn-sm btn-link text-decoration-none text-muted ps-2" id="clearAllPillsBtn">
        Clear All
      </button>
    `;

    // Bind remove button handlers
    elements.activeFiltersContainer.querySelectorAll('.btn-close-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-key');
        if (key === 'searchQuery') {
          state.filters.searchQuery = '';
          if (elements.searchInput) elements.searchInput.value = '';
        } else if (key === 'maxPrice') {
          state.filters.maxPrice = 200000;
          if (elements.priceRange) elements.priceRange.value = 200000;
          if (elements.priceDisplay) elements.priceDisplay.textContent = '$200,000';
        } else {
          state.filters[key] = 'all';
          const inputMap = {
            brand: elements.brandFilter,
            category: elements.categoryFilter,
            year: elements.yearFilter,
            fuelType: elements.fuelFilter,
            transmission: elements.transmissionFilter
          };
          if (inputMap[key]) inputMap[key].value = 'all';
        }
        applyFilters();
      });
    });

    const clearAllBtn = document.getElementById('clearAllPillsBtn');
    if (clearAllBtn) clearAllBtn.addEventListener('click', resetAllFilters);
  }

  // Reset all filters to default
  function resetAllFilters() {
    state.filters = {
      searchQuery: '',
      brand: 'all',
      category: 'all',
      maxPrice: 200000,
      year: 'all',
      fuelType: 'all',
      transmission: 'all'
    };

    if (elements.searchInput) elements.searchInput.value = '';
    if (elements.brandFilter) elements.brandFilter.value = 'all';
    if (elements.categoryFilter) elements.categoryFilter.value = 'all';
    if (elements.yearFilter) elements.yearFilter.value = 'all';
    if (elements.fuelFilter) elements.fuelFilter.value = 'all';
    if (elements.transmissionFilter) elements.transmissionFilter.value = 'all';
    if (elements.priceRange) elements.priceRange.value = 200000;
    if (elements.priceDisplay) elements.priceDisplay.textContent = '$200,000';
    if (elements.sortSelect) elements.sortSelect.value = 'newest';
    state.currentSort = 'newest';

    applyFilters();
  }

  // Event Listeners
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.filters.searchQuery = e.target.value;
      applyFilters();
    });
  }

  if (elements.brandFilter) {
    elements.brandFilter.addEventListener('change', (e) => {
      state.filters.brand = e.target.value;
      applyFilters();
    });
  }

  if (elements.categoryFilter) {
    elements.categoryFilter.addEventListener('change', (e) => {
      state.filters.category = e.target.value;
      applyFilters();
    });
  }

  if (elements.priceRange) {
    elements.priceRange.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      state.filters.maxPrice = val;
      if (elements.priceDisplay) elements.priceDisplay.textContent = `$${val.toLocaleString()}`;
      applyFilters();
    });
  }

  if (elements.yearFilter) {
    elements.yearFilter.addEventListener('change', (e) => {
      state.filters.year = e.target.value;
      applyFilters();
    });
  }

  if (elements.fuelFilter) {
    elements.fuelFilter.addEventListener('change', (e) => {
      state.filters.fuelType = e.target.value;
      applyFilters();
    });
  }

  if (elements.transmissionFilter) {
    elements.transmissionFilter.addEventListener('change', (e) => {
      state.filters.transmission = e.target.value;
      applyFilters();
    });
  }

  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.currentSort = e.target.value;
      sortCars();
      renderInventory();
    });
  }

  if (elements.loadMoreBtn) {
    elements.loadMoreBtn.addEventListener('click', () => {
      state.currentPage++;
      renderInventory();
    });
  }

  if (elements.resetBtn) elements.resetBtn.addEventListener('click', resetAllFilters);
  if (elements.resetBtnMobile) elements.resetBtnMobile.addEventListener('click', resetAllFilters);

  // Initialize
  populateFilterOptions();
  readUrlParams();
  applyFilters();
});
