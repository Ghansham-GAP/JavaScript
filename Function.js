const studMarks = [87,45,57,88,25];

function checkMarks(stud, marks){
    if(marks>=50){
        console.log("Student " +stud+ " Passed with marks : " +marks);
    }
    else{
        console.log("Student " +stud+ " Failed with marks : " +marks);
    }
}

for(let i = 0;i < studMarks.length;i++)
    {
        checkMarks(i+1,studMarks[i]);
    }