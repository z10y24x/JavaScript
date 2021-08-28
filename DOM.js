class DOMClass {
    constructor() {
        this.createDom(arguments[0], arguments[1]);
    }
    createDom(DOMObj, DOMbox) {
        DOMObj = { ...{ el: "div" }, ...DOMObj }

        // 00- 创建DOM
        let newDOM = document.createElement(DOMObj.el);
        const innatDOM = ["el", "elChildren", "style"];
        // 01- 给DOM配置相对应的内容
        // 01-1 基础属性
        for (let key in DOMObj) {
            if (innatDOM.indexOf(key) === -1) {
                newDOM[key] = DOMObj[key];

            }
        };
        // 01-2 搞样式
        for (const key in DOMObj.style) {
            newDOM.style[key] = DOMObj.style[key];
        };
        // 判断是否用递归
        DOMObj.elChildren && DOMObj.elChildren.forEach(element => {
            this.createDom(element, newDOM);
        });
        // 02- 放进去
        if (typeof DOMbox === "object") {
            DOMbox.appendChild(newDOM)
        }
        return newDOM;
    }
}