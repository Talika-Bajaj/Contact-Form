const inputs = document.getElementsByClassName('inputs');
const form = document.getElementById('input-form');
const errors = document.getElementsByClassName('error');
const valid = document.querySelector('.valid');
const consent = document.getElementById('consent');
const consentError = document.querySelector('.consent-error');
const msgArea = document.getElementById('msg-area');
const msgError = document.querySelector('.msg-error');
const pop = document.querySelector('.pop-up');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    Array.from(inputs).forEach((input) => {
        if ((input.value == '' || msgArea.value === '' || consent.checked == false)) {
            pop.style.display = 'none';
        } else {
            pop.style.display = 'flex';

        }
    })

    checkFields();
    checkRadios();
    validateEmail();
    checkTextarea();
    checkBox();
});

// for input fields
function checkFields() {
    Array.from(inputs).forEach((input, index) => {
        if (input.value == '') {
            errors[index].style.display = 'block';
            input.style.border = '1px solid hsl(0, 66%, 54%)';
        } else {
            input.style.border = '1px solid hsl(186, 15%, 59%)';
            errors[index].style.display = 'none';
        }
    })

}

//for email
function validateEmail() {
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById('email');
    if (email.value !== '') {

        if (email.value.match(format)) {
            document.querySelector('.valid').style.display = 'none';
            email.style.border = '1px solid hsl(186, 15%, 59%)';
        } else {
            document.querySelector('.valid').style.display = 'block';
            email.style.border = '1px solid hsl(0, 66%, 54%)'
        }
    }
}

//for radio buttons
function checkRadios() {
    const queryMsg = document.getElementById('query-msg');
    const radioName = document.getElementsByName('query');
    let isChecked = false;

    for (let i = 0; i < radioName.length; i++) {
        if (radioName[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        queryMsg.classList.remove('hidden');
    } else {
        queryMsg.classList.add('hidden');
    }
}

//for radio buttons background color
function changeColor() {
    const radioButtons = document.querySelectorAll('input[name="query"]');

    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
            const queryGroups = document.querySelectorAll('.query-group');

            queryGroups.forEach(function (group) {
                group.classList.remove('selected');
            });

            if (this.checked) {
                this.parentElement.classList.add('selected');
            }
        });
    });
}

changeColor();

//for textarea
function checkTextarea() {
    if (msgArea.value === '') {
        msgError.style.display = 'block';
        msgArea.style.border = '1px solid hsl(0, 66%, 54%)'
    } else {
        msgError.style.display = 'none';
        msgArea.style.border = '1px solid hsl(186, 15%, 59%)';
    }
}

//for checkbox
function checkBox() {
    if (consent.checked == false) {
        consentError.style.display = 'block';
    } else {
        consentError.style.display = 'none';
    }
}
