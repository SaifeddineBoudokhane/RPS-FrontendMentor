(function(){

    const buttonRules=document.getElementById("rules-button");
    const modalRules=document.getElementById("rules-modal");
    const closeRules=document.getElementById("rules-close");

    buttonRules.addEventListener("click",()=>{
        modalRules.showModal();
    })

    closeRules.addEventListener("click",()=>{
        modalRules.close();
    })
    
})()