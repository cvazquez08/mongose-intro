const mongoose = require('mongoose');
// use Schema class given by mongoose 
const Schema = mongoose.Schema;

// based on Schema, we create a blueprint for students collection
const studentSchema = new Schema({
  name:{ 
    type: String,
    required: true
},
  image: { type: String, default: 'images/avatar.png'},
  course: { type: String } ,
  startedMonth: { type: String},
  startedYear: { type: Number},
  projects: [ String ],
  previousExperience: Boolean,
  created: {
    type: Date,
    default: Date.now
  }
})

const Student = mongoose.model("Student", studentSchema);
// export the model to make accessible in other files
module.exports = Student;