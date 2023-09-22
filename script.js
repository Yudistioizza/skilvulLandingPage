function handleGetFormData() {
  // Mengambil nilai dari input menggunakan getElementById
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const cityInput = document.getElementById("city").value;
  const zipCodeInput = document.getElementById("zip-code").value;
  const statusInput = document.getElementById("status").checked;

  // Membuat objek yang berisi nilai-nilai input
  const formData = {
    name: nameInput,
    email: emailInput,
    city: cityInput,
    zipCode: zipCodeInput,
    status: statusInput,
  };

  // Mengembalikan objek formData
  return formData;
}

// Contoh cara menggunakan fungsi handleGetFormData
const formData = handleGetFormData();
console.log(formData); // Ini akan mencetak objek dengan nilai input

function isNumber(inputString) {
  // Menggunakan isNaN untuk memeriksa apakah inputString adalah angka
  return !isNaN(inputString);
}

// Contoh penggunaan fungsi isNumber
const zipCode = "12345";
const nonNumericString = "abc123";
console.log(isNumber(zipCode)); // Output: true
console.log(isNumber(nonNumericString)); // Output: false

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
}

// Contoh penggunaan fungsi checkboxIsChecked
if (checkboxIsChecked()) {
  // Lakukan sesuatu jika checkbox dicentang (nilai true)
  console.log("Checkbox is checked");
} else {
  // Lakukan sesuatu jika checkbox tidak dicentang (nilai false)
  console.log("Checkbox is not checked");
}

function validateFormData(data) {
  if (
    !data.name ||
    !data.city ||
    !data.email ||
    !data.zipCode
  ) {
    return false;
  }

  if (!isNumber(data.zipCode)) {
    return false;
  }

  if (!checkboxIsChecked()) {
    return false;
  }

  return true;
}

function submit(){
  validateFormData(formData);
  let warning = document.getElementById('warning');

  if(validateFormData(formData) == false){
    return warning.innerHTML = "Periksa form anda sekali lagi";
  }else{
    return warning.innerHTML = "";
  }
}

document.getElementById('submit-form').addEventListener('click', (event) => {
    event.preventDefault();
    submit()
})
