// 스택 FIFO
const stack = [];
function push(x){
    stack.push(x);
    console.log('push', x);
}
function pop(){
    const result = stack.pop();
    console.log('pop', result);
    return result;
}
function show_list(){
    console.log('list', stack);
}
push(1);
push(2);
push(3); 
show_list();
let x = pop();
show_list();
x = pop();
show_list();