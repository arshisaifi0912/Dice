function room(){

    const input = parseInt(document.getElementById("input").value);
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const values = [];
    const images = [];

    for(let i = 0; i < input; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="${value}.jpg" alt="Dice ${value}">`);
    }

    num1.textContent = `Dice: ${values.join(',')}`;
    num2.innerHTML = images.join(',');

}
