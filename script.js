function saveDonor() {
    let donor = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        blood: document.getElementById("blood").value,
        city: document.getElementById("city").value,
        phonenumber: document.getElementById("phonenumber").value
    };

    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.push(donor);

    localStorage.setItem("donors", JSON.stringify(donors));

    alert("Registration Successful!");
    document.getElementById("donorForm").reset();
}

function findDonor() {
    let type = document.getElementById("searchBlood").value;

    let donors = JSON.parse(localStorage.getItem("donors")) || [];

    let result = donors.filter(d => d.blood === type);

    if (result.length === 0) {
        document.getElementById("result").innerHTML =
            "<p style='color:red;'>No donor found!</p>";
        return;
    }

    let output = "<h3>Matching Donors:</h3>";
    result.forEach(d => {
        output += `<p><strong>${d.name}</strong> (${d.blood}) - ${d.city} - ${d.phonenumber}</p>`;
    });

    document.getElementById("result").innerHTML = output;
}
