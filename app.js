// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');

// import model 
const Student = require('./models/student-model');

// connect with database:
//                                   here you name dataBase.
//                                        |
mongoose.connect("mongodb://localhost/studentBook")

// create application
const app = express();

// set hbs engine, views / public folder
app.set('view engine', hbs);
app.set('views', __dirname + '/views');
app.set(express.static(__dirname + '/public'));

// create new DB instance:

// Student.create({
//   name: "Alexishhhhhk",
//   course: "UI",
//   startedMonth: "July",
//   startedYear: 1992,
//   projects: ['company'],
//   previousExperience: true
// })
// .then( newStudent => {
//   console.log("New student successfully created in DB: ", newStudent)
// })
// .catch(err => {
//   console.log("Error while creating new instance: ", err);
// })

// ******************************************************************
// ******************************************************************

// ALETERNATIVE WAY TO CREATE INSTANCE IN THE DATABASE
// const chrisInfo = new Student({
//   name: "Chris",
//   course: "Web Dev",
//   startedMonth: "July",
//   startedYear: 1990,
//   projects: ['game'],
//   previousExperience: true
// })

// chrisInfo.save()
//   .then( newStudentInfo => {
//     console.log("New student created: ", newStudentInfo)
//   })
//   .catch(err => {
//     console.log("Error creating new student: ", err);
//   })

// ******************************************************************
// ******************************************************************

// Retrieve / Read

// Student.find() // .find() always return array
//   .then( allStudentsFromDB => {
//     // looping through array in order to console.log all names
//     allStudentsFromDB.forEach(student => {
//       // console.log(student.name, ":", student.course);
//     })
//   })
//   .catch( error => {
//     console.log("Error while retrieving data from DB: ", error);
//   })

//   // .findById will always give an object
// Student.findById("5c4916d1f8b52f7f4616cde4")
// .then( theStudent => {
//       // console.log("Student is: ", theStudent.name);
//  })
//  .catch(error => {
//       console.log("Error while retrieving single student from DB: ", error);
//  })

//     // .findOne will find first one
//     // Student.findOne({course: "UI"})
//     .then( theStudent => {
//       console.log("Student is: ", theStudent.name);
//     })
//     .catch(error => {
//       console.log("Error while retrieving single student from DB: ", error);
//     })

// ******************************************************************
// ******************************************************************

// Update


// Student.findByIdAndUpdate("5c4916d1f8b52f7f4616cde4", { name: "Elliot V."})
// .then( updatedStudent => {
//       console.log("Updated student is: ", updatedStudent);
// })
// .catch(error => {
//       console.log("Error updating student: ", error);
// })


// ******************************************************************
// ******************************************************************

//DELETE

Student.findByIdAndRemove("5c49229e112e6c7fdb1afda9")
.then( student =>{
  console.log(`Student with id: ${student._id} was removed from DB`)
})
.catch(error =>{
  console.log("Error while deleting student from DB: ", error);
})

// listen on port 3000
app.listen(3000, () => {
  console.log("Listening on 3000")
});