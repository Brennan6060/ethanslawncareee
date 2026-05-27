emailjs.init("YOUR_PUBLIC_KEY");

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

        let templateParams = {

            customer_name: name,

            customer_phone: phone,

            customer_service: service,

            customer_yardsize: yardSize

        };

        emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            templateParams
        )

        .then(function(response) {

            alert(
                "Quote Request Sent Successfully!"
            );

        })

        .catch(function(error) {

            alert(
                "Failed to send quote request."
            );

            console.log(error);

        });

    } else {

        alert(
            "Please complete all quote information."
        );

    }
}