const stud = [87,45,57,88,25];

for(let i = 0;i < stud.length;i++)
{
    if(stud[i] >= 50){
        console.log("Student " +[i+1]+ " Passed with marks : " +stud[i]);
    }
    else{
        console.log("Student " +[i+1]+ " failed with marks : " +stud[i]);
    }
}