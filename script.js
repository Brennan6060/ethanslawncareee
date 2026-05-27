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

    let phone = prompt(
        "Enter your phone number:"
    );

    if (name && service && yardSize && phone) {

        alert(
            "Quote Request Submitted!\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Service: " + service + "\n" +
            "Yard Size: " + yardSize
        );

        console.log(
            "NEW QUOTE REQUEST\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Service: " + service + "\n" +
            "Yard Size: " + yardSize
        );

    } else {

        alert(
            "Please complete all quote information."
        );

    }
}