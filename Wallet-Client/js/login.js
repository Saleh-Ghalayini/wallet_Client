const base_api = "http://ec2-15-237-28-102.eu-west-3.compute.amazonaws.com/Digital_Wallet_Platform/Wallet-Server/user/v1";

document.getElementById("login").addEventListener("click", async () => {

    const email = document.getElementById("email_input").value.trim();
    const password = document.getElementById("password_input").value.trim();

    if (!email || !password) {
        alert("Email and password are required!");
        return;
    }

    try {
        const response = await axios.post(base_api + "login.php", {
            email: email,
            password: password
        });

        console.log("Login successful!", response.data);

        // Go to verification page if login was successful
        if (response.data.status === "Success") {
            localStorage.setItem("id", response.data.user.id);
            window.location.href = "../verification.html";
        } else {
            alert(response.data.message || "Login failed!");
        }
    } catch (error) {
        console.error("Login failed!", error);
        alert(error.response?.data?.message || error.message || "An error occurred.");
    }
});
