$(window).on('load', function() {

    $("#Goal1_6").show();
    $("#Goal2_6").show();
    $("#Goal1_4").hide();
    $("#Goal2_4").hide();
    $("#Goal3").hide();
    $('#startModal').modal('show');
});

$("#submitButton").click(function() {
    $("#Goal1_6").hide();
    $("#Goal2_6").hide();
    $("#Goal1_4").show();
    $("#Goal2_4").show();
    $("#Goal3").show();
    var priceVal = $('#price').val();
    $('#cost3').text(priceVal);
    $('#addButton').prop('disabled', true);
});
$('#product').blur(function() {
    var objVal = $(this).val();
    if (objVal != '') {
        $('#name3_title').text(objVal);
        $('#name3_modal').text(objVal);
        $('#name3').text(objVal);
        $('#cost').val('$2400');
    }
});
$(function() {
    $('#datepicker-12').datepicker();
});
