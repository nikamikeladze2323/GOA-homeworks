document.addEventListener("DOMContentLoaded", function() {
    const orderName = document.getElementById("orderName");
    const orderQuantity = document.getElementById("orderQuantity");
    const orderAddress = document.getElementById("orderAddress");
    const placeOrderBtn = document.getElementById("placeOrder");
    const orderList = document.getElementById("orderList");

    let loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("გთხოვთ გაიაროთ ავტორიზაცია!");
        window.location.href = "index.html";
    }

    class Order {
        constructor(name, quantity, address) {
            this.name = name;
            this.quantity = quantity;
            this.address = address;
        }
    }

    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orderList.innerHTML = "";
        orders.forEach(order => {
            let li = document.createElement("li");
            li.textContent = `პროდუქტი: ${order.name}, რაოდენობა: ${order.quantity}, მისამართი: ${order.address}`;
            orderList.appendChild(li);
        });
    }

    placeOrderBtn.addEventListener("click", function() {
        let name = orderName.value.trim();
        let quantity = orderQuantity.value.trim();
        let address = orderAddress.value.trim();

        if (!name || !quantity || !address) {
            alert("გთხოვთ შეავსოთ ყველა ველი!");
            return;
        }

        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        let newOrder = new Order(name, quantity, address);
        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));

        loadOrders();
        orderName.value = "";
        orderQuantity.value = "";
        orderAddress.value = "";
    });

    loadOrders();
});
