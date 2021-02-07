$(document).ready(function () {
    //menuDescription change after hover
    $(".omnie").mouseover(function () {
        $(".menuDescription p").text("Mam na imię Klaudia")
    }).click(function () {
        $(".omnieInSlider").css("display", "flex")
    });
    $('.projekty').mouseover(function () {
        $(".menuDescription p").text("Zaparaszam do obejrzenia moich projektów")
    }).click(function () {
        $(".projektyInSlider").css("display", "flex")
    });
    $('.kontakt').mouseover(function () {
        $(".menuDescription p").text("Skontaktuj się ze mną")
    }).click(function () {
        $(".kontaktInSlider").css("display", "flex")});
    $('.uslugi').mouseover(function () {
        $(".menuDescription p").text("Sprawdź moją ofertę ")
    });
    //return button in slide section
    $('.returnButton').mouseover(function () {
        $(".menuDescription p").text("Powrót ");
    }).mouseleave(function () {
        $(".menuDescription p").text("")
    }).click(function () {
        $("div.menuSlider").removeClass("menuSliderActive");
    }).click(function () {
        $(".sliderContent").css("display", "none")
    });
    //return button in slide section
    //icons in contact section
    $('.fa-facebook-square').mouseover(function () {
        $(".menuDescription p").text("Kliknij aby przenieść się na mój Facebook")
    });
    $('.fa-phone-square-alt').mouseover(function () {
        $(".menuDescription p").text("Zadzwoń do mnie lub wyślij zlecenie rozmowy na swój smartphone.")
    });
    $('.fa-envelope-square').mouseover(function () {
        $(".menuDescription p").text("Kliknij aby przejść do aplikacji wysyłania E-Mail")
    });
    $(".icon").mouseleave(function(){
        $(".menuDescription p").text("")
    });
    //icons in contact section
    //menuDescription change after rectangles hover

    //slide section moves to right after click
    $(".rectangles p").click(function () {
        $("div.menuSlider").addClass("menuSliderActive");

    });
    //slide section moves to right after click


});


