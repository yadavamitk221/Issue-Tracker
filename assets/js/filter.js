// SELECTORS
const filterForm = $(".filter");
const filterOpt = $(".fltr-btn");

const authorFilterBtn = $('#author-filter-btn');
const labelFilterBtn = $('#label-filter-btn');
const titleFilterBtn = $('#title-filter-btn');
const authorsubmitBtn = $('#filter-submitbtn');
const labelsubmitBtn = $('#labelFilterSubmit');
const titlesubmitBtn = $('#findby-title-submitbtn');


// ADD EVENT LISENER
filterForm.submit(filter);
authorFilterBtn.click(showAuthorForm);
labelFilterBtn.click(showLabelForm);
titleFilterBtn.click(showTitleForm);


authorsubmitBtn.click(removeauthorForm);
labelsubmitBtn.click(removelabelForm);
titlesubmitBtn.click(removeTitleForm);
// Function
function showAuthorForm(){
    $('#filter-by-author').removeClass('form-cotainer');
    $('#filter-by-author').addClass('showContainer');
}

function showLabelForm(){
    $('#filter-by-label').removeClass('form-cotainer');
    $('#filter-by-label').addClass('showContainer');
}

function showTitleForm(){
    $('#filter-by-name').removeClass('form-cotainer');
    $('#filter-by-name').addClass('showContainer');
}

function removeauthorForm(){
    $('#filter-by-author').removeClass('showContainer');
    $('#filter-by-author').addClass('form-cotainer');
}

function removelabelForm(){
    $('#filter-by-label').removeClass('showContainer');
    $('#filter-by-label').addClass('form-cotainer');
}

function removeTitleForm(){
    $('#filter-by-name').removeClass('showContainer');
    $('#filter-by-name').addClass('form-cotainer');
}


function filter(event) {
    event.preventDefault();
    var form = $(this);
    console.log(form.serialize());
    $.ajax({
        type: 'post',
        url: $('.filter').prop('action'),
        data: form.serialize(),
        success: function(data){
            console.log("Inside success field", data);
            let filteredIssuelist = filterIssueDOM(data.data.allIssue);
        },error: function(error){
            console.log(error.responseText);
        }
    });
};

// FUNCTIONs
function filterByAuthor(e){
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: $(),
        data: authorFilterForm.serialize(),
        success: function(data){
            console.log("Inside success field", data);
            let filteredIssuelist = filterIssueDOM(data.data.allIssue);
        },error: function(error){
            console.log(error.responseText);
        }
    });
}


function filterIssueDOM(allIssue){
    $('.issue-details').remove();
    
    for(issue of allIssue){
        $('.list-of-Issues').append($(`<div class="issue-details">
        <p class="title">Title: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${issue.title}</p>
        <p class="description">Description: &nbsp &nbsp ${issue.description}</p>
        <p class="label">label: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${issue.labels}</p>
        <p class="author">Author: &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${issue.author}</p>
    </div`));
      }
}