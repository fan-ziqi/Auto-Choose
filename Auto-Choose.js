/*
    @Author  coyote
    @Date    2021-12-24
    @GitHub  https://github.com/typenoob
*/


chart=document.querySelector("#tempGrid").children[0].children
for(let k=1;k<chart.length;k++){
    setTimeout(function(){chart[k].click()},k*2000)  
    setTimeout(function(){a=document.getElementsByClassName('radio-inline')},k*2000+1000)
    for(let i=0;i<40;i++)
        setTimeout(function(){if(a[i].innerText=='非常满意 ') a[i].children[0].firstElementChild.click()},k*2000+1150)
    setTimeout(function(){document.querySelector("#btn_xspj_tj").click()},k*2000+1160)
    setTimeout(function(){document.querySelector("#btn_ok").click()},k*2000+1500)
}


console.log("successful!");
