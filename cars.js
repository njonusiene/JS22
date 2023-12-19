const addCars = (app) => {
    const arr = ["BMW", "VW", "AUDI", "MB"]
    app.innerHTML += `
        <ul>
            ${arr.map((car) => `<li>${car}</li>`).join('')}
        </ul>
    `
}

export default addCars