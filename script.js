function orderProduct(productName, price) {
    const phoneNumber = "919724039849";

    const message = `Hello RIYA ENTERPRISE!
I want to order:

Product: ${productName}
Price: ₹${price}

Please confirm my order.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}