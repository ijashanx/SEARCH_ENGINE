document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    const historyList = document.getElementById('historyList');

    // Load search history from localStorage
    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        historyList.innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    };

    // Save search query to localStorage
    const saveSearchQuery = (query) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(history));
        loadHistory();
    };

    // Add search functionality
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            saveSearchQuery(query);
            searchInput.value = '';  // Clear the input after search
        }
    });

    // Clear search history
    clearBtn.addEventListener('click', () => {
        localStorage.removeItem('searchHistory');
        loadHistory();
    });

    // Load history when page loads
    loadHistory();
});
