function calculateGrade() {
    var studentName = document.getElementById("studentName").value;
    var totalMarks = parseFloat(document.getElementById("totalMarks").value);
    var obtainedMarks = parseFloat(document.getElementById("obtainedMarks").value);
    
    var percentage = (obtainedMarks / totalMarks) * 100;
    
    document.getElementById("percentage").textContent = "Percentage: " + percentage.toFixed(2) + "%";
    
    var grade;
    
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    document.getElementById("grade").textContent = "Grade: " + grade;
    
    document.getElementById("result").style.display = "block";
}
