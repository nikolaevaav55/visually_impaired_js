const bgc = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');

function toggleText(button_id) 
{
   var el = document.getElementById(button_id);
   if (el.firstChild.data == "Версия для слабовидящих") 
   {
       var bgc = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
       var bgc = String(bgc)
       console.log(bgc)
       var color = "white"
       changeFontSize(el.firstChild.data, color)
       el.firstChild.data = "Обычная версия";

   }
   else 
   {
    changeFontSize(el.firstChild.data, bgc)
     el.firstChild.data = "Версия для слабовидящих";
   }
}



function changeFontSize(type, color){

    // IDs to select
    let ids = ["#h", '#p'];
    
    

    ids.forEach(id => {
        // Get element
        let el = document.querySelector(id);

        // Get font size
        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")

        // Convert to float
        fontSize = parseFloat(fontSize);

        // Increase / Decrease font-size
        if(type === "Версия для слабовидящих"){
            el.style.fontSize = (fontSize * 2) + "px";
            document.body.style.background = "white"
        }else{
            el.style.fontSize = (fontSize / 2) + "px";
            document.body.style.background = bgc
        }
    });
}