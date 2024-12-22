const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi(){ //* cria os li
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e){ //* quando aperta ENTER adiciona a tarefa
    if(e.keyCode === 13){
        if(!inputTask.value) return;
        createTask(inputTask.value)
    }
});

function clearInput(){ //* limpa o input e coloca em foco para digitar
    inputTask.value = "";
    inputTask.focus();
}

function createButtonClear(li){ //* vai adicionar o botão de apagar na tarefa da lista
    li.innerText += ' ';
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Apagar';
    buttonClear.setAttribute('class', 'apagar');
    buttonClear.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(buttonClear);
}

function createTask(textInput){ //* cria a tarefa
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createButtonClear(li);
    saveTasks();
}

btnTask.addEventListener('click', function(){ //* adiciona a tarefa quando clica no botão de 'Adicionar tarefa'
    if(!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e){ //* apaga a tarefa quando clina no botão apagar
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks(){ //* salva as tarefas no banco de dados do navegador
    const liTasks = tasks.querySelectorAll('li');
    const listTasks = [];

    for (let task of liTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar','').trim();
        listTasks.push(taskText);
    }

    const taskJSON = JSON.stringify(listTasks);
    localStorage.setItem('tasks', taskJSON);
}

function addSaveTasks(){ //* adiciona novamente as tarefas que estão salvas no banco de dados do navegador
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);

    for(let task of listTasks){
        createTask(task);
    }
}
addSaveTasks();