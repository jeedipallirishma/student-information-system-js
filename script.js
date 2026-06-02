// student info project
// students 


const student1 = {
    id:1,
    name:"rishma",
    college:"MRCE",
    attendance:95,
    courses:"b.tech",
    stream:"data science",
    project:"major project",
    marks:90
};

const student2 = {
    id:2,
    name:"rithish",
    college:"MRCE",
    attendance:80,
    courses:"b.tech",
    stream:"data science",
    project:"minor project",
    marks:78
};
const student3 = {
    id:3,
    name:"rithu",
    college:"MRCE",
    attendance:45,
    courses:"b.tech",
    stream:"data science",
    project:"major project",
    marks:28
};


// creating array



const students=[student1,student2,student3];

// selecting elements

const output = document.getElementById("output");

const button = document.getElementById("showBtn");

// button click event

button.addEventListener("click", function() {

    output.innerHTML = "";

    students.forEach(function(student){

        output.innerHTML += "ID: " + student.id + "<br>";

        output.innerHTML += "Name: " + student.name + "<br>";

        output.innerHTML += "College: " + student.college + "<br>";

        output.innerHTML += "Attendance: " + student.attendance + "<br>";

        output.innerHTML += "Course: " + student.courses + "<br>";

        output.innerHTML += "Stream: " + student.stream + "<br>";

        output.innerHTML += "Project: " + student.project + "<br>";

        output.innerHTML += "Marks: " + student.marks + "<br>";

        output.innerHTML += "------------------- <br>";

    });

});
// display student names

students.forEach(function(student){
    output.innerHTML += student.id + "<br>";
    output.innerHTML += student.name + "<br>";
    output.innerHTML += student.college + "<br>";
    output.innerHTML += student.attendance + "<br>"
    output.innerHTML += student.courses + "<br>";
    output.innerHTML += student.stream + "<br>";
    output.innerHTML += student.project + "<br>";
    output.innerHTML += student.marks + "<br>";
});


// function to show students




function showStudent(student){
    output.innerHTML += student.name + "<br>";
    output.innerHTML += student.courses + "<br>";
    output.innerHTML += student.project + "<br>";

    
};

// show students separately


showStudent(student1);
showStudent(student2);
showStudent(student3);


//conditional statements




students.forEach(function(student){

    if(student.marks >= 90){
        output.innerHTML += student.name + " " + " got A grade"+"<br>";
    }

    else if(student.marks >= 70){
       output.innerHTML += student.name + " " + " got B grade"+"<br>";
    }

    else if(student.marks >= 35){
        output.innerHTML += student.name + " " + " got C grade"+"<br>";
    }

    else{
       output.innerHTML += student.name + " " + "failed"+"<br>";
    }

});





students.forEach(function(student){

    if(student.attendance >= 90){
        output.innerHTML +=  student.name + " " + " high attendance"+"<br>";
    }

    else if(student.attendance >=50){
        output.innerHTML +=  student.name + " " + " average attendance"+"<br>";
    }

    else if(student.attendance >= 35){
       output.innerHTML +=  student.name + " " + " low attendance"+"<br>";
    }

    else{
        output.innerHTML +=  student.name + " " + "debar"+"<br>";
    }

});


// add new student

students.push({
    id:4,
    name:"kiran",
    college:"MRCE",
    attendance:63,
    courses:"b.tech",
    stream:"data science",
    project:"major project",
    marks:47
});


let total=0;
students.forEach(function(student){
    total = total + student.marks;
});
avg_marks=total/students.length;
output.innerHTML += "average_marks:"+ avg_marks + "<br>";


//loop


for(let i = 0; i < students.length; i++){

    output.innerHTML += students[i].id + "<br>";
    output.innerHTML += students[i].name + "<br>";
    output.innerHTML +=  students[i].college + "<br>";
    output.innerHTML += students[i].attendance + "<br>";
    output.innerHTML += students[i].courses + "<br>";
    output.innerHTML += students[i].stream + "<br>";
    output.innerHTML += students[i].project + "<br>";
    output.innerHTML += students[i].marks + "<br>";

}

