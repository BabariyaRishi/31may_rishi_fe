$(document).ready(function () {
    $("#calculateBtn").click(function () {
        // Get start and end dates from input fields
        var startDate = new Date($("#startDate").val());
        var endDate = new Date($("#endDate").val());

        // Calculate interval in milliseconds
        var interval = endDate - startDate;

        // Convert interval to days, weeks, months, and years
        var days = Math.floor(interval / (1000 * 60 * 60 * 24));
        var weeks = Math.floor(days / 7);
        var months = Math.floor(interval / (1000 * 60 * 60 * 24 * 30)); // Average days in a month
        var years = endDate.getFullYear() - startDate.getFullYear();

        // Display the result
        var resultHtml = "<p>Interval in days: " + days + " days</p>";
        resultHtml += "<p>Interval in weeks: " + weeks + " weeks</p>";
        resultHtml += "<p>Interval in months: " + months + " months</p>";
        resultHtml += "<p>Interval in years: " + years + " years</p>";

        $("#result").html(resultHtml);
    });
});