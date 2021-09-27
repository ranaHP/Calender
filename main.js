// "use strict";
class Calender{
    date = new Date();
    current_month = 9;
    current_year = 2021;
    event = [
        {
            date: 1,
            events: [
                {
                    title: 'Corona clinic',
                    desc: ' ABCD ',
                },
                {
                    title: 'Corona clinic',
                    desc: ' ABCD ',
                },
                {
                    title: 'Corona clinic',
                    desc: ' ABCD ',
                },
                
                {
                    title: 'Corona clinic',
                    desc: ' ABCD ',
                }
            ]
        },
        {
            date: 5,
            events: [
                {
                    title: 'D clinic',
                    desc: ' ABCD ',
                },
                
                {
                    title: 'E clinic',
                    desc: ' ABCD ',
                }
            ]
        },
        {
            date: 24,
            events: [
                {
                    title: 'D clinic',
                    desc: ' ABCD ',
                },
                
                {
                    title: 'D clinic',
                    desc: ' ABCD ',
                },
                
                {
                    title: 'E clinic',
                    desc: ' ABCD ',
                }
            ]
        }
    ]

    constructor(contaienrName){
        this.container = document.getElementById(contaienrName);
        this.init();
    }
    
    init(){
        let calender = document.createElement('div');
        calender.classList.add('calender');
       
        calender.appendChild(this.createMothYear());
        calender.appendChild(this.createDaysContainer());
        this.container.appendChild(calender);
        this.addCalenderEvents();
    }

    getDateCount( year, month){
        return 32 - new Date(year, month-1, 32).getDate();
    }

    getStartDate( year, month){
        return (new Date(year, month-1)).getDay();
    }
    createMothYear(){
        // create month year container
        let month_year_container = document.createElement('div');
        month_year_container.classList.add("month-year-container");
        // create left arrow button

        // let arrow_left = document.createElement('i');
        // arrow_left.setAttribute("data-feather" ,"arrow-left-circle" );
        let arrow_left = document.createElement('div');
        arrow_left.innerHTML = '<i data-feather="arrow-left-circle"></i>';
        // create month year title
        let month_year_title = document.createElement('span');
        month_year_title.innerText = "March 2021";
        // create right arrow button
        let arrow_right = document.createElement('i');
        arrow_right.setAttribute("data-feather" ,"arrow-right-circle" );

        // append to month year contaienr
        month_year_container.appendChild(arrow_left);
        month_year_container.appendChild(month_year_title);
        month_year_container.appendChild(arrow_right);

        // return moth year container
        return month_year_container;
        
    }

    createDaysContainer(){

        // create days container
        let days_container = document.createElement('div');
        days_container.classList.add("days-container"); // add class 
        // create day names set
        let days_names = document.createElement("div");
        days_names.classList.add("days-name");

        let dayName = [ 'S' , 'M' , 'T' , 'W' , 'T' , 'F' , 'S'];
        dayName.map( m => {
            // create day name
            let name = document.createElement("div");
            name.innerText = m;
            name.classList.add("d-name");
            // append to days name contaienr
            days_names.appendChild(name);
        });

        // append days name to day container
        days_container.appendChild(days_names);
        days_container.appendChild(this.createDays());
        // return days name container
        return days_container;
     }

     createDays(){
        // carete div for days contaienr 
        let days = document.createElement('div');
        days.classList.add('days');
        let startDate = this.getStartDate(this.current_year, this.current_month);
        let lastMonthLastDate = this.getDateCount(this.current_year, this.current_month-1);
        let currentDate = 1;
        let nextMonthDate = 1;
        let temp = startDate - 1 ;
        for(let i  = 1 ; i <= 35; i++){
        // crete div for date
        let day = document.createElement('div');
        day.classList.add("date");
            if(i <= startDate){
                // set day number
                day.innerText = lastMonthLastDate -temp ;
                temp--;
                // add dynamic id
                // day.id = "date"+i;
            }else if(i > startDate && currentDate <= this.getDateCount(this.current_year, this.current_month) ){      
                // set day number
                day.innerText = currentDate;
                // add dynamic id
                day.id = "date"+currentDate;

                // check date to today
                if(currentDate == this.date.getDate()){
                    day.classList.add("today");
                }else{
                    day.classList.add("currentMonthday");
                }
                currentDate++;
                
            }else {
                // set day number
                day.innerText = nextMonthDate;
                nextMonthDate++;
                // add dynamic id
                // day.id = "date"+i;
            }

            
        
            // append date to day conatiner
            days.appendChild(day);
             
        }

        // return days 
        return days;
     }

     addCalenderEvents(){
        this.event.map( eventItem => {
            let day = document.getElementById("date"+ eventItem.date);
            console.log(JSON.stringify([eventItem]))
            day.setAttribute("onclick", 'popup.showCalenderEnvetPopup(' + JSON.stringify([eventItem]) + ')');
            // day.setAttribute("onclick", "asdasd('" + eventItem  + "')");
            let badge = document.createElement('div');
            badge.classList.add('badge');
            badge.innerText = eventItem.events.length;
            day.appendChild(badge);
        } )    
    }
}

