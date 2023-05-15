// * CHARTS

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
window.addEventListener("resize", drawChart);

function getWidth() {
  if (window.innerWidth < 700) {
    return window.innerWidth;
  }
  return 700;
}

function drawChart(is_new = true) {
  let array = [];
  cart = JSON.parse(localStorage.getItem("cart"));

  array.push(["Назва", "Ціна"]);
  for (let i = 0; i < cart.length; i++) {
    array.push([cart[i].alt, cart[i].amount * cart[i].price]);
  }

  console.log(array);

  let chart_width = getWidth();

  let data = new google.visualization.arrayToDataTable(array);
  let options = {
    title: "Ваші покупки",
    fontName: "JetBrains Mono",
    width: Number(chart_width),
    legend: { textStyle: { fontSize: 16 } },
    titleTextStyle: { fontSize: 20 },
  };
  // * OR PieChart
  let chart;
  if (is_new) {
    chart = new google.visualization.BarChart(
      document.getElementById("myChart")
    );
  } else {
    chart = google.visualization.BarChart(
      document.getElementById("myChart")
    );
  }
  chart.draw(data, options);
}
