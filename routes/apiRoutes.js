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
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);

        })
        .catch(error => res.json(error))



})
router.get()
module.exports = router;
