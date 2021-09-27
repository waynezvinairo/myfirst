//images auto slides starts here//
var i=0;
var images=[];
var time= 3000;

images[0]='borehole.png';
images[1]='borehole1.jpg';
images[2]='cover.jpg';

function changeImg(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout ('changeImg()',time);
}
window.onload = changeImg;
//images auto slides ends here//

//form validation starts//
 function validate(){
 	firstName = document.myform.firstName.value;
 	lastName = document.myform.lastName.value;

 	if(name=='' || name.length<1){
 		alert('Enter a valid name');
 		return false;
 	}
 } 
 //form validation ends//

//manual image slides starts//

//manual image slides ends//