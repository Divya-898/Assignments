const date=new Date();

const renderCalendar=()=>{
	const monthDays=document.querySelector(".days");
    const lastDays= new Date(date.getFullYear(),date.getMonth()+1,0).getDate();//to get last date of current month
    console.log("last day"+lastDays);//30
    const prevLastdays=new Date(date.getFullYear(),date.getMonth(),0).getDate();//last date of previous month
    console.log("prev days"+prevLastdays)//31
    //return the index of week
    const firstday= new Date(date.getDay()+4);//first date day of current month
    console.log(firstday)
    const lastDayIndex=new Date(date.getFullYear(),date.getMonth(),0).getDay();//1
    console.log("last day index"+lastDayIndex)
    const nextDays= 7+lastDayIndex-5;
const months=[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
 ];
 
//to get current month

  document.getElementById("date-h").innerHTML
  =months[date.getMonth()]; 
   document.getElementById("para").innerHTML
  = date.getFullYear();;
  // to get current date string form
  document.querySelector('span').innerHTML
  = new Date().toDateString();
  
   let days="";
  //to print last month of the date 30,31
  for(let x=firstday;x>0;x--){
	days+=`<div class="prev-date">${prevLastdays-x+1}</div>`
	monthDays.innerHTML=days;
}
   for(let i=1;i<=lastDays;i++){
	if(i===new Date().getDate() && date.getMonth()===new Date().getMonth())
	{
		days+=`<div class="today">${i}</div>`
	}
	else{
		days+=`<div>${i}</div>`
	}
}
 for(let j=1;j<=nextDays;j++){
	days+=`<div class="next-date">${j}</div>`
	monthDays.innerHTML=days;
}
}
//go to the previous section
document.querySelector(".prev").addEventListener('click',()=>{
	date.setMonth(date.getMonth()-1)
	 renderCalendar();
});
//next section
document.querySelector(".next").addEventListener('click',()=>{
	date.setMonth(date.getMonth()+1)
	renderCalendar();
});
renderCalendar();