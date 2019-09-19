/**
 * 
 * @param {*标签名} tag 
 * @param {* 属性对象} props 
 * @param  {...any 子元素} children 
 */
function createElement(tag, props, ...children) {
    return {
        tag,
        props,
        children
    }
}
let span=createElement('span',null,'八一')
let p = createElement('p', { class: 'red', title: '八维' }, 'helloworld!', '八维 ',span)
let div = createElement('div', { class: 'border',style:{'font-size':'30px',color:'yellow'} },p)

function getEl(vnode) {
    let { tag, props, children } = vnode
    let dom = document.createElement(tag)
    for (let key in props) {
        dom.setAttribute(key, typeof props[key]==='string'?props[key]:Object.entries(props[key]).map(item=>item.join(':')).join(';'))
    }
    //children
    children.forEach(item => {
        if (typeof item === 'string') { dom.innerHTML += item }
        if (typeof item === 'object') {
           let childNode= getEl(item)
           dom.appendChild(childNode)
        }
    })
    return dom
}
function render(vnode,el) {
   let dom =  getEl(vnode)
   el.appendChild(dom)
}
// render(p)
render(div,document.getElementById('app'))

