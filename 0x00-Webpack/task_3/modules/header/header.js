import $ from "jquery";
import "./header.css";

const logoDiv = $("<div>").attr("id", "logo");
const title = $("<h1>").text("Holberton Dashboard");
$("body").append(logoDiv, title);

console.log("Init header");
