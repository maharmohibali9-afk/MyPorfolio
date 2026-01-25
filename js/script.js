   
    const tablinks =  document.getElementsByClassName("tab-links");
    const tabcontents =  document.getElementsByClassName("tab-contents");


    function  opentab(tabname) {
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
                    
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        
    }


var Sidemenu= document.getElementById("sidemenu");

    function openmenu(){
        Sidemenu.style.right = "0";
    }

    function openmenu(){
        Sidemenu.style.right = "-200px";
    }


    const scriptURL  ="#";


    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");


    form.addEventListener('submit', e =>{
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent succesfully";
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.meassage))
    })










    