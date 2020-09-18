$(document).ready(function() {
    $(".head-text").css("color", "hsla(" + Math.floor(Math.random() * (360)) + ", 75%, 58%, 1)");
});

tippy('#discord', {
    content: 'Copied to clipboard',
    animation: 'scale',
    trigger: 'click',
});

$('#music').prop("volume", 0.5);


function AdvancedCopy(){
    
var theText = 'ソイダー#1846';

var hiddenCopy = document.createElement('div');
    hiddenCopy.innerHTML = theText;
    hiddenCopy.style.position = 'absolute';
    hiddenCopy.style.left = '-9999px';

    var currentRange;

if(document.getSelection().rangeCount > 0)
    {
        currentRange = document.getSelection().getRangeAt(0);
        window.getSelection().removeRange(currentRange);
    }
    else
    {
        currentRange = false;
}

document.body.appendChild(hiddenCopy);
var CopyRange = document.createRange();
CopyRange.selectNode(hiddenCopy);
window.getSelection().addRange(CopyRange);

try
    {
        document.execCommand('copy');
    }

catch(err)
    {
         window.alert("Your Browser Doesn't support this! Error : " + err);
    }

window.getSelection().removeRange(CopyRange);
document.body.removeChild(hiddenCopy);

if(currentRange)
    {
        window.getSelection().addRange(currentRange);
    }
}