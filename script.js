//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((input, index) => {

    input.addEventListener("input", (e) => {

        // Allow only numbers
        input.value = input.value.replace(/[^0-9]/g, "");

        // Move to next input
        if (input.value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            // If current field has a value, clear it
            if (input.value !== "") {
                input.value = "";
            }
            // If current field is empty, move to previous field
            else if (index > 0) {
                codes[index - 1].focus();
                codes[index - 1].value = "";
            }
        }
    });
});