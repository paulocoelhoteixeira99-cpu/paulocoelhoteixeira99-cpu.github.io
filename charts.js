// ===== CHART.JS GLOBAL CONFIG =====
Chart.defaults.color = '#8b8f9a';
Chart.defaults.borderColor = 'rgba(30, 35, 48, 0.6)';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 8;
Chart.defaults.plugins.legend.labels.padding = 16;
Chart.defaults.plugins.tooltip.backgroundColor = '#161a24';
Chart.defaults.plugins.tooltip.borderColor = '#1e2330';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.titleFont = { weight: '600' };

const MONTHS = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
const BLUE = '#4f8eff';
const BLUE_DIM = 'rgba(79, 142, 255, 0.15)';
const GREEN = '#34d399';
const GREEN_DIM = 'rgba(52, 211, 153, 0.15)';
const ORANGE = '#f59e0b';
const ORANGE_DIM = 'rgba(245, 158, 11, 0.15)';
const PURPLE = '#a78bfa';
const PURPLE_DIM = 'rgba(167, 139, 250, 0.15)';
const RED = '#f87171';
const RED_DIM = 'rgba(248, 113, 113, 0.15)';
const CYAN = '#22d3ee';

// ===== 1. SMS Dispatches vs Clicks =====
new Chart(document.getElementById('chartDispatches'), {
  type: 'bar',
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: 'SMS Dispatched',
        data: [601, 45828, 27931, 43193, 14942, 4254, 34615, 12020],
        backgroundColor: BLUE,
        borderRadius: 4,
        barPercentage: 0.7,
        order: 2
      },
      {
        label: 'Unique Clicks',
        data: [103, 3323, 3189, 3936, 1141, 467, 2384, 1080],
        backgroundColor: GREEN,
        borderRadius: 4,
        barPercentage: 0.7,
        order: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(30, 35, 48, 0.4)' },
        ticks: {
          callback: v => v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v
        }
      },
      x: { grid: { display: false } }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toLocaleString()
        }
      }
    }
  }
});

// ===== 2. CTR Line Chart =====
new Chart(document.getElementById('chartCTR'), {
  type: 'line',
  data: {
    labels: MONTHS,
    datasets: [{
      label: 'CTR %',
      data: [17.1, 7.3, 11.4, 9.1, 7.6, 11.0, 6.9, 9.0],
      borderColor: GREEN,
      backgroundColor: GREEN_DIM,
      fill: true,
      tension: 0.35,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: GREEN,
      pointBorderColor: '#0b0d10',
      pointBorderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        grid: { color: 'rgba(30, 35, 48, 0.4)' },
        ticks: { callback: v => v + '%' }
      },
      x: { grid: { display: false } }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => 'CTR: ' + ctx.parsed.y.toFixed(1) + '%'
        }
      }
    }
  }
});

// ===== 3. VSL Engagement Funnel (Stacked Bar) =====
new Chart(document.getElementById('chartVSL'), {
  type: 'bar',
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: 'Play',
        data: [47, 1866, 1233, 2143, 669, 1655, 2228, 567],
        backgroundColor: BLUE
      },
      {
        label: 'Lead View (25%)',
        data: [28, 1065, 594, 745, 184, 500, 1094, 218],
        backgroundColor: PURPLE
      },
      {
        label: 'Medium (50%)',
        data: [19, 744, 354, 358, 93, 343, 728, 109],
        backgroundColor: ORANGE
      },
      {
        label: 'Pitch View',
        data: [11, 559, 261, 241, 75, 270, 485, 71],
        backgroundColor: GREEN
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        grid: { color: 'rgba(30, 35, 48, 0.4)' },
        ticks: {
          callback: v => v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v
        }
      },
      x: { stacked: true, grid: { display: false } }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y.toLocaleString()
        }
      }
    }
  }
});

// ===== 4. Sales & Revenue =====
const salesMonths = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
new Chart(document.getElementById('chartSales'), {
  type: 'bar',
  data: {
    labels: salesMonths,
    datasets: [
      {
        label: 'Sales',
        data: [41, 7, 11, 5, 14, 23],
        backgroundColor: BLUE,
        borderRadius: 4,
        yAxisID: 'y',
        order: 2
      },
      {
        label: 'Revenue ($)',
        data: [8600, 1540, 2420, 156, 294, 2372],
        type: 'line',
        borderColor: GREEN,
        backgroundColor: GREEN_DIM,
        fill: true,
        tension: 0.35,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: GREEN,
        pointBorderColor: '#0b0d10',
        pointBorderWidth: 2,
        yAxisID: 'y1',
        order: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    scales: {
      y: {
        beginAtZero: true,
        position: 'left',
        grid: { color: 'rgba(30, 35, 48, 0.4)' },
        title: { display: true, text: 'Sales', color: '#8b8f9a' }
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        grid: { drawOnChartArea: false },
        title: { display: true, text: 'Revenue ($)', color: '#8b8f9a' },
        ticks: {
          callback: v => '$' + (v >= 1000 ? (v / 1000).toFixed(1) + 'K' : v)
        }
      },
      x: { grid: { display: false } }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => {
            if (ctx.dataset.label === 'Revenue ($)')
              return 'Revenue: $' + ctx.parsed.y.toLocaleString();
            return ctx.dataset.label + ': ' + ctx.parsed.y;
          }
        }
      }
    }
  }
});

// ===== 5. Cumulative Lead Growth =====
const growthLabels = [
  'Q1-Q3 2022', 'Q4 2022', 'H1 2023', 'H2 2023',
  'H1 2024', 'H2 2024', 'H1 2025', 'H2 2025',
  'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26', 'May 26',
  'Jun 26', 'Jul 26', 'Aug 26', 'Sep 26'
];

// Pre-computed cumulative totals
const cumulativeData = [
  504, 2079, 4947, 9169,
  10940, 11750, 14623, 18381,
  71430, 114645, 137831, 142672, 143189,
  157879, 161876, 166588, 166912
];

new Chart(document.getElementById('chartLeadGrowth'), {
  type: 'line',
  data: {
    labels: growthLabels,
    datasets: [{
      label: 'Total Leads',
      data: cumulativeData,
      borderColor: BLUE,
      backgroundColor: BLUE_DIM,
      fill: true,
      tension: 0.3,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: BLUE,
      pointBorderColor: '#0b0d10',
      pointBorderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(30, 35, 48, 0.4)' },
        ticks: {
          callback: v => v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v
        }
      },
      x: {
        grid: { display: false },
        ticks: { maxRotation: 45 }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => 'Total Leads: ' + ctx.parsed.y.toLocaleString()
        }
      }
    }
  }
});

// ===== 6. Lead Score Distribution (Doughnut) =====
new Chart(document.getElementById('chartScoreDist'), {
  type: 'doughnut',
  data: {
    labels: ['Hot (90-100)', 'Warm (70-89)', 'Engaged (45-69)', 'Cold (20-44)', 'Inactive (1-19)', 'Blacklist (0)'],
    datasets: [{
      data: [59776, 21476, 9612, 44738, 5576, 28354],
      backgroundColor: [GREEN, BLUE, PURPLE, ORANGE, '#6b7280', RED],
      borderColor: '#161a24',
      borderWidth: 3,
      hoverOffset: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { padding: 12, font: { size: 11 } }
      },
      tooltip: {
        callbacks: {
          label: ctx => {
            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
            const pct = ((ctx.parsed / total) * 100).toFixed(1);
            return ctx.label + ': ' + ctx.parsed.toLocaleString() + ' (' + pct + '%)';
          }
        }
      }
    }
  }
});
