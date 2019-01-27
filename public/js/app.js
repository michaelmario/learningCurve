$(document).ready(function () {
  /**button on the navebar */
   const entTravail = $('#entTravail');       
  const gitGithub = $('#gitGithub');
  const openSource = $('#openSource');
  const versionCode = $('#versionCode');
  const environment = $('#environment');
  const  navbarArray = $('#navbarArray');
   let navarrow1 = $('#navarrow1');
  let quitter = $('#quitter');

  /**label output section */
  let firstlabel = $('#firstlabel');
  const buttonContainer = $('#buttonContainer');
  /**function to set preference background  */
 
     
    /** output label div*/
    const labelOutPut = $('#labelOutPut');
    const agilelabelOutPut = $('#agilelabelOutPut');
    const planifierlabelOutPut = $('#planifierlabelOutPut');
    const architecturelabelOutPut = $('#architecturelabelOutPut');
  let key = [];
  /**Create button submit */
  let butnSubmit = document.createElement('input');
  butnSubmit.type = "submit"; 
  butnSubmit.value = "Enregistre";
  butnSubmit.className ="btn btn-primary";
  butnSubmit.style.marginTop ="10px";
  butnSubmit.style.marginLeft ="0px";
  butnSubmit.style.cssFloat ="left";
  buttonContainer.append(butnSubmit);
  /**section to fade  */
  const home = $('#home');
  const LaPrairie = $('#LaPrairie');       
  const agileGestion = $('#agileGestion');
  const outPutSection = $('#outPutSection'); 
  const ArchiBasicApp = $('#ArchiBasicApp');
  const PlanifierTecProjet = $('#PlanifierTecProjet');
  const div = document.createElement('div');
  const h5 = document.createElement('h5');
  div.className = "card-body"; 
  div.id = "labelContent";
  div.append(h5);
   
  
  /**First button on the side nave   */
  const accueil = $('#accueil');
  accueil.click(() => {  
    home.slideDown("slow").addClass('animate');
   // maincardDisplay.;  
    h5.textContent="Accuail";
    labelOutPut.append(div); 
    LaPrairie.fadeOut();
    outPutSection.fadeIn();
    agileGestion.fadeOut();
    ArchiBasicApp.fadeOut();
    PlanifierTecProjet.fadeOut();
  });
  const msedt = $('#msedt');
    msedt.click(() => {  
    LaPrairie.slideDown("slow").addClass('animate');
   // maincardDisplay.;  
    h5.textContent="La Prairie";
    labelOutPut.append(div);   
    outPutSection.fadeIn();
    home.fadeOut();
    agileGestion.fadeOut();
    ArchiBasicApp.fadeOut();
    PlanifierTecProjet.fadeOut();
  });

  /**Second button side nave  */
  const amorproject = $('#amorproject');
  amorproject.click(() => {
     agileGestion.slideDown("slow").addClass('animate');     
    h5.textContent="Agiles de gestion & Amorsage de projet";
     agilelabelOutPut.append(div);
    LaPrairie.fadeOut();
    outPutSection.fadeOut();
    ArchiBasicApp.fadeOut();
    PlanifierTecProjet.fadeOut();
  });
  /**Therd button side nave */
  const ArchiBasicAppBtn = $('#ArchiBasicAppBtn');
  ArchiBasicAppBtn.click(() => {
    ArchiBasicApp.slideDown("slow").addClass('animate'); 
    h5.textContent="Architecture basique d'une application";
    architecturelabelOutPut.append(div);
    outPutSection.fadeOut();
    agileGestion.fadeOut();
    LaPrairie.fadeOut();
    PlanifierTecProjet.fadeOut();
  });
  /**fourt and last button side nave */
  const PtechniqueProjet = $('#PtechniqueProjet');
  PtechniqueProjet.click(() => {
    PlanifierTecProjet.slideDown("slow").addClass('animate'); 
    h5.textContent="Planifier techniquement un projet";
    planifierlabelOutPut.append(div);
    outPutSection.fadeOut();
    ArchiBasicApp.fadeOut();
    agileGestion.fadeOut();
    LaPrairie.fadeOut();
  }); 
  
  /**make the value of notes append on the screen */
  const notesRelease = $('#notesRelease');
  let notes = $('#notes');
  notes.on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    keyup: function () {
      notesRelease.html(notes.val());
    }
  });

  /**make values of mot cles lit  append on the screen  */
  const motClesRelease = $('#motClesRelease');
  let motCles = $('#motCles');
  motCles.on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    change: function () {
      let li = document.createElement('li');
      li.append(motCles.val());
      motClesRelease.append(li);
    }
  });
  /**make values of jdsavoir append on the screen */
  const jdsavoirRelease = $('#jdsavoirRelease');
  let jdsavoir = $('#jdsavoir');
  jdsavoir.on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    keyup: function () {
      jdsavoirRelease.html(jdsavoir.val());
    }
  });
  const jdfaireRelease = $('#jdfaireRelease');
  let jdsfaire = $('#jdsfaire');
  jdsfaire.on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    keyup: function () {
      jdfaireRelease.html(jdsfaire.val());
    }
  });
 
  /** selected data value by id */
  
  /**First Btn in row  La Prairie */
  entTravail.click((e)=>{
       environment.fadeIn();
       outPutSection.fadeOut();     
      let label = "Environnement de travail";
      h5.textContent="La Prairie";
      firstlabel.html(label)
      navarrow1.html("&#9652;");
      butnSubmit.id = "recordDataEdt";
      /**Record all data in localStorage  */
      const recordDataEdt = $('#recordDataEdt');
      recordDataEdt.type='submit';
      recordDataEdt.click((e) => {
        let entry = new Entry();
        entry = {
          label: label,
          notes: notes.val(),
          motCles: motCles.val(),
          jdsavoir: jdsavoir.val(),
          jdfaire: jdsfaire.val()
        };      
        Store.addEntry(entry); 
        outPutSection.fadeIn();       
      })
    
  });
  quitter.click((e) => {
    e.preventDefault();
    environment.fadeOut();
  });
  $("#accordion").accordion({
    collapsible: true
  });

  
 

  /**second Btn in row  La Prairie */
  gitGithub.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Initiation de git et github";
    firstlabel.html(label);
    butnSubmit.id = "recordDataGeg";
    /**Record all data in localStorage */
    const recordDataGeg = $('#recordDataGeg');
    recordDataGeg.click((e) => {
      let entry = {
        label: label,
        notes: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addEntry(entry);
    });
  });

  /**third Btn in row  La Prairie */
  openSource.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Project open source";
    firstlabel.html(label);
    butnSubmit.id = "recordDataPos";
    /**Record all data in localStorage */
    const recordDataPos = $('#recordDataPos');
    recordDataPos.click((e) => {
      let entry = {
        label: label,
        notes: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addEntry(entry);
    })

  });
  /**four Btn in row  La Prairie */
  versionCode.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Versioning le code";
    firstlabel.html(label);
    butnSubmit.id = "recordDataVlc";
    /**Record all data in localStorage  */
    const recordDataVlc = $('#recordDataVlc');
    recordDataVlc.click((e) => {
      let entry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addEntry(entry);
    });
  });
  /**Agile row btn */
    const agileIlodProjet = $('#agileIlodProjet');
    const agileDiviserPro = $('#agileDiviserPro');
    const agilecompétances = $('#agilecompétances');
    const agileDPlann = $('#agileDPlann');
    const agilePrincipes = $('#agilePrincipes');
    const agileCommunique = $('#agileCommunique');
    const agileFadaptation = $('#agileFadaptation');
    const agileCoordonner = $('#agileCoordonner');
    const agileSection = $('#agileSection'); 
    
  
  /** first btn in row Agiles de gestion  */  
  agileIlodProjet.click((e) => {
    e.preventDefault();
    environment.fadeIn();
     agileSection.fadeOut();
    let label = "Identifier les objectifs du project";
    firstlabel.html(label);
    butnSubmit.id = "agileProjet";
    /**Record all data in localStorage  */
    const agileProjet = $('#agileProjet');
    agileProjet.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      agileSection.fadeIn();
      console.log(key.length);
    });
  });
 agileDiviserPro.click((e) => {
  e.preventDefault();
  environment.fadeIn();
  agileSection.fadeOut();
  let label = "Diviser une problématique";
  firstlabel.html(label);
  butnSubmit.id = "diviserProblemaique";
  /**Record all data in localStorage  */
  const diviserProblemaique = $('#diviserProblemaique');
  diviserProblemaique.click((e) => {
    let agileEntry = {
      label: label,
      note: notes.val(),
      motCles: motCles.val(),
      jdsavoir: jdsavoir.val(),
      jdfaire: jdsfaire.val()
    };
    Store.addagileEntry(agileEntry);
    agileSection.fadeIn();
    console.log(key.length);
  });
}); 
 agilecompétances.click((e) => {
  e.preventDefault();
  environment.fadeIn();
  let label = "Déterminer les compétances et ressources";
  firstlabel.html(label);
  butnSubmit.id = "determinerCompetance";
  /**Record all data in localStorage  */
  const determinerCompetance = $('#determinerCompetance');
  determinerCompetance.click((e) => {
    let agileEntry = {
      label: label,
      note: notes.val(),
      motCles: motCles.val(),
      jdsavoir: jdsavoir.val(),
      jdfaire: jdsfaire.val()
    };
    Store.addagileEntry(agileEntry);
    console.log(key.length);
  });
}); 
  agileDPlann.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Définir un planning";
    firstlabel.html(label);
    butnSubmit.id = "definirPlanning";
    /**Record all data in localStorage  */
    const definirPlanning = $('#definirPlanning');
    definirPlanning.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      console.log(key.length);
    });
  }); 
  agilePrincipes.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Les principes AGILES";
    firstlabel.html(label);
    butnSubmit.id = "principesAgile";
    /**Record all data in localStorage  */
    const principesAgile = $('#principesAgile');
    principesAgile.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      console.log(key.length);
    });
  }); 
  agileCommunique.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Communique clairement avec des collaborateurs";
    firstlabel.html(label);
    butnSubmit.id = "CommuniqueClairement";
    /**Record all data in localStorage  */
    const CommuniqueClairement = $('#CommuniqueClairement');
    CommuniqueClairement.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      console.log(key.length);
    });
  }); 
  agileFadaptation.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Flexibilité et adaptation au changement";
    firstlabel.html(label);
    butnSubmit.id = "FlexibiliteAdaptation";
    /**Record all data in localStorage  */
    const FlexibiliteAdaptation = $('#FlexibiliteAdaptation');
   FlexibiliteAdaptation.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      console.log(key.length);
    });
  }); 
  
  agileCoordonner.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    let label = "Coordonner et manager des collaborateurs";
    firstlabel.html(label);
    butnSubmit.id = "CoordonnerManager";
    /**Record all data in localStorage  */
    const CoordonnerManager = $('#CoordonnerManager');
  CoordonnerManager.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      console.log(key.length);
    });
  });
  /**Planifier techniquement un projet row btn */ 
  const VocabulaireTec = $('#VocabulaireTec');
  const technologiesldApp = $('#technologiesldApp');
  const cernerProblemProjet = $('#cernerProblemProjet');
  const tecnoloAssApp = $('#tecnoloAssApp');
  const PlanifierTecSection = $('#PlanifierTecSection');
  const ArchitectureSection = $('#ArchitectureSection');


  /** first btn in row Planifier techniquement un projet  */  
  VocabulaireTec.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    ArchitectureSection.fadeOut();   
    let label = "Planifier techniquement un projet";
    firstlabel.html(label);
    butnSubmit.id = "techniqueProjet";
    /**Record all data in localStorage  */
    const techniqueProjet = $('#techniqueProjet');
    techniqueProjet.click((e) => {
      let archibasapp = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addArchibasapp(archibasapp);
      ArchitectureSection.fadeIn();
      console.log(key);
    });
  });
  technologiesldApp.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    ArchitectureSection.fadeOut();   
    let label = "connaissance des technologies et leurs domaines d'application";
    firstlabel.html(label);
    butnSubmit.id = "connaissanceTechn";
    /**Record all data in localStorage  */
    const connaissanceTechn = $('#connaissanceTechn');
    connaissanceTechn.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      agileSection.fadeIn();
      console.log(key.length);
    });
  });
  cernerProblemProjet.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    ArchitectureSection.fadeOut();   
    let label = "Cerner une problématique de projet";
    firstlabel.html(label);
    butnSubmit.id = "";
    /**Record all data in localStorage  */
    const CernerProProjet = $('#CernerProProjet');
    CernerProProjet.click((e) => {
      let agileEntry = {
        label: label,
        note: notes.val(),
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      agileSection.fadeIn();
      console.log(key.length);
    });
  });
  tecnoloAssApp.click((e) => {
    e.preventDefault();
    environment.fadeIn();
    PlanifierTecSection.fadeOut();   
    let label = "Identifier les technologies associées à une application";
    firstlabel.html(label);
    butnSubmit.id = "identifierTechnoasso";
    /**Record all data in localStorage  */
    const identifierTechnoasso= $('#identifierTechnoasso');
    identifierTechnoasso.click((e) => {
      let agileEntry = {
        label: label,
        motCles: motCles.val(),
        jdsavoir: jdsavoir.val(),
        jdfaire: jdsfaire.val()
      };
      Store.addagileEntry(agileEntry);
      agileSection.fadeIn();
      console.log(key.length);
    });
    
  });
/** box-message */
const message = $('#message');
let boxMessage = $('.boxMessage');
message.click((e) =>{
      boxMessage.css({"display":"block"});
  
  
 

});

 













});
