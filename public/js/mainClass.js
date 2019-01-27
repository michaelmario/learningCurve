

class Entry {
   constructor(label,notes,motCles,jdsavoir,jdsfaire) {
       this.label= label,
       this.notes = notes,
       this.motCles= motCles,
       this.jdsavoir= jdsavoir,
       this.jdfaire = jdsfaire 
      }
    }
    // UI Class: Handle UI Tasks
class UI {

  static displayEntrys() {
    const entrys = Store.getEntrys();
    entrys.forEach((entry) => UI.addElEntry(entry));

  }
  static displayAgileEntrys() {
    const agileEntrys = Store.getAgileEntrys();
    agileEntrys.forEach((agileEntry) => UI.addagileEntry(agileEntry));
  }
  static displayArchibasapp() {
    const archibasapps = Store.getArchibasapps();
    archibasapps.forEach((archibasapp) => UI.addArchibasapp(archibasapp));
  }
  /*static getmodal(){
    function ajaxObj( meth, url ) {
        var x = new XMLHttpRequest();
        x.open( meth, url, true );
        x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        return x;
    }
    function ajaxReturn(x){
        if(x.readyState == 4 && x.status == 200){
            return true;	
        }
    }    
  var ajax = ajaxObj("GET", "modal.html");
       ajax.send();
        ajax.onreadystatechange = function() {
          if(ajaxReturn(ajax) == true) {
        var response = ajax.responseText;
        if(response == "success"){
        
      }
    }
    let modal = document.getElementById('refmodal');
         modal.innerHTML=response;
   
  }
  }*/
  
   
  
 
  /** First   static row array ENTRY La Prairie */
  static addElEntry(entry) {
    const card = document.querySelector('#outputContent');
    const btnClose = document.createElement('button');
    btnClose.className = "w3-button w3-khaki delete";
    btnClose.innerHTML = 'supprimer <span><i class="fa fa-trash"></i></span>';
    const div = document.createElement('div');
    const theFirstChild = div.firstChild;
    div.innerHTML = `
      <ul>
      <li><label><strong><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-Orange"></i>${entry.label}</strong></label> </li>
      <li><label><strong>Notes:</strong></label> ${entry.notes}</li>
      <li><label><strong>Les mots clés :</strong></label> ${entry.motCles}</li>
      <li><label><strong>Ce que je dois savoir :</strong></label> ${entry.jdsavoir}</li>
      <li><label><strong>Ce que je dois savoir faire :</strong></label> ${entry.jdfaire}</li></ul>`;
   
    div.append(btnClose);
    card.appendChild(div);
    btnClose.addEventListener('click', (e) => {     
      let Entrys = Store.getEntrys('entrys'); 
      let keys = localStorage.key('entrys');      
       for(var key in Entrys){
        if(Entrys.hasOwnProperty(key)){
       var entryIndex =  Entrys.filter(function(value,index,array){
         let target = e.currentTarget.parentNode; 
         var remove = Entrys.slice(target[0]);
         return array.indexOf(value) == index; 
          }); 
          localStorage.removeItem(key);         
          }      
        } 
        div.parentNode.removeChild(div);
     
       /*for(var i = 0 ; i > Entrys.length; i++);
            console.log(Entrys[i].label);*/    
     
      
     // */
    });
  }
  /**Second row array agileEntry Agiles de gestion */
  static addagileEntry(agileEntry) {
    const card = document.querySelector('#agileOutPut');
    const btnClose = document.createElement('button');
    btnClose.className = "w3-button w3-khaki delete";
    btnClose.innerHTML = 'supprimer <span><i class="fa fa-trash"></i></span>';
    const h2label = document.createElement('h3');
    h2label.className = "w3-text-Orange w3-padding-16";
    h2label.innerHTML = `<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-Orange"></i> ${agileEntry.label}`;
    const div = document.createElement('div');
    var theFirstChild = div.firstChild;
    div.innerHTML = `
      <p><label><strong>Notes:</strong></label> ${agileEntry.note}</p>
      <p><label><strong>Les mots clés :</strong></label> ${agileEntry.motCles}</p>
      <p><label><strong>Ce que je dois savoir :</strong></label> ${agileEntry.jdsavoir}</p>
      <p><label><strong>Ce que je dois savoir faire :</strong></label> ${agileEntry.jdfare}</p>`;
    card.insertBefore(h2label, theFirstChild);
    div.append(btnClose);
    card.appendChild(div);

    /**button to remove agileEntry  */
    btnClose.addEventListener('click', (e) => {
      const AgileEntrys = Store.getAgileEntrys();
      let target = e.currentTarget.parentNode;
      let keys = localStorage.key(target);
      AgileEntrys.forEach((key, index) => {
        if (key === keys) {
          agileEntrys.splice(index, 1);
          localStorage.clear(key);
        }
      });
      div.parentNode.removeChild(div);
    });
  }
/**theird  row array archibasicsapp  */
static addArchibasapp(archibasapp) {
  const card = document.querySelector('#ArchitectureOutPut');
  const btnClose = document.createElement('button');
  btnClose.className = "btn btn-outline-success  delete";
  btnClose.innerHTML = 'supprimer <span><i class="fa fa-trash"></i></span>';
  const h2label = document.createElement('h3');
  h2label.className = "text-Orange";
  h2label.innerHTML = `<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-Orange"></i> ${agileEntry.label}`;
  const div = document.createElement('div');
  var theFirstChild = div.firstChild;
  div.innerHTML = `
    <p><label><strong>Notes:</strong></label> ${archibasapp.note}</p>
    <p><label><strong>Les mots clés :</strong></label> ${archibasapp.motCles}</p>
    <p><label><strong>Ce que je dois savoir :</strong></label> ${archibasapp.jdsavoir}</p>
    <p><label><strong>Ce que je dois savoir faire :</strong></label> ${archibasapp.jdfare}</p>`;
  card.insertBefore(h2label, theFirstChild);
  div.append(btnClose);
  card.appendChild(div);

  /**button to remove agileEntry  */
  btnClose.addEventListener('click', (e) => {   
    let target = e.currentTarget.parentNode;
    let keys = localStorage.key(target);
    div.parentNode.removeChild(keys);
  });
}
/*static displayRow() {
  environment.style.display ='none';
  LaPrairie.style.display ='none';
  agileGestion.style.display ='none';
 ArchiBasicApp.style.display ='none';
  PlanifierTecProjet.style.display ='none';
  //outPutSection.style.display = 'none';
 
}*/

}
// Store Class: Handles Storage
class Store {
  static getEntrys() {
    let entrys;
    if (localStorage.getItem('entrys') === null) {
      entrys = [];
    } else {
      entrys = JSON.parse(localStorage.getItem('entrys'));
    }
    return entrys;
  }
  static getAgileEntrys() {
    let agileEntrys;
    if (localStorage.getItem('agileEntrys') === null) {
      agileEntrys = [];
    } else {
      agileEntrys = JSON.parse(localStorage.getItem('agileEntrys'));
    }

    return agileEntrys;
  }
  static getArchibasapps() {
    let archibasapps;
    if (localStorage.getItem('archibaseapps') === null) {
      archibasapps = [];
    } else {
      archibasapps = JSON.parse(localStorage.getItem('archibasapps'));
    }

    return archibasapps;
  }

  static addEntry(entry) {
    const db = firebase.database().ref().child();
    db.push(entry);
    const entrys = Store.getEntrys();
    entrys.push(entry);
    localStorage.setItem('entrys', JSON.stringify(entrys));
  }
  static addagileEntry(agileEntry) {
    const agileEntrys = Store.getAgileEntrys();
    agileEntrys.push(agileEntry);
    localStorage.setItem('agileEntrys', JSON.stringify(agileEntrys));
  }
  static addArchibasapp(archibasapp) {
    const archibasapps = Store.getArchibasapps();
    archibasapps.push(archibasapp);
    localStorage.setItem('archibasapp', JSON.stringify(archibasapps));
  }
}
// Event: Display 
/*document.addEventListener('DOMContentLoaded', function () {
  UI.displayEntrys();
  UI.displayAgileEntrys();
  UI.displayArchibasapp();
  //UI.getmodal();
  UI.displayRow();
});
*/
// function apparence 
function toggleClass(el){
 let nav = document.getElementById('navMain');
 let listItemAction = document.getElementById('relmyList');
 let mainCardHome = document.getElementById('mainCard-home');
 let homeCard = document.getElementById('homeCard');
 let homeCard2 = document.getElementById('homeCard2');
 let  relmyList = document.getElementById('relmyList');
 
    switch (el.id) {
    case 'Lumiere': 
     nav.style.backgroundColor ='#ccc';
     nav.style.color ="#000";
     listItemAction.style.backgroundColor= "#ccc";
     listItemAction.style.color = '#fff'; 
     mainCardHome.style.backgroundColor="#ccc";
     mainCardHome.style.color="#000";
     mainCardHome.style.borderTop="20px solid #fff"
     homeCard.style.color="#000";
     homeCard2.style.color="#000";      
    break;
    case 'Fonce':
    nav.style.backgroundColor ='#000';
    nav.style.color ="#fff"; 
    listItemAction.style.backgroundColor= "#000";
    listItemAction.style.color = '#fff';
    relmyList.style.color = '#fff';
    mainCardHome.style.backgroundColor="#000"; 
    mainCardHome.style.color="#fff";
    mainCardHome.style.borderTop="20px solid #fff"
    homeCard.style.color="#000";
    homeCard2.style.color="#000";       
    break;
    default:
    nav.style.backgroundColor='orangered';
    nav.style.color="#fff";
    listItemAction.style.backgroundColor= "#fff";
    listItemAction.style.color = '#000';
    mainCardHome.style.backgroundColor="khaki"; 
    mainCardHome.style.color="#000";
    mainCardHome.style.borderTop="20px solid orangered"
    homeCard.style.color="#000";
    homeCard2.style.color="#000";  
     
  }
   
}








  

