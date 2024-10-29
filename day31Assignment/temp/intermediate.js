var universityData = {
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

//1. Calculate average grades for each course

// Grade distribution:
// A: 90 and above
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F: Below 60

const averageGradesForEachCourse = universityData.departments.flatMap(
  (department) =>
    department.courses.map((course) => {
      let totalStudents = course.students.length;
      if (totalStudents === 0) {
        return {
          courseId: course.courseId,
          courseName: course.title,
          totalStudents: 0,
          averages: {
            assignments: 0,
            midterm: 0,
            final: 0,
            overall: 0,
          },
          gradeDistribution: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            F: 0,
          },
        };
      }

      const studentWiseGradeSum = course.students.reduce(
        (acc, student) => {
          const assignmentAvg =
            student.grades.assignments.reduce((a, b) => a + b, 0) /
            student.grades.assignments.length;
          acc.assignments += assignmentAvg;
          acc.midterm += student.grades.midterm;
          acc.final += student.grades.final;
          const overall =
            (assignmentAvg + student.grades.midterm + student.grades.final) / 3;
          if (overall >= 90) {
            acc.gradeDistribution.A++;
          } else if (overall >= 80) {
            acc.gradeDistribution.B++;
          } else if (overall >= 70) {
            acc.gradeDistribution.C++;
          } else if (overall >= 60) {
            acc.gradeDistribution.D++;
          } else {
            acc.gradeDistribution.F++;
          }

          return acc;
        },
        {
          assignments: 0,
          midterm: 0,
          final: 0,
          gradeDistribution: { A: 0, B: 0, C: 0, D: 0, F: 0 },
        }
      );

      return {
        courseId: course.courseId,
        courseName: course.title,
        totalStudents: totalStudents,
        averages: {
          assignments: studentWiseGradeSum?.assignments / totalStudents,
          midterm: studentWiseGradeSum?.midterm / totalStudents,
          final: studentWiseGradeSum?.final / totalStudents,
          overall:
            (studentWiseGradeSum?.assignments +
              studentWiseGradeSum?.midterm +
              studentWiseGradeSum?.final) /
            (3 * totalStudents),
        },
        gradeDistribution: studentWiseGradeSum?.gradeDistribution,
      };
    })
);

console.log(averageGradesForEachCourse);
// OUTPUT: [
//     {
//       courseId,
//       courseName
//       totalStudents"
//       averages": {
//         "assignments",
//         "midterm",
//         "final",
//         "overall"
//       },
//       "gradeDistribution": {
//         "A": 1,
//         "B": 0,
//         "C": 0,
//         "D": 0,
//         "F": 0
//       }
//     },
//     {
//       "courseId",
//       "courseName",
//       "totalStudents",
//       "averages": {
//         "assignments",
//         "midterm",
//         "final",
//         "overall"
//       },
//       "gradeDistribution": {
//         "A": 0,
//         "B": 1,
//         "C": 1,
//         "D": 0,
//         "F": 0
//       }
//     }
//   ]
