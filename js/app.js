document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('date').valueAsDate = new Date();
    initializeCharts();
    initializeTransactionHandlers();
    initializeFilterButtons();
});

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