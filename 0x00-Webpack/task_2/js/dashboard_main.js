import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

const p1 = $("<p>").text("Holberton Dashboard");
const p2 = $("<p>").text("Dashboard data for the students");
const button = $("<button>").text("Click here to get started");
const pCount = $("<p>").attr("id", "count");
const p3 = $("<p>").text("Copyright - Holberton School");
$("body").append(p1, p2, button, pCount, p3);

let count = 0;

function updateCounter() {
  count++;
  pCount.text(`${count} clicks on the button`);
}

button.on("click", _.debounce(updateCounter, 500));

const logoDiv = $("<div>").attr("id", "logo");
$("body").prepend(logoDiv);
