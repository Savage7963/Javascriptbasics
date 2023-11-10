// nameofcourse="WEBDEVELOPMENT";
// cost=60000;
// aim="to gain knowledge";

// grouping 
let grouping={
    nameofcourse:"WEBDEVELOPMENT",
    cost:60000,
    aim:['to gain knowledge','to be better than before', 'to corelate the knowledge']
};

alert(grouping.nameofcourse);
alert(grouping.cost);
alert(grouping.aim[1]);

//custom command 
 function accessListItem(array,arrayIndex) {
    
    let arrayEelement=array[arrayIndex];
    return arrayEelement;
 };

 //execute your own custom command 

 let firstGoal= accessListItem(grouping.aim,0);
 alert(firstGoal);
 