let hour = parseInt(prompt("შეიყვანეთ საათი (0-23):"));

if (hour >= 6 && hour < 12) {
    console.log("დილა");
} else if (hour >= 12 && hour < 18) {
    console.log("შუადღე");
} else if (hour >= 18 && hour < 24) {
    console.log("საღამო");
} else if (hour >= 0 && hour < 6) {
    console.log("ღამე");
} else {
    console.log("გთხოვთ, სწორად შეიყვანოთ საათი (0-23)");
}
