// selector
const createBtn = $('.add-btn');
const formContainer = $('.form-cotainer');
const submitBtn = $('.submit-btn');

// Event Listeners
createBtn.click(showForm);
submitBtn.click(removeForm);

// Functions
function showForm(){
    formContainer.addClass('showContainer');
}

function removeForm(){
    formContainer.removeClass('hideContainer');
}