// 큐 FIFO
const queue = [];
function enqueue(x){
    queue.push(x);
    console.log('enqueue', x);
}
function dequeue(){
    const result = queue.shift();
    console.log('dequeue', result);
    return result;
}
function show_list(){
    console.log('list', queue);
}
enqueue(1);
enqueue(2);
enqueue(3);
show_list();
let x = dequeue();
show_list();
x = dequeue();
show_list(); 
