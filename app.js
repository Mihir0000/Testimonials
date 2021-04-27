(function () {
    let customers = [];
    let index = 0;

    // object constructor function
    function customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }
    // create customer function

    function createCustomer(name, img, text) {
        // full img
        let fullImg = `./img/customer-${img}.jpg`;

        // create a new cusotmer instance
        const customer1 = new customer(name, fullImg, text);

        // add to all customers
        customers.push(customer1);
    }

    createCustomer(
        "pore",
        1,
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    );
    createCustomer(
        "kanchan",
        2,
        `when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`
    );
    createCustomer(
        "nayek",
        3,
        `but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset`
    );
    createCustomer(
        "surajit",
        4,
        `sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    );
    // console.log(customers);

    document.querySelectorAll(".btn").forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            if (event.target.parentElement.classList.contains("prevBtn")) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                document.getElementById("customer-img").src =
                    customers[index].img;
                document.getElementById("customer-name").textContent =
                    customers[index].name;
                document.getElementById("customer-text").textContent =
                    customers[index].text;
            }
            if (event.target.parentElement.classList.contains("nextBtn")) {
                if (index === customers.length - 1) {
                    index = -1;
                }
                index++;
                document.getElementById("customer-img").src =
                    customers[index].img;
                document.getElementById("customer-name").textContent =
                    customers[index].name;
                document.getElementById("customer-text").textContent =
                    customers[index].text;
            }
        });
    });
})();
