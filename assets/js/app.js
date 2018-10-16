$(function(){

       // import Typed from 'typed.js';

        M.AutoInit();

        $('.sidenav').sidenav({
                draggable: true,
                preventScrolling: true
        });
     
        let options = {
                strings: ["My name is Jake Plaisted. I\'m currently attending the UNH Coding Bootcamp, studying full-stack development. Persuing my passions for technology. I have always been interested in computers ever since recieving my first computer, a hammy-downed  <i>Macintosh Classic 2</i> as a young kid. I have been playing with computers ever since, & Exploring their endless potential."],
                Speed: 150,
                contentType: 'html',
                showCursor: false,
                startDelay: 2500,
                smartBackspace: true
        }

        let typed = new Typed('.typed', options);

        AOS.init({
                duration: 1350,
                mirror: false
         });

         $('.modal').modal();

        /*End of File*/
});