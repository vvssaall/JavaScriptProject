 //Array of zero element
 var maths=[];  


 function sortDesc() {
    maths.sort((a, b) => (b.result > a.result) ? 1 : -1)
    showData();
 }

function sortAsc(){
    maths.sort((a, b) => (a.result > b.result) ? 1 : -1)
    showData();
}

 function formatDate(date) {
      var d = new Date(date),
       month = '' + (d.getMonth() + 1),
       day = '' + d.getDate(),
       year = d.getFullYear();

     if (month.length < 2) 
           month = '0' + month;
       if (day.length < 2) 
       day = '0' + day;

     return [year, month, day].join('-');
 }

 //constructor function
 function AddNum(num1,num2,result,cdate){
    this.num1=num1;         
    this.num2=num2;         
    this.result=result;         
    this.cdate=formatDate(cdate);
 } 
 function clearData(){
   document.getElementById("message").innerHTML="";

 }

 function clearInput(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
 }
 function compute(){
     //int x=12
     //String str="owowowo";
     var num1=document.getElementById("num1").value;
     var num2=document.getElementById("num2").value;
     var num=parseInt(num1)+parseInt(num2);
     //Creating JavaScript object
     var obj=new AddNum(num1,num2,num,new Date());
     maths.push(obj);
     clearInput();
     showData();
     console.log(maths);
     document.getElementById("message").innerHTML="Hello your result is "+num;
 }

 function deleteRow(index){
    //delete the data  
    maths.splice(index, 1);
    //refresh the table
    showData();
 }

 //JavaScript code to render data inside table
 function showData() {
        var data="";
        var count=1;
        for(let x=0;x<maths.length;x++) {
            data=data+'<tr>';
             data=data+'<td>'+count+'</td>';
             data=data+'<td>'+maths[x].num1+'</td>';
             data=data+'<td>'+maths[x].num2+'</td>';
             data=data+'<td>'+maths[x].result+'</td>';
             data=data+'<td>'+maths[x].cdate+'</td>';
             data=data+'<td><a href="javascript:deleteRow('+x+');"><img src="img/delete.png"></a></td>';
             data=data+'<td><a href="javascript:editRow('+x+');"><img src="img/edit.png"></a></td>';
             data=data+'</tr>';
             count++;
        }

        //This is adding data inside  the object which id = tcontents
        //<tbody id="tcontents">
         
        //</tbody> 
        document.getElementById("tcontents").innerHTML=data;
 }
