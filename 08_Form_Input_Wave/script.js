const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText   //получаем слово в виде текста
        .split('')                      //делим слово на массив по куждой букве
        .map((letter, idx) => `
        <span style="transition-delay:${idx*50}ms">${letter}</span>`)   //проходимся по каждому элементу массива, и добавляем им значение в виде HTML строки
        .join('')           //далее обрано воссоединяем все обратно
})