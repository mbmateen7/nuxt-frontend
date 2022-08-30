function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$(document).on('dragover', '.image-upload-wrap', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$(document).on('dragleave', '.image-upload-wrap', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

$(document).on('click', '#dropDown', function () {
    $('.custom-design-drop').toggleClass('drop-down--active');
});

let min = 0;
let max = 10000;
const calcLeftPosition = value => 100 / (100 - 10) * (value - 10);

$(document).on('input', '#rangeMin', function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    min = newValue;
    console.log(calcLeftPosition(newValue));
    $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
    $('#min').html(newValue);
    $('#line').css({
        'left': calcLeftPosition(newValue) + '%',
        'right': (100 - calcLeftPosition(max)) + '%'
    });
});
$(document).on('input', '#rangeMax', function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    max = newValue;
    $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
    $('#max').html(newValue);
    $('#line').css({
        'left': calcLeftPosition(min) + '%',
        'right': (100 - calcLeftPosition(newValue)) + '%'
    });
});
$(document).on('input', '#rangeMin2', function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    min = newValue;
    $('#thumbMin2').css('left', calcLeftPosition(newValue) + '%');
    $('#min2').html(newValue);
    $('#line2').css({
        'left': calcLeftPosition(newValue) + '%',
        'right': (100 - calcLeftPosition(max)) + '%'
    });
});
$(document).on('input', '#rangeMax2', function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    max = newValue;
    $('#thumbMax2').css('left', calcLeftPosition(newValue) + '%');
    $('#max2').html(newValue);
    $('#line2').css({
        'left': calcLeftPosition(min) + '%',
        'right': (100 - calcLeftPosition(newValue)) + '%'
    });
});
