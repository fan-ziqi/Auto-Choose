/*
    @Author  77
    @Date    2021-06-06
    @GitHub  https://github.com/fan-ziqi
*/
var choose = 1; //修改此处来选择评哪个选项，数值1-5对应五个选项,对于2021年的评教,1为非常满意
document.querySelectorAll('[data-dyf="' + String(6 - choose) + '"]').forEach(function (t) { t.click(); });

console.log("将全部选择第%d个选项", choose);
console.log("本位老师评选成功！请手动点击页面下方的提交选项。");
console.log("@Author  77\n@Date    2021-06-06\n@GitHub  https://github.com/fan-ziqi\n");