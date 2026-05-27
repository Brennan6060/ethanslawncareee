function getQuote() {

    let name = prompt("Enter your name:");

    let service = prompt(
        "What service do you need?\n\n" +
        "• Lawn Mowing\n" +
        "• Landscaping\n" +
        "• Yard Cleanup\n" +
        "• Edging"
    );

    let yardSize = prompt(
        "What size is your yard?\n\n" +
        "• Small\n" +
        "• Medium\n" +
        "• Large"
    );

    let phone = prompt(
        "Enter your phone number:"
    );

    if (name && service && yardSize && phone) {

        let quoteInfo =

            "QUOTE REQUEST SUBMITTED!\n\n" +

            "Customer Name: " + name + "\n\n" +

            "Phone Number: " + phone + "\n\n" +

            "Service Needed: " + service + "\n\n" +

            "Yard Size: " + yardSize;

        alert(quoteInfo);

        console.log(quoteInfo);

    } else {

        alert(
            "Please complete all quote information."
        );

    }
}