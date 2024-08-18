// Récupération detous les éléments

let email=document.querySelector("#email1");
console.log(email);

let inputpass1=document.querySelector("#motPass");
console.log(inputpass1);
let inputpass2=document.querySelector("#validationMotPass");
console.log(inputpass2);

let div=document.querySelector("#message");
console.log(div);

let nomPrenom = document.querySelector("#nom");
console.log(nomPrenom);

let tel = document.querySelector("#tel");
console.log(tel);

let ville= document.querySelector("#ville");
console.log(ville);

let nomEntreprise = document.querySelector("#nomEntreprise");
console.log(nomEntreprise);

let typeEntreprise = document.querySelector("#typeEntreprise");
console.log(typeEntreprise);

let bouton = document.querySelector("button");
console.log(bouton);

//condition des champ de saisie

email.addEventListener('keyup',()=>{ 
  const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,12}$/; 
  let vérification=regex.test(email.value);
  if(vérification==true){ 
    email.style.backgroundColor ="rgb(223,247,211)"; 
     div.innerText="votre adress email est valide 👍"   
     div.style.color="rgb(24,62,5)";
     div.style.backgroundColor ="rgb(223,247,211)";
     
   }
   else {
    email.style.backgroundColor ="rgb(247,211,211)"; 
     div.innerText="votre adress email n'est pas valide 👎"
      div.style.backgroundColor="rgb(247,211,211)";
    div.style.color="rgb(177,2,2)"
    bouton.disabled=true;
   }
  })
 


   inputpass1.addEventListener('keyup',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    let errorMessage ='';
    
    if(inputpass1.value.length<6){
      errorMessage+='Le Mot de passe trop court '
    }
    else if(inputpass1.value.length>12){
      errorMessage+=' Le Mot de passe trop LONG '
    }
  
    if(!inputpass1.value.match(charDecimal)){
      errorMessage+=' Le Mot de passe doit contenir 1 chiffre '
    }
    if(!inputpass1.value.match(charSpecial)){
      errorMessage+=' Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,) '
    }
    if(errorMessage!==''){

     div.innerText = `le mot de passe est :
      ${errorMessage}`;
        div.style.color="rgb(177,2,2)"
        div.style.backgroundColor="rgb(247,211,211)"
        div.style.marginTop="10px"
      console.log(div)
      bouton.disabled=true;
      inputpass1.style.backgroundColor ="rgb(247,211,211)"; 
    }
    else{
      div.innerText = 'Le mot de passe est valide ! 👍';
      div.style.backgroundColor ="rgb(223,247,211)";
      div.style.color="rgb(24,62,5)"
      inputpass1.style.backgroundColor ="rgb(223,247,211)"; 
    }
  });


  inputpass2.addEventListener('keyup',()=>{
  if(inputpass1.value!=inputpass2.value){
    div.innerText = 'vous vous êtes trompé dans la validation du mot de pass ! 👎';
    div.style.backgroundColor="rgb(247,211,211)";
    div.style.color="rgb(177,2,2)"
    bouton.disabled=true;
    inputpass2.style.backgroundColor ="rgb(247,211,211)"; 
     }
     else{
      div.innerText = 'validation du mot de pass correcte ! 👍';
      div.style.backgroundColor ="rgb(223,247,211)";
      div.style.color="rgb(24,62,5)"
      inputpass2.style.backgroundColor ="rgb(223,247,211)"; 
     }
    })

    nomPrenom.addEventListener('keyup',()=>{
      const reg2 = /^[a-zA-Z]{2,12}$/;
     
      let grosMot1='nique ta mère';
      let grosMot2='nique ta mere';
      let grosMot3='nique ton père';
      let grosMot4='nique ton pere';
      let grosMot5='conasse';
      let grosMot6='conase';
      let grosMot7='pute';
      let grosMot8='ta grand mere';
      let grosMot9='ta grand mère';
      let grosMot10='ton grand pere';
      let grosMot11='ton grand père';

      let vérif=reg2.test(nomPrenom.value);
      if(vérif==true){ 
        nomPrenom.style.backgroundColor ="rgb(223,247,211)"; 
        div.innerText="votre nom et valid 😊"
        div.style.color="rgb(24,62,5)";
        div.style.backgroundColor ="rgb(223,247,211)";
   
      }
      if(nomPrenom.value.match(grosMot1)||nomPrenom.value.match(grosMot2)||nomPrenom.value.match(grosMot3)
        ||nomPrenom.value.match(grosMot4)||nomPrenom.value.match(grosMot5)||nomPrenom.value.match(grosMot6)
      ||nomPrenom.value.match(grosMot7)||nomPrenom.value.match(grosMot8)||nomPrenom.value.match(grosMot9)
      ||nomPrenom.value.match(grosMot10)||nomPrenom.value.match(grosMot11)) {

        nomPrenom.style.backgroundColor ="rgb(247,211,211)"; 
        div.innerText="veuillez trouvez un autre nom 😰"
        div.style.backgroundColor="rgb(247,211,211)";
        div.style.color="rgb(177,2,2)"
        bouton.disabled=true;
      }
        })
    
        tel.addEventListener('keyup',()=>{ 
        const regex3 = /^[0-9]{10,10}$/; 
        let vérification4=regex3.test(tel.value);
        if(vérification4==true){ 
           tel.style.backgroundColor = "rgb(223,247,211)"; 
           div.innerText="votre numéro est valide"
           div.style.color="rgb(24,62,5)";
           div.style.backgroundColor ="rgb(223,247,211)";
         }
         else {
           tel.style.backgroundColor ="rgb(247,211,211)"; 
           div.innerText="votre numéro n'est pas valide"
           div.style.backgroundColor="rgb(247,211,211)";
           div.style.color="rgb(177,2,2)"
         }
        })

        ville.addEventListener('keyup',()=>{ 
          const regex4 = /^[A-Za-z-' ]{3,20}$/; 
          let vérification5=regex4.test(ville.value);
          if(vérification5==true){ 
             ville.style.backgroundColor = "rgb(223,247,211)"; 
             div.innerText="votre numéro est valide"
             div.style.color="rgb(24,62,5)";
             div.style.backgroundColor ="rgb(223,247,211)";
           }
           else {
             ville.style.backgroundColor ="rgb(247,211,211)"; 
             div.innerText="vous écrivez avec des carecteres interdit"
             div.style.backgroundColor="rgb(247,211,211)";
             div.style.color="rgb(177,2,2)"
           }
          })

    typeEntreprise.addEventListener('keyup',()=>{ 
      const regex5 = /^[A-Za-z]{2,4}$/; 
      let vérification5=regex5.test(typeEntreprise.value);
      if(vérification5==true){ 
          typeEntreprise.style.backgroundColor = "rgb(223,247,211)"; 
          div.style.color="rgb(24,62,5)";
          div.style.backgroundColor ="rgb(223,247,211)";
        }
      else {
          typeEntreprise.style.backgroundColor ="rgb(247,211,211)"; 
          div.innerText="vous écrivez avec des carecteres interdit"
          div.style.backgroundColor="rgb(247,211,211)";
          div.style.color="rgb(177,2,2)"
        }
    })

    nomEntreprise.addEventListener('keyup',()=>{ 
      const regex5 = /^[A-Za-z0-9-' ]{2,20}$/; 
      let vérification5=regex5.test(nomEntreprise.value);
      if(vérification5==true){ 
          nomEntreprise.style.backgroundColor = "rgb(223,247,211)"; 
          div.style.color="rgb(24,62,5)";
          div.style.backgroundColor ="rgb(223,247,211)";
        }

    })


if (nomPrenom.value=="" ||inputpass1.value=="" || inputpass2.value=="" || email.value ==""){
     bouton.disabled=true;
     bouton.style.backgroundColor='gray'
    }
else{
  bouton.disabled=false;
}
console.log(bouton.disabled)



  inputpass1.value = localStorage.getItem('pass1');
  inputpass2.value = localStorage.getItem('pass2');
  email.value = localStorage.getItem('mail');
  tel.value = localStorage.getItem('tel');
  nomPrenom.value = localStorage.getItem('nomPrenom');
  ville.value = localStorage.getItem('ville');
  nomEntreprise.value = localStorage.getItem('nomEntreprise');
  typeEntreprise.value = localStorage.getItem('typeEntreprise');
    

inputpass1.addEventListener("keyup", ()=> {
  localStorage.setItem('pass1',inputpass1.value);
  })

  inputpass2.addEventListener("keyup", ()=> {
    localStorage.setItem('pass2',inputpass2.value);
    })
email.addEventListener("keyup", ()=> {
    localStorage.setItem('mail',email.value);
  })

  tel.addEventListener("keyup", ()=> {
    localStorage.setItem('tel',tel.value);
    })

    nomPrenom.addEventListener("keyup", ()=> {
      localStorage.setItem('nomPrenom',nomPrenom.value);
      })

  
 ville.addEventListener("keyup", ()=> {
    localStorage.setItem('ville',ville.value);
 })

 nomEntreprise.addEventListener("keyup", ()=> {
      localStorage.setItem('nomEntreprise',nomEntreprise.value);
    })

typeEntreprise.addEventListener("keyup", ()=> {
      localStorage.setItem('typeEntreprise',typeEntreprise.value);
    })