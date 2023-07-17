
    // // Retrieve the form element
    // const form = document.getElementById("form");

    // // Event listener for form submission
    // form.addEventListener("submit", function(event) {
    //     event.preventDefault(); // Prevent form submission

    //     // Retrieve form field values
    //     const Name=document.getElementById("name").value;
    //     const Age=document.getElementById("Age").value;
    //     const Bdate=document.getElementById("Bdate").value;
    //     const yourImage=document.getElementById("yourImage").value;

    //     // Create an object to store form data
    //     const formData = {
    //       Name:     Name,
    //         Age:    Age,
    //        Bdate:   Bdate,
    //       yourImage:yourImage
    //     };

    //     // Store form data in local storage
    //     localStorage.setItem("formData", JSON.stringify(formData));

    //     // Optionally, you can display a success message or perform any other actions
    //     alert("Form data submitted successfully!");

    //     // Reset the form
    //     form.reset();
    // })


    const inputs = document.querySelectorAll(".form");

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  if (localStorage.getItem(input.id)) {
    input.value = localStorage.getItem(input.id);
  }

  input.onkeyup = function() {
    localStorage.setItem(input.id, input.value);
  };
}
const birthDateInput = document.getElementById('Bdate');
const birthDateValue = birthDateInput.value;
if (localStorage.getItem(birthDateInput.id)) {
    birthDateInput.value = localStorage.getItem(birthDateInput.id);
  }
  birthDateInput.addEventListener('input', function() {
    localStorage.setItem(birthDateInput.id, birthDateInput.value);
  });


  const checkboxes = document.querySelectorAll(".check");
checkboxes.forEach((checkbox) => {
    const storedState = localStorage.getItem(checkbox.id);
    if (storedState === 'true') {
        checkbox.checked = true;
    }
});
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
})



