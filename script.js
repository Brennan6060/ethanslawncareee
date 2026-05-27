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

        let subject =
            "New Lawn Care Quote Request";

        let body =
            "Customer Name: " + name + "%0D%0A" +
            "Phone Number: " + phone + "%0D%0A" +
            "Service Needed: " + service + "%0D%0A" +
            "Yard Size: " + yardSize + "%0D%0A%0D%0A" +
            "Please contact this customer soon.";

        window.location.href =
            "mailto:nezzyisbeautiful6@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;

    } else {

        alert(
            "Please complete all quote information."
        );

    }
}