
    // Retrieve the form element
    const form = document.getElementById("form");

    // Event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve form field values
        const Name=document.getElementById("name").value;
        const Age=document.getElementById("Age").value;
        const Bdate=document.getElementById("Bdate").value;
        const yourImage=document.getElementById("yourImage").value;

        // Create an object to store form data
        const formData = {
          Name:     Name,
            Age:    Age,
           Bdate:   Bdate,
          yourImage:yourImage
        };

        // Store form data in local storage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Optionally, you can display a success message or perform any other actions
        alert("Form data submitted successfully!");

        // Reset the form
        form.reset();
    })



