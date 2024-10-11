let listaDeTarefas = []

listaDeTarefas.push(prompt("Informe a primeira tarefa do dia:"))
listaDeTarefas.push(prompt("Informe a segunda tarefa do dia:"))
listaDeTarefas.push(prompt("Informe a terceira tarefa do dia:"))

console.log(listaDeTarefas)

listaDeTarefas.splice(Number(prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2")),1)

console.log(listaDeTarefas)