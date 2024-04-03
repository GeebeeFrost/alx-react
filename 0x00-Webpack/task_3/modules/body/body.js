import $ from "jquery";
import _ from "lodash";
import "./body.css";

const button = $("<button>").text("Click here to get started");
const pCount = $("<p>").attr("id", "count");

$("body").append(button, pCount);

let count = 0;

function updateCounter() {
  count++;
  pCount.text(`${count} clicks on the button`);
}

button.on("click", _.debounce(updateCounter, 500));
