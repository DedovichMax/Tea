$(document).ready(function () {
new WOW(
    {animateClass: 'animate__animated'}
).init();

$('.pr-image').magnificPopup({
    type: 'image'
});

$( "#accordion" ).accordion({
    heightStyle: "content"
});
    const formGroupExampleInput = $('#formGroupExampleInput');
    const formGroupExampleInput2 = $('#formGroupExampleInput2');
    const formGroupExampleInput3 = $("#formGroupExampleInput3");
    const formGroupExampleInput4 = $("#formGroupExampleInput4");
    const formGroupExampleInput5 = $("#formGroupExampleInput5");
    const formGroupExampleInput6 = $("#inputAddress");
    const button = $("#button");
    const form = $("#forms");
    const form2 = $("#form2");



$('.formGroupExampleInput5').add('input', function () {
   $(this).val = $(this).val().replace (/[^0-9]/g, '');
});

$ ('#button').click(function validateFormReg(e) {
    e.preventDefault()
    if (!formGroupExampleInput.val()) {
        alert("Заполните поле Имя");
        return;
    } else if (!formGroupExampleInput2.val()) {
        alert("Заполните поле Фамилия");
        return;
    } else if (!formGroupExampleInput3.val()) {
        alert("Заполните поле Телефон");
        return;
    } else if (!formGroupExampleInput4.val()) {
        alert("Заполните поле Страна");
        return;
    } else if (!formGroupExampleInput5.val()) {
        alert("Заполните поле Индекс");
        return;
    } else if (formGroupExampleInput5.val().length != 6) {
        alert("Индекс должен содержать 6 символов");
        return;
    } else if (!formGroupExampleInput6.val()) {
        alert("Заполните поле Адрес");
        return;
    } else
    submitForm()

});
    function submitForm() {
        form.hide();
        form2.show();
    }

});

/*
const formGroupExampleInput = document.getElementById('formGroupExampleInput');
const formGroupExampleInput2 = document.getElementById('formGroupExampleInput2');
const formGroupExampleInput3 = document.getElementById("formGroupExampleInput3");
const formGroupExampleInput4 = document.getElementById("formGroupExampleInput4");
const formGroupExampleInput5 = document.getElementById("formGroupExampleInput5");
const formGroupExampleInput6 = document.getElementById("inputAddress");
const button = document.getElementById("button");
const form = document.getElementById("forms");
const form2 = document.getElementById("form2");


(formGroupExampleInput5).addEventListener('input', function () {
    this.value = this.value.replace (/[^0-9]/g, '');
});

button.onclick = e => validateFormReg(e)


function validateFormReg(e) {
    e.preventDefault()
    if (!formGroupExampleInput.value) {
        alert("Заполните поле Имя");
        return;
    } else if (!formGroupExampleInput2.value) {
        alert("Заполните поле Фамилия");
        return;
    } else if (!formGroupExampleInput3.value) {
        alert("Заполните поле Телефон");
        return;
    } else if (!formGroupExampleInput4.value) {
        alert("Заполните поле Страна");
        return;
    } else if (!formGroupExampleInput5.value) {
        alert("Заполните поле Индекс");
        return;
    } else if (formGroupExampleInput5.value.length != 6) {
        alert("Индекс должен содержать 6 символов");
        return;
    } else if (!formGroupExampleInput6.value) {
        alert("Заполните поле Адрес");
        return;
    } else
        submitForm()

}

function submitForm() {
    form.style.display = "none";
    form2.style.display = "block";
}

});
});
 */