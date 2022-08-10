const express = require('express')
const app = express()

const students = []

app.get('/', (req, res) => {
    res.json(students)
})

app.post('/', (req, res) => {
    const studentFind = students.find((student) => {
        return student.name === req.body.name
    })

    // console.log(studentFind)

    if(!studentFind){
        const student = {
            name: req.body.name
        }
        students.push(student)
        res.json(student)
        console.log(student)
    }else{
        res.status(409).json("Student already exist");
    }

})


app.get('/', (req, res) => {
    res.json(students)
})

module.exports = app