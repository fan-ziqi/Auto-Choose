/*
    @Author  coyote
    @Date    2023-06-05
    @GitHub  https://github.com/typenoob
*/


function waitForElm(selector, wait = 3000) {
	return new Promise((resolve, reject) => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}
		const timeout = setTimeout(
			() => {
				observer.disconnect();
				reject(` ${selector} 元素未找到`);
			},
			wait
		);
		const observer = new MutationObserver(_ => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				clearTimeout(timeout);
				observer.disconnect();
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}
new Promise(async (resolve, reject) => {
	const charts = Array.from(document.querySelector("#tempGrid").children[0].children);
	charts.shift();
	for await (const chart of charts) {
		chart.click();
		const radioButtons = await waitForElm('.radio-inline').catch(err => reject(err));
		for await (const i of [...Array(40).keys()]) {
			if (radioButtons[i].innerText == '非常满意 ') radioButtons[i].children[0].firstElementChild.click();
		};
		const tjBtn = await waitForElm('#btn_xspj_tj').catch(err => reject(err));
		tjBtn.dispatchEvent(new Event('mouseover'));
		tjBtn.click();
		const okBtn = await waitForElm('#btn_ok').catch(err => reject(err));
		okBtn.click();
	}
	resolve(true);
}).then((_) => alert('success!')).catch(err => alert(`error: ${err}`));
