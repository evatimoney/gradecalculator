function calculateGrade() {
    var assignmentGrade = parseFloat(document.getElementById("assignmentGrade").value);
    var assignmentPercentage = parseFloat(document.getElementById("assignmentPercentage").value);
    
    var overallPercentage = assignmentGrade * (assignmentPercentage / 100);
    
    document.getElementById("overallPercentage").textContent = "Overall Percentage: " + overallPercentage.toFixed(2) + "%";
    
    var overallGrade;
    
    if (overallPercentage >= 90) {
        overallGrade = 'A';
    } else if (overallPercentage >= 80) {
        overallGrade = 'B';
    } else if (overallPercentage >= 70) {
        overallGrade = 'C';
    } else if (overallPercentage >= 60) {
        overallGrade = 'D';
    } else {
        overallGrade = 'F';
    }
    
    document.getElementById("overallGrade").textContent = "Overall Grade: " + overallGrade;
    
    document.getElementById("result").style.display = "block";
}
