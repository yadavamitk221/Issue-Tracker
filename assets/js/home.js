// selector
const createBtn = $('.add-btn');
const formContainer = $('.solve');
const submitBtn = $('.submit-btn');



// Event Listeners

createBtn.click(showForm);
submitBtn.click(removeForm);

// Functions
function showForm(){
    formContainer.removeClass('form-cotainer');
    formContainer.addClass('showContainer');
}

function removeForm(){
    formContainer.removeClass('showContainer');
    formContainer.addClass('form-cotainer');
}