// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default in the form
    document.getElementById('date').valueAsDate = new Date();
    
    // Initialize all modules
    initializeCharts();
    initializeTransactionHandlers();
    initializeFilterButtons();
});

// Utility functions
const BudgetTracker = {
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    },
    
    formatPercentage: (value) => {
        return `${value}%`;
    },
    
    calculateProgress: (current, target) => {
        return Math.min((current / target) * 100, 100);
    },
    
    updateBalance: (newBalance) => {
        const balanceElement = document.querySelector('.balance-amount');
        balanceElement.textContent = BudgetTracker.formatCurrency(newBalance);
    }
};