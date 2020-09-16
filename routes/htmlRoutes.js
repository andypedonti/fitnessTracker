module.exports = (app, path) => {
    app.get("/exercise", (req, res) => {
        //give exercise.html
        res.sendFile(path.join(__dirname, "../public/exercise.html"))

    })
    app.put("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../api/workouts/", "id"))
    })
}