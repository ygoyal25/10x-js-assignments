let select = document.getElementById('dropdown');
let answer = document.getElementById('answer');
var completed = [];
var pending = [];

async function funcName(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    for(let i=0; i<data.length;i++){
        if(data[i]['completed']===true){
            completed.push(data[i]);
        }else{
            pending.push(data[i]);
        }
    }


    select.addEventListener('change', ()=>{
        let status = select.value;
        if(status==='completed'){
            answer.innerHTML = "";
            
            for(let i=0; i<completed.length; i++){

                let div = document.createElement('div');
                div.setAttribute('class','rows');

                let h1 = document.createElement('h4');
                let h2 = document.createElement('h4');
                let h3 = document.createElement('h4');
                let h4 = document.createElement('h4');

                h1.innerText = completed[i].userId;
                h2.innerText = completed[i].id;
                h3.innerText = completed[i].title;
                h4.innerText = completed[i].completed;
                
                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(h4);

                answer.appendChild(div)
            }
        }else if(status === 'pending'){
            answer.innerHTML = "";

            for(let i=0; i<pending.length; i++){

                let div = document.createElement('div');
                div.setAttribute('class','rows');

                let h1 = document.createElement('h4');
                let h2 = document.createElement('h4');
                let h3 = document.createElement('h4');
                let h4 = document.createElement('h4');

                h1.innerText = pending[i].userId;
                h2.innerText = pending[i].id;
                h3.innerText = pending[i].title;
                h4.innerText = pending[i].completed;
                
                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(h4);

                answer.appendChild(div)
            }
        }else{
            answer.innerHTML = "";
            
            for(let i=0; i<data.length; i++){

                let div = document.createElement('div');
                div.setAttribute('class','rows');

                let h1 = document.createElement('h4');
                let h2 = document.createElement('h4');
                let h3 = document.createElement('h4');
                let h4 = document.createElement('h4');

                h1.innerText = data[i].userId;
                h2.innerText = data[i].id;
                h3.innerText = data[i].title;
                h4.innerText = data[i].completed;
                
                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(h4);

                answer.appendChild(div)
            }
        }
    })
}

var url = 'https://jsonplaceholder.typicode.com/todos';
var total = funcName(url);