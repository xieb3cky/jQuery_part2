//Part Two - Movies App

$('#movieForm').on("submit", function (e) {
    e.preventDefault();

    //capture values for each input
    const title = $('.movie').eq(0).val();
    const rating = $('.movie').eq(1).val();
    //append values to the DOM with remove button
    $('<li>').text(`Title: ${title}, Rating: ${rating}`).append('<button>remove</button>').appendTo('ol')
    $(this).trigger('reset');
});

//listen on parent element(ol) for click
//qhen the button to remove is clicked, remove each title and rating from the DOM
$('ol').on("click", 'button', function (e) {
    $(this).parent().remove();
})