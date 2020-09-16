const router = require("express").Router();
const db = require("../models");




router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
})

router.put("/api/workouts/:id", (req, res) => {
    const workout = workout.findById(req.params.id);
    console.log(req.params.id);
    const newExercise = req.body;
    workout.exercises.push(newExercise);
    workout.setTotalDuration();
    workout.save();
    res.send(workout);

})
module.exports = router;
