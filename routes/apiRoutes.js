const router = require("express").Router();
const Workout = require("../models/workoutModels.js");




router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(error => res.json(error))
})

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id);
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(dbWorkouts => {
            console.log("here");
            console.log(dbWorkouts);
            res.json(dbWorkouts);

        })
        .catch(error => res.json(error))



});

router.get("/api/workouts/", (req, res) => {
    Workout.find().then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
    })
        .catch(error => res.json(error))

});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
    })
        .catch(error => res.json(error))
})


module.exports = router;
