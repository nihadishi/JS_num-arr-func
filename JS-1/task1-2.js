let i=3;
while (i!=0) {
    let newStudent = prompt('Enter the name of the new student!');
    newStudent = newStudent.trim();
    if(newStudent) {
    alert(`Welcome ${newStudent}!`);
    }
    i--;
    }