// Transaction management functionality
function initializeTransactionHandlers() {
    const modal = document.getElementById('transactionModal');
    const addBtn = document.getElementById('addTransactionBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('transactionForm');

    // Open modal
    addBtn.addEventListener('click', openModal);

    // Close modal
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Form submission
    form.addEventListener('submit', handleFormSubmit);
}

function openModal() {
    document.getElementById('transactionModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('transactionModal').style.display = 'none';
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        type: document.getElementById('type').value,
        amount: parseFloat(document.getElementById('amount').value),
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        date: document.getElementById('date').value
    };
    
    // Validate form data
    if (!validateFormData(formData)) {
        return;
    }
    
    // Process transaction (in a real app, this would send to backend)
    processTransaction(formData);
    
    // Reset form and close modal
    this.reset();
    document.getElementById('date').valueAsDate = new Date();
    closeModal();
}

function validateFormData(data) {
    if (!data.type) {
        alert('Please select a transaction type');
        return false;
    }
    
    if (!data.amount || data.amount <= 0) {
        alert('Please enter a valid amount');
        return false;
    }
    
    if (!data.category) {
        alert('Please select a category');
        return false;
    }
    
    if (!data.date) {
        alert('Please select a date');
        return false;
    }
    
    return true;
}

function processTransaction(transaction) {
    console.log('Processing transaction:', transaction);
    
    // Here you would typically:
    // 1. Send to backend API
    // 2. Update local storage
    // 3. Refresh dashboard data
    
    // For demo purposes, just show a success message
    alert(`Successfully added ${transaction.type}: $${transaction.amount} for ${transaction.category}`);
    
    // In a real application, you would update the dashboard here
    // updateDashboardWithNewTransaction(transaction);
}