const universityData = {
  universityName: "Tech Global University",
  established: 1985,
  location: {
    address: "123 Education Street",
    city: "Knowledge City",
    country: "Eduland",
    coordinates: {
      latitude: 42.3601,
      longitude: -71.0589,
    },
  },
  departments: [
    {
      id: "CS101",
      name: "Computer Science",
      head: {
        id: "PROF001",
        name: "Dr. Alan Turing",
        email: "alan.turing@techglobal.edu",
        qualifications: ["PhD in Computer Science", "MSc in Mathematics"],
        researchAreas: ["AI", "Machine Learning", "Cryptography"],
      },
      courses: [
        {
          courseId: "CS501",
          title: "Advanced Programming",
          credits: 4,
          schedule: {
            days: ["Monday", "Wednesday"],
            time: "10:00 AM - 11:30 AM",
            room: "Lab 204",
          },
          students: [
            {
              studentId: "ST1001",
              name: "John Smith",
              age: 20,
              grades: {
                assignments: [85, 92, 88, 95],
                midterm: 89,
                final: 94,
              },
              contact: {
                email: "john.smith@student.techglobal.edu",
                phone: "+1-555-0123",
                address: {
                  street: "456 Student Housing",
                  city: "Knowledge City",
                  zipCode: "12345",
                },
              },
              extracurriculars: [
                {
                  activity: "Coding Club",
                  role: "President",
                  hoursPerWeek: 5,
                },
                {
                  activity: "Hackathon Team",
                  role: "Member",
                  hoursPerWeek: 3,
                },
              ],
            },
            {
              studentId: "ST1002",
              name: "Emma Johnson",
              age: 21,
              grades: {
                assignments: [90, 88, 94, 92],
                midterm: 95,
                final: 91,
              },
              contact: {
                email: "emma.johnson@student.techglobal.edu",
                phone: "+1-555-0124",
                address: {
                  street: "789 Student Housing",
                  city: "Knowledge City",
                  zipCode: "12345",
                },
              },
              extracurriculars: [
                {
                  activity: "AI Research Group",
                  role: "Lead Researcher",
                  hoursPerWeek: 6,
                },
              ],
            },
          ],
        },
        {
          courseId: "CS502",
          title: "Database Systems",
          credits: 3,
          schedule: {
            days: ["Tuesday", "Thursday"],
            time: "2:00 PM - 3:30 PM",
            room: "Lab 305",
          },
          students: [
            {
              studentId: "ST1003",
              name: "Michael Chen",
              age: 22,
              grades: {
                assignments: [87, 91, 86, 88],
                midterm: 85,
                final: 90,
              },
              contact: {
                email: "michael.chen@student.techglobal.edu",
                phone: "+1-555-0125",
                address: {
                  street: "101 Student Housing",
                  city: "Knowledge City",
                  zipCode: "12345",
                },
              },
              extracurriculars: [
                {
                  activity: "Database Club",
                  role: "Secretary",
                  hoursPerWeek: 4,
                },
              ],
            },
          ],
        },
      ],
      facilities: {
        labs: [
          {
            name: "AI Research Lab",
            capacity: 50,
            equipment: ["Supercomputer", "GPU Clusters", "Robot Arms"],
          },
          {
            name: "Network Security Lab",
            capacity: 30,
            equipment: [
              "Cisco Routers",
              "Firewall Systems",
              "Network Analyzers",
            ],
          },
        ],
        libraries: {
          name: "CS Digital Library",
          books: 50000,
          onlineResources: true,
          subscriptions: ["IEEE", "ACM", "ScienceDirect"],
        },
      },
    },
  ],
  statistics: {
    totalStudents: 1200,
    totalFaculty: 45,
    researchFunding: 15000000,
    rankings: {
      world: 55,
      national: 12,
      byField: {
        computerScience: 8,
        engineering: 15,
        mathematics: 10,
      },
    },
  },
};

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

// 1. Extract all student names and their GPAs

function calculateGPA(assignments, midterm, final) {
  const assignmentAvg =
    assignments.reduce((a, b) => a + b) / assignments.length;
  const gpa = (assignmentAvg * 0.4 + midterm * 0.3 + final * 0.3) / 20;
  return gpa.toFixed(2);
}

console.log(universityData, "universitydata");

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

console.log("Students And GPAs:", studentsWithGPA);

// // 2. Create a list of all courses with their schedules
const courseSchedules = universityData?.departments.flatMap((department) =>
  department?.courses?.flatMap((course) => ({
    departmentName: course?.courseId,
    title: course?.title,
    credits: course?.credits,
    schedule: course.schedule,
  }))
);

console.log("Course Schedule:", courseSchedules);

// 3. Generate a faculty directory with contact information

const facultyDirectory = universityData.departments.map((department) => ({
  departmentName: department?.name,
  departmentId: department?.id,
  faculty: {
    name: department?.head?.name,
    id: department?.head?.id,
    email: department?.head?.email,
    qualifications: department?.head?.qualifications,
    researchAreas: department?.head?.researchAreas,
  },
}));

console.log("Faculty Directory:", facultyDirectory);
