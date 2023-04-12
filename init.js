document.getElementById('generation').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('patronymicOutput').innerText = 'Отчество';
    document.getElementById('genderOutput').innerText = 'Пол';
    document.getElementById('birthYearOutput').innerText = 'год рождения';
}
);