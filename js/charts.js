// Chart initialization and management
let spendingChart;

function initializeCharts() {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    
    spendingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Expenses',
                data: [850, 1200, 950, 1050],
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#EF4444',
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: true,
                tension: 0.3
            }, {
                label: 'Income',
                data: [3000, 3200, 2800, 3500],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#10B981',
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

function updateChartData(period) {
    const data = {
        week: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            expenses: [120, 85, 150, 200, 95, 180, 75],
            income: [0, 0, 0, 0, 3000, 0, 0]
        },
        month: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            expenses: [850, 1200, 950, 1050],
            income: [3000, 3200, 2800, 3500]
        },
        year: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            expenses: [8500, 9200, 8800, 9500],
            income: [35000, 38000, 36000, 42000]
        }
    };

    const selectedData = data[period];
    spendingChart.data.labels = selectedData.labels;
    spendingChart.data.datasets[0].data = selectedData.expenses;
    spendingChart.data.datasets[1].data = selectedData.income;
    spendingChart.update();
}

function initializeFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const period = this.getAttribute('data-period');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update chart data
            updateChartData(period);
        });
    });
}