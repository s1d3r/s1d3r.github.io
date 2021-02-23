function openNav() {
   document.getElementById("Nav").style.width = "100%";
};

function closeNav() {
   document.getElementById("Nav").style.width = "0%";
};

$(".draxe_is_snickers").click(function() {
   $(".draxe_is_snickers").addClass("hidden")
});

$(".draxe_is_snickers").click(function() {
   var video = $("#background")[0];
   video.play();
   var audio = $(".rain")[0];
   audio.play();
});

$('.rain').prop("volume", 0.3);