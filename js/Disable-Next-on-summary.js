/* Only disables the Next button on the summary page SU01*/

$(document).ready(function() {
    $('#id_CCMS_SU01_page_su01_bottomNav_summaryBottomNav_btnNext input[value="Next"]').val("Next is disabled").addClass("disabled").prop('disabled', true);
 });