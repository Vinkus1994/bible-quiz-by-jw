/* questions.js
   Banque de données Questions + Thèmes (utilisée par Classique + Aventure)
   À charger AVANT index.html (script principal).
*/
(() => {
  window.THEMES = [
    { key:"Mixte", label:"Mixte", icon:"🔀", hint:"Toutes les questions (même déjà réussies)" },
    { key:"Croyance", label:"Croyance", icon:"📖", hint:"Doctrine / foi / vérités bibliques" },
    { key:"Qualités chrétiennes", label:"Qualités chrétiennes", icon:"💛", hint:"Amour, foi, patience..." },
    { key:"Jéhovah", label:"Jéhovah", icon:"✨", hint:"Nom, qualités, actions" },
    { key:"Jésus", label:"Jésus", icon:"👑", hint:"Vie, enseignements" },
    { key:"Bible", label:"Bible", icon:"📚", hint:"Livres, versets, structure" },
  ];

  window.QUESTIONS = [
    { id:"jw001", question:"Quelle est la qualité dominante de Jéhovah ?", answer:"Amour",
      options:["Amour","Joie","Patience","Bonté"], reference:"1 Jean 4:8", difficulty:2, type:"TROU", theme:"Jéhovah" },

    { id:"jw002", question:"Car Dieu a tellement aimé le monde qu’il a donné son Fils unique, afin que tous ceux qui exercent la ________ en lui ne soient pas détruits mais aient la vie éternelle.",
      answer:"Foi", options:["Foi","Patience","Miséricorde","Bonté"], reference:"Jean 3:16", difficulty:1, type:"QCM", theme:"Croyance" },

    { id:"jw003", question:"Marc a coupé l’oreille d’un serviteur du grand prêtre ?",
      answer:"Faux", options:["Vrai","Faux"], reference:"C’est Pierre qui coupa l’oreille du serviteur. – Jean 18:10",
      difficulty:1, type:"VF", theme:"Croyance" },

    { id:"jw004", question:"Mets les livres de la Bible dans l’ordre.",
      answer:"Juges | 1 Rois | 1 Chroniques | Néhémie | Lamentations | Daniel | Osée | Joël | Nahum | Sophonie",
      options:null, reference:"", difficulty:3, type:"ORDRE", theme:"Bible" },

    { id:"jw005", question:"Quel est le nom de Dieu ?",
      answer:"Jéhovah", options:["Jéhovah","Jean-Pierre","Allah","Jésus"], reference:"Psaume 83:18", difficulty:1, type:"QCM", theme:"Croyance" },

    { id:"jw006", question:"Qui est le fils unique de Dieu ?",
      answer:"Jésus", options:["Jésus","Adam","Gabriel","Marc"], reference:"Luc 22:29 ; Jean 3:16", difficulty:1, type:"QCM", theme:"Croyance" },

    { id:"jw007", question:"Quel est le premier livre de la Bible ?",
      answer:"Genèse", options:["Genèse","Révélation","Psaumes","Blanche neige"], reference:"", difficulty:1, type:"QCM", theme:"Bible" },

    { id:"jw008", question:"Combien de noms avait l'apôtre Pierre ?",
      answer:"5", options:["5","2","1","7"],
      reference:"Ses noms étaient Syméôn (hébreu), Simon (grec), Pierre, Céphas, Simon Pierre - Actes 15:14 ; Matthieu 10:2; 16:16 ; Jean 1:42",
      difficulty:2, type:"QCM", theme:"Bible" },

    { id:"jw009", question:"Combien y a-t-il d’Oints ?",
      answer:"144000", options:["144000","144001","144400","1"], reference:"Révélation 7:4 ; 14:1", difficulty:1, type:"QCM", theme:"Bible" },

    { id:"jw010", question:"Quel livre se trouve entre Michée et Habacuc ?",
      answer:"Nahum", options:["Nahum","Matthieu","Jonas","Zacharie"], reference:"", difficulty:3, type:"QCM", theme:"Bible" },

    { id:"jw011", question:"Dans quel domaine devons-nous être parfaits ?",
      answer:"En amour", options:["En amour","En toute chose","En richesse","Possible uniquement dans le paradis"],
      reference:"Matthieu 5:43-48", difficulty:4, type:"QCM", theme:"Croyance" },

    { id:"jw012", question:"Peux-tu mettre le fruit de l’esprit dans l’ordre ?",
      answer:"Amour | joie | paix | patience | bienveillance | bonté | foi | douceur | maîtrise de soi",
      options:null, reference:"Galates 5:22,23", difficulty:4, type:"ORDRE", theme:"Bible" },

    { id:"jw013", question:"Comment s’appelle le 8e roi de Juda ?",
      answer:"Joas", options:["Joas","Joram","Amazia","David"], reference:"2 Rois 12:1", difficulty:5, type:"QCM", theme:"Bible" },

    { id:"jw014", question:"L’omer est une unité de mesure. À combien équivaut un omer ?",
      answer:"2,2 litres", options:["2,2 litres","2 litres","1 litres","37 saisons et 797 épisodes"],
      reference:"Exode 16:16, note", difficulty:5, type:"QCM", theme:"Bible" },

    { id:"jw015", question:"Pourquoi Jésus est-il venu sur terre ?",
      answer:"Pour sanctifier son Père et nous sauver",
      options:[
        "Pour sanctifier son Père et nous sauver",
        "Parce qu'il s'ennuyait au ciel",
        "Pour nous sauver",
        "Parce qu'il voulait goûter la carbonnade flamande"
      ],
      reference:"Jean 3:16 ; Jean 17:16",
      difficulty:1,
      type:"QCM",
      theme:"Jésus"
    },

    { id:"jw016", question:"Quelle qualité est manifestée en Actes 20:35 ?",
      answer:"La générosité",
      options:["La générosité","La joie","La patience","La bonté"],
      reference:"Actes 20:35",
      difficulty:3,
      type:"QCM",
      theme:"Qualités chrétiennes"
    },
  ];
})();
