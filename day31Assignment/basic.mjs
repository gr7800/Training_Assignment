//1. Extract all student names and their GPAs (calculated from grades)

// Calculate GPA based on assignments (40%), midterm (30%), and final (30%)

// GPA = (assignment weightage + midterm weightage + final weightage) / 20

// OUTPUT: [{name, id, gpa}, {name, id, gpa}...]

//2. Create a list of all courses with their schedules

// OUTPUT: [
//     {courseId, title, credits, schedule: {days: [], time, room} },
//     {courseId, title, credits, schedule: {days: [], time, room} },...
// ]

//3. Generate a faculty directory with contact inOUTPUTion

// OUTPUT: [
//     {departmentName, departmentId, faculty: {name, id, email, qualifications: [], researchAreas: []} },
//     {departmentName, departmentId, faculty: {name, id, email, qualifications: [], researchAreas: []} }...,
// ]

import { universityData } from "./universityData.js";

// 1. Extract all student names and their GPAs
function calculateGPA(assignments, midterm, final) {
  const assignmentAvg =
    assignments.reduce((a, b) => a + b) / assignments.length;
  const gpa = (assignmentAvg * 0.4 + midterm * 0.3 + final * 0.3) / 20;
  return gpa.toFixed(2); // rounded to 2 decimal places
}

const studentsWithGPA = universityData.departments.flatMap((department) =>
  department.courses.flatMap((course) =>
    course.students.map((student) => ({
      name: student.name,
      id: student.studentId,
      gpa: calculateGPA(
        student.grades.assignments,
        student.grades.midterm,
        student.grades.final
      ),
    }))
  )
);

console.log(studentsWithGPA);

// 2. Create a list of all courses with their schedules
const courseSchedules = universityData.departments.flatMap((department) =>
  department.courses.map((course) => ({
    courseId: course.courseId,
    title: course.title,
    credits: course.credits,
    schedule: {
      days: course.schedule.days,
      time: course.schedule.time,
      room: course.schedule.room,
    },
  }))
);

console.log(courseSchedules);

// 3. Generate a faculty directory with contact information
const facultyDirectory = universityData.departments.map((department) => ({
  departmentName: department.name,
  departmentId: department.id,
  faculty: {
    name: department.head.name,
    id: department.head.id,
    email: department.head.email,
    qualifications: department.head.qualifications,
    researchAreas: department.head.researchAreas,
  },
}));

console.log(facultyDirectory);
