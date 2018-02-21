
//finding the number of pages needed
function findNumberOfPages() {
	var studentsCount = $('.student-list >li').length;
	if (studentsCount / 10 === 0) {
		return studentsCount / 10;
	} else {
		return studentsCount / 10 + 1;
	};
};

// printing the pagination
function printingPagination() {
	var nrOfPages = findNumberOfPages();
	paginationHtml = '<div class="pagination"><ul>';
	for (var i = 1; i <= nrOfPages; i++) {
		paginationHtml += '<li><a href="#">' + i + '</a></li>';
	};
	paginationHtml += '</ul>';
	$('.student-list').after(paginationHtml);
};

printingPagination();
//calling the selectPage function for the first page to appear
selectPage(1);


function selectPage(page)  {	
	// Hide all students
	$('.student-list>li').hide();
	// The previous selected page should not be active anymore
	$('.pagination a.active').removeClass('active');
	// Mark the specific page button as active
	$('.pagination a').eq(page - 1).addClass('active');
	// Show the students between 
	var start = (page - 1) * 10;
	var end = start + 10;
	$('.student-list>li').each(function (index) {
		if (index >= start && index < end) {
			$(this).show();
		}
	});
}

//
$('.pagination a').click(function() {
	selectPage(Number($(this).text()));
});