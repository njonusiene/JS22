const createHeader = (app) => {
    app.innerHTML += `
        <header style="background:gold; color: white; height: 220px; text-align: center; padding:3px 10px">
            <h1 style="font-size: 2.5em;">Header</h1>
            <p style="font-size: 1.4em;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam quos, facilis porro, nobis accusantium atque inventore magnam sint libero deserunt aliquid!</p>
        </header>
    `
}
export default createHeader
