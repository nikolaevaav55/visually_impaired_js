const bgc = window.getComputedStyle(document.body, null).getPropertyValue('background-color');


function CheckCookies()
{
    if($.cookie('site_version') == 'Версия для слабовидящих')
    var el = document.getElementById("siteVersion");
    el.firstChild.data = "Обычная версия";
    var color = "white"
    changeFontSize("Версия для слабовидящих", color)

}



function toggleText(button_id)
{
   var el = document.getElementById(button_id);
   if (el.firstChild.data == "Версия для слабовидящих")
   {   
       $.cookie('site_version', "Версия для слабовидящих", { path: '/' });
       var color = "white"
       changeFontSize(el.firstChild.data, color)
       el.firstChild.data = "Обычная версия";
   }
   else
   {
    $.removeCookie('site_version');
    changeFontSize(el.firstChild.data, bgc)
    el.firstChild.data = "Версия для слабовидящих";
   }
}


CheckCookies()



function changeFontSize(type, color){

    let tags = ["h1","h2", "h3", "p", "a", "h4"];

     tags.forEach(tag => {
         var tags = document.querySelectorAll(tag);
           for(var i=0; i<tags.length; i++){
             let fontSize = window.getComputedStyle(tags[i], null).getPropertyValue("font-size")
             fontSize = parseFloat(fontSize);
              if(type === "Версия для слабовидящих"){
                 tags[i].style.fontSize = (fontSize * 2) + "px";
                 document.body.style.background = color

             }else{
                 tags[i].style.fontSize = (fontSize / 2) + "px";
                 document.body.style.background = color
                 }}

       });
       }
