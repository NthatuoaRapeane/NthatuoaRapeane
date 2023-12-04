document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let program = document.getElementById('program').value;
    let year = document.getElementById('year').value;
    let name = document.getElementById('name').value;
    let studentNumber = document.getElementById('studentNumber').value;
    let photo = document.getElementById('photo').files[0];

    let reader = new FileReader();
    reader.onload = function(e) {
        let dataURL = e.target.result;
        displayStudentCard(program, year, name, studentNumber, dataURL);
    };
    reader.readAsDataURL(photo);
});

function displayStudentCard(program, year, name, studentNumber, photoURL) {
    let studentCard = document.getElementById('studentCard');
    studentCard.innerHTML = `
        <img class="photo" src="${photoURL}"><br>
        <h2>${name}</h2>
        <p>Program: ${program}</p>
        <p>Year of Entry: ${year}</p>
        <p>Student Number: ${studentNumber}</p>
    `;
}
