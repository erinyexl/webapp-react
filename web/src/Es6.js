let str='str';
let num=12;

function fn1() {
    console.log('this is fn1 exported by Es6.js')
}

function fn2() {
    console.log('this is fn2 exported by Es6.js')
}

export {
    fn1 as f1,
    fn2 as f2,
    fn2 as alsof2
}