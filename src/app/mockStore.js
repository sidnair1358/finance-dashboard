const mockStore = {
  mrr: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Gross MRR",
        data: [12, 19, 15, 22, 18, 24, 30],
        borderColor: "#636AE8",
        backgroundColor: "rgba(99, 106, 232, 0.2)",
        tension: 0.3,
        fill: "origin",
      },
      {
        label: "Net MRR",
        data: [10, 16, 14, 18, 15, 22, 25],
        borderColor: "#4BC0C0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: "origin",
      },
    ],
  },
  budgetComparison: {
    labels: [
      "Rent",
      "Transportation",
      "Utilities",
      "Maintenance",
      "Ground Rent",
      "Broadband",
    ],

    datasets: [
      {
        label: "Budgeted",
        data: [1500, 600, 500, 300, 200, 1000],
        backgroundColor: "rgba(99, 106, 232, 0.7)",
        borderColor: "#636AE8",
        borderWidth: 1,
      },
      {
        label: "Actual",
        data: [1600, 550, 650, 280, 350, 900],
        backgroundColor: "rgba(232, 97, 140, 0.7)",
        borderColor: "#E8618C",
        borderWidth: 1,
      },
    ],
  },
  customerComparison: {
    labels: ["Wordsworth", "Tolstoy", "Hemingway", "Chekov", "Kipling"],

    datasets: [
      {
        label: "Total Sales",
        data: [1500, 900, 1200, 1300, 1200],
        backgroundColor: "rgba(99, 106, 232, 0.7)",
        borderColor: "#636AE8",
        borderWidth: 1,
      },
    ],
  },
  captialComparison: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Net Working Captial",
        data: [500, 420, 600, 710, 400, 550, 700],
        borderColor: "#636AE8",
        backgroundColor: "#D5D8FF",
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: "Gross Working Capital",
        data: [650, 590, 800, 810, 560, 650, 800],
        borderColor: "#E8618C",
        backgroundColor: "#FDDCE6",
        tension: 0.1,
        borderWidth: 2,
        borderDash: [5, 5],
      },
    ],
  },
  invoiceStatus: {
    labels: ["Paid", "Authorized", "Voided", "Deleted", "Draft"],
    datasets: [
      {
        data: [5500, 4800, 2200, 1500, 900],
        backgroundColor: [
          "#636AE8",
          "#E8618C",
          "#4BC0C0",
          "#FFCE56",
          "#9966FF",
        ],
        hoverOffset: 15,
      },
    ],
  },
  wageDistribution: {
    labels: ["Marketing", "Finance", "IT", "Branding", "Customer Services"],
    datasets: [
      {
        data: [700, 900, 1000, 700, 850],
        backgroundColor: [
          "#636AE8",
          "#E8618C",
          "#4BC0C0",
          "#FFCE56",
          "#9966FF",
        ],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  },
  financialHealth: {
    labels: ["Savings", "Investments", "Debt", "Income", "Expenses", "Credit"],
    datasets: [
      {
        data: [75, 60, 40, 85, 65, 90],
        backgroundColor: "rgba(99, 106, 232, 0.2)",
        borderColor: "#636AE8",
        borderWidth: 2,
      },
    ],
  },
  riskReturnAnalysis: {
    datasets: [
      {
        label: "Investment Portfolio",
        data: [
          { x: 2.1, y: 5.3, r: 10, sizeLabel: "Bonds" },
          { x: 10.5, y: 8.2, r: 15, sizeLabel: "ETFs" },
          { x: 25.3, y: 12.5, r: 20, sizeLabel: "Stocks" },
          { x: 45.6, y: 18.9, r: 18, sizeLabel: "Private Equity" },
          { x: 65.0, y: 28.4, r: 14, sizeLabel: "Startup" },
          { x: 89.7, y: 35.1, r: 12, sizeLabel: "Crypto" },
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  productPerformance: {
    datasets: [
      {
        label: "Product Performance",
        data: [
          { x: 1000, y: 4.2, sizeLabel: "Product A" },
          { x: 3000, y: 7.5, sizeLabel: "Product B" },
          { x: 500, y: 3.1, sizeLabel: "Product C" },
          { x: 2000, y: 6.8, sizeLabel: "Product D" },
          { x: 7000, y: 5.5, sizeLabel: "Product E" },
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
};

export default mockStore;
