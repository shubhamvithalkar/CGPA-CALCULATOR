// Example data sheet with course codes and their corresponding credit values
const courseDataSheet = {
    "CS101": 4,
    "MA101": 3,
    "PH101": 3,
    "CH101": 3,
    "HS101": 2,
    // Add more courses and credits as needed
};

// Function to generate course input fields
function generateCourseFields() {
    const totalCourses = document.getElementById('totalCourses').value;
    const courseFieldsContainer = document.getElementById('courseFields');
    courseFieldsContainer.innerHTML = '';

    for (let i = 0; i < totalCourses; i++) {
        const div = document.createElement('div');
        div.classList.add('input-field');

        const courseInput = document.createElement('input');
        courseInput.type = 'text';
        courseInput.placeholder = 'Course Code';
        courseInput.name = `course${i}`;
        div.appendChild(courseInput);

        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.placeholder = 'Grade';
        gradeInput.name = `grade${i}`;
        gradeInput.min = 0;
        gradeInput.max = 10;
        div.appendChild(gradeInput);

        courseFieldsContainer.appendChild(div);
    }
}

// Function to calculate CGPA
function calculateCGPA(event) {
    event.preventDefault();

    const totalCourses = document.getElementById('totalCourses').value;
    let totalCredits = 0;
    let totalWeightedGrades = 0;

    for (let i = 0; i < totalCourses; i++) {
        const courseCode = document.getElementsByName(`course${i}`)[0].value;
        const grade = parseFloat(document.getElementsByName(`grade${i}`)[0].value);

        if (courseDataSheet[courseCode]) {
            const credit = courseDataSheet[courseCode];
            totalCredits += credit;
            totalWeightedGrades += grade * credit;
        } else {
            alert(`Course code ${courseCode} not found in data sheet.`);
            return;
        }
    }

    const cgpa = totalWeightedGrades / totalCredits;
    document.getElementById('result').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
