var tab_buttons = $('.tab-button button');
var tab_content = $('.tabContent');
var ArrayButton = Array.from(tab_buttons);
var ArrayContent = Array.from(tab_content);
function showpanel (panelIndex){
        ArrayButton.forEach((button) => {
                $(button).removeClass('active');     
        });
        $(ArrayButton[panelIndex]).addClass('active');
        ArrayContent.forEach((content) => {
                $(content).css('display','none');
        });
        $(ArrayContent[panelIndex]).css('display','block');      
}
showpanel(0);  