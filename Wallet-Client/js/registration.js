const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const gender = document.querySelector('input[name="gender"]:checked').value;
const picture = document.getElementById("picture").files[0]; 
const date = document.getElementById("date");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone-number");
const password = document.getElementById("password");
const password_check = document.getElementById("password-again");
const base_api = "http://ec2-15-237-28-102.eu-west-3.compute.amazonaws.com/Digital_Wallet_Platform/Wallet-Server/user/v1";

document.getElementById("register-btn").addEventListener("click", async (event) => {
    event.preventDefault();
    
    if(!gender) {
        alert("Please select a gender!");
        return;
    }

    if (password.value !== password_check.value) {
        alert("Passwords do not match!");
        return;
    }

    const form = new FormData();
    form.append("first_name", first_name.value);
    form.append("last_name", last_name.value);
    form.append("gender", gender.value);
    form.append("picture", picture);
    form.append("birth_date", date.value);
    form.append("email", email.value);
    form.append("phone_number", phone_number.value);
    form.append("password", password.value);

    try {
        const response = await axios.post(base_api + "register.php", form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (response.data.status === "Success") {
            localStorage.setItem("id", response.data.user.id);
            window.location.href = "verification.html";
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while registering.");
    }
});
