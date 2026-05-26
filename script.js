function getQuote() {

    let name = prompt("Enter your name:");

    let service = prompt(
        "What service do you need?\n\n" +
        "Lawn Mowing\n" +
        "Landscaping\n" +
        "Yard Cleanup\n" +
        "Edging"
    );

    let yardSize = prompt(
        "What size is your yard?\n\n" +
        "Small\n" +
        "Medium\n" +
        "Large"
    );

    if (name && service && yardSize) {

        alert(
            "Quote Request Submitted!\n\n" +
            "Name: " + name + "\n" +
            "Service: " + service + "\n" +
            "Yard Size: " + yardSize + "\n\n" +
            "We will contact you shortly!"
        );

    } else {

        alert(
            "Please complete all quote information."
        );

    }
}