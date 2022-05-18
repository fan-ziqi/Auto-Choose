/*
    @Author  coyote
    @Date    2022-5-17
    @GitHub  https://github.com/typenoob
*/


chart=document.querySelector("#tempGrid").children[0].children
for(let k=1;k<chart.length;k++){
    setTimeout(function(){chart[k].click()},k*3000)  
    setTimeout(function(){a=document.getElementsByClassName('radio-inline')},k*3000+1000)
    for(let i=0;i<40;i++)
   setTimeout(function(){if(a[i].innerText=='非常满意 ') a[i].children[0].firstElementChild.click()},k*3000+1150)
   setTimeout(function(){document.querySelector("#btn_xspj_tj").dispatchEvent( new Event( 'mouseover' ) )},k*3000+1160)
   setTimeout(function(){document.querySelector("#btn_xspj_tj").click()},k*3000+1360)
   setTimeout(function(){document.querySelector("#btn_ok").click()},k*3000+1500)
}


console.log("successful!");
