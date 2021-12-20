/*
	@Author  77
	@Date    2021-06-06
	@GitHub  https://github.com/fan-ziqi
*/
var choose = 1;//修改此处来选择评哪个选项，数值1-5对应五个选项,对于2021年的评教,1为非常满意
var pingyu = "非常满意";//修改此处来填写评语
console.log("将全部选择第%d个选项",choose);
console.log("将填写评语%o",pingyu);
var hash = {}; 
var a = document.evaluate('//input[(@type="radio") and not(@value="0")]//@name', 
                            document, 
                            null, 
                            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, 
                            null); 
if (a.snapshotLength)
{
    for (var i = 0; i < a.snapshotLength; i++)
    {
        if (!(a.snapshotItem(i).value in hash)) 
        hash[a.snapshotItem(i).value] = 0;
        hash[a.snapshotItem(i).value]++;
	}
	var num = 1;
    for (i in hash)
    {
        document.evaluate('//input[(@type="radio")  and not(@value="0") and @name="' + i + '"]', 
                            document, 
                            null, 
                            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, 
                            null).snapshotItem(choose-1).click();
        console.log("第%d条评选成功",num++);
    }
}
var objs = document.getElementsByTagName("textarea"); 
objs[0].focus(); 
objs[0].value = pingyu; 
objs[0].blur(); 
console.log("评语%o填写成功",pingyu);
console.log("本位老师评选成功！请手动点击页面下方的提交选项。");
console.log("@Author  77\n@Date    2021-06-06\n@GitHub  https://github.com/fan-ziqi\n");

