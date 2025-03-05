const code = document.getElementById("code-field");
const verification_btn = document.getElementById("verify-btn");
const base_api = "http://ec2-15-237-28-102.eu-west-3.compute.amazonaws.com/Digital_Wallet_Platform/Wallet-Server/user/v1";

verification_btn.addEventListener("click", async (event) => {
    event.preventDefault();

    try {   
        const response = await axios.post(base_api + "verify.php", 
            {
                code: code.value
            });
            if (response.data.status === "Success") {
                alert("Verification successful!");
                localStorage.setItem("id", response.data.user.id);
                window.location.href = "dashboard.html";
            } else {
                alert(response.data.message);
            }
    }catch(error) {
        console.error("Error:", error);
        alert("An error occurred during verification.");
    }
});