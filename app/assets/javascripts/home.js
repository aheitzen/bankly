$(document).ready(function() {
    $('#fullpage').fullpage({
    menu: '.navbar',
    verticalCentered: true,
    resize : false,
    anchors:['firstPage', 'secondPage'],
    css3: true
  });

    $('#line_items').dataTable();
    var ctx = $("#myChart").get(0).getContext("2d");
    var myDoughnutChart = new Chart(ctx).Doughnut(chartData);
});

var chartData = [
    {
        value: '$',
        color:"#20CE99",
        highlight: "#0C9ECC",
        label: "Housing"
    },
    {
        value: '$',
        color: "#74FFD5",
        highlight: "#558999",
        label: "Transportation"
    },
    {
        value: '$',
        color: "#28FFBD",
        highlight: "#0C9ECC",
        label: "Bills"
    },
    {
        value: '$',
        color:"#3A7F6A",
        highlight: "#558999",
        label: "Entertainment"
    },
    {
        value: '$',
        color: "#20CC98",
        highlight: "#28FFBD",
        label: "Education"
    },
    {
        value: '$',
        color: "#083628",
        highlight: "#558999",
        label: "Food"
    },
    {
        value: '$',
        color: "#000000",
        highlight: "#28FFBD",
        label: "Miscellaneous"
    }
]
