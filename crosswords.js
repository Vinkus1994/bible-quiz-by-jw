/* crosswords.js
   Banque de données "Mots croisés" (grilles)
   À charger AVANT ton script principal.
*/
(() => {
  window.CROSSWORD_BANKS = [
    {
      key: "grille1",
      title: "Grille 1",
      subtitle: "",
      items: [
        { id:"q01", clue:"Si nous profitons de la délivrance qui nous est offerte par Jésus, nous ne le serons plus [en trois mots] (Romains 6:6).", answer:"ESCLAVES DU PÉCHÉ" },
        { id:"q02", clue:"Personne qui a fait des études et qui exerçait bien souvent la fonction de notaire public (Juges 5:14).", answer:"SCRIBE" },
        { id:"q03", clue:"Petit-fils d’Aaron (Exode 6:25).", answer:"FINEAS" },
        { id:"q04", clue:"A exprimé sa gaieté (Genèse 18:15).", answer:"RI" },
        { id:"q05", clue:"Dans une expression signifiant: sans en avoir conscience (Hébreux 13:2).", answer:"INSU" },
        { id:"q06", clue:"Colorées (Exode 25:5).", answer:"TEINTES" },
        { id:"q07", clue:"Femme de haute naissance (1 Rois 15:13).", answer:"DAME" },
        { id:"q08", clue:"Cinquième fils de Gad (Genèse 46:16).", answer:"ÉRI" },
        { id:"q09", clue:"Cuir (Lévitique 4:11).", answer:"PEAU" },
        { id:"q10", clue:"Sec (Jérémie 50:12).", answer:"ARIDE" }
      ]
    },
    {
      key: "grille2",
      title: "Grille 2",
      subtitle: "",
      items: [
        { id:"q01", clue:"Paul priait pour que ses frères le reçoivent [en trois mots] (Éphésiens 1:17).", answer:"ESPRIT DE SAGESSE" },
        { id:"q02", clue:"Il peut être joyeux (Psaume 105:43).", answer:"CRI" },
        { id:"q03", clue:"Accablerez (Job 19:2).", answer:"ÉCRASEREZ" },
        { id:"q04", clue:"Symbolise parfois la justice (Révélation 19:8).", answer:"LIN" },
        { id:"q05", clue:"Ardeur (Luc 23:10).", answer:"AGRESSIVITE" },
        { id:"q06", clue:"Dette (1 Corinthiens 7:3).", answer:"DÛ" },
        { id:"q07", clue:"Se servant (Exode 38:8).", answer:"UTILISANT" },
        { id:"q08", clue:"Mesure de poids (1 Samuel 13:21).", answer:"PIM" },
        { id:"q09", clue:"Ancien nom de la Babylonie (Genèse 10:10).", answer:"SHINEAR" },
        { id:"q10", clue:"Qui ne saurait décevoir (Néhémie 7:2).", answer:"CONFIANCE" }
      ]
    },

    {
      key: "grille3",
      title: "Grille 3",
      subtitle: "",
      items: [
        { id:"q01", clue:"En témoignant une vive sympathie (1 Corinthiens 16:19).", answer:"CHALEUREUSEMENT" },
        { id:"q02", clue:"S’il s’est émoussé, il faudra l’aiguiser (Ecclésiaste 10:10).", answer:"OUTIL" },
        { id:"q03", clue:"Une prophétesse âgée qui a vu l’enfant Jésus dans le temple (Luc 2:36, 38).", answer:"ANNE" },
        { id:"q04", clue:"L’un des hommes forts de David (1 Chroniques 11:10, 29).", answer:"ILAÏ" },
        { id:"q05", clue:"Comme les pierres que David a choisies pour tuer Goliath (1 Samuel 17:40).", answer:"LISSES" },
        { id:"q06", clue:"Ce qu’Absalom faisait chaque année de son abondante chevelure (2 Samuel 14:26).", answer:"RASER" },
        { id:"q07", clue:"Se débarrassa (Genèse 38:14).", answer:"ENLEVA" },
        { id:"q08", clue:"Tout à fait ordinaire (en deux mots) (2 Timothée 2:20).", answer:"PAS HONORABLE" },
        { id:"q09", clue:"Négation (Éphésiens 5:6).", answer:"NE" },
        { id:"q10", clue:"Enchaîner (Psaume 149:8).", answer:"LIER" }
      ]
    },
    {
      key: "grille4",
      title: "Grille 4",
      subtitle: "",
      items: [
        { id:"q01", clue:"Joie débordante et collective (Proverbes 11:10).", answer:"REJOUIT" },
        { id:"q02", clue:"Rendre gloire (Deutéronome 15:19).", answer:"SANCTIFIERAS" },
        { id:"q03", clue:"Animal répugnant (Isaïe 66:17).", answer:"SOURIS" },
        { id:"q04", clue:"Lui, c’est Édom (Genèse 36:1).", answer:"ÉSAÜ" },
        { id:"q05", clue:"Claudiquant (1 Rois 18:26).", answer:"BOITER" },
        { id:"q06", clue:"Se sont moqués (ont) (Lamentations 1:7).", answer:"RI" },
        { id:"q07", clue:"Affirmation (1 Corinthiens 1:16).", answer:"SI" },
        { id:"q08", clue:"Concubine de Nahor le frère d’Abraham (Genèse 22:20, 24).", answer:"RÉOUMA" },
        { id:"q09", clue:"Inculte (Isaïe 32:2).", answer:"ARIDE" },
        { id:"q10", clue:"Principe vital (Psaume 32:4) - note.", answer:"SEVE" }
      ]
    },
    {
      key: "grille5",
      title: "Grille 5",
      subtitle: "",
      items: [
        { id:"q01", clue:"Conjonction négative (1 Corinthiens 6:9).", answer:"NI" },
        { id:"q02", clue:"Inscrire dans une comptabilité (Nombres 1:49).", answer:"RELEVER" },
        { id:"q03", clue:"Donne en retour (Proverbes 17:13).", answer:"REND" },
        { id:"q04", clue:"Possède (Deutéronome 4:7).", answer:"AIT" },
        { id:"q05", clue:"Plus bas (Luc 8:16).", answer:"SOUS" },
        { id:"q06", clue:"Il peut être plaintif (Genèse 18:20).", answer:"CRI" },
        { id:"q07", clue:"Un chrétien ne doit pas se glorifier par elles (Romains 3:27).", answer:"ŒUVRES" },
        { id:"q08", clue:"Père des Houppim (1 Chroniques 7:12).", answer:"IR" },
        { id:"q09", clue:"Dans une expression signifiant chacun à son tour (1 Corinthiens 14:27).", answer:"RÔLE" },
        { id:"q10", clue:"Faisait partie des Nethinim (Nehémia 7:46, 47).", answer:"SIA" }
      ]
    },
    {
      key: "grille6",
      title: "Grille 6",
      subtitle: "",
      items: [
        { id:"q01", clue:"Début de la guerre du grand jour de Dieu (Révélation 16:14, 16).", answer:"HAR" },
        { id:"q02", clue:"Trop mûres (Jérémie 29:17).", answer:"ÉCLATÉES" },
        { id:"q03", clue:"Adoré (Romains 1:25).", answer:"VÉNÉRÉ" },
        { id:"q04", clue:"Reçue (Ruth 2:18).", answer:"EUE" },
        { id:"q05", clue:"La frontière du territoire de Zéboulôn allait dans la direction de cette ville (Josué 19:10, 13).", answer:"NÉA" },
        { id:"q06", clue:"Forment la charpente (Daniel 6:24).", answer:"OS" },
        { id:"q07", clue:"On doit l’aimer moins que les commandements de Dieu (Psaume 119:127).", answer:"OR" },
        { id:"q08", clue:"En supplément (en) (Lévitique 27:13).", answer:"SUS" },
        { id:"q09", clue:"Situé sur le côté (1 Rois 6:5).", answer:"LATÉRAL" },
        { id:"q10", clue:"Elle nous est réservée si l’on obéit aux commandements de Dieu (Deutéronome 30:16).", answer:"VIE" }
      ]
    },
    {
      key: "grille7",
      title: "Grille 7",
      subtitle: "",
      items: [
        { id:"q01", clue:"Objets de culte païens que les Israélites devaient absolument détruire (en deux mots) (Deutéronome 7:5).", answer:"COLONNES SACRÉES" },
        { id:"q02", clue:"Nombre des survivants du déluge (1 Pierre 3:20).", answer:"HUIT" },
        { id:"q03", clue:"L’apôtre Pierre a adressé sa première lettre aux résidents temporaires de cette région (1 Pierre 1:1).", answer:"ASIE" },
        { id:"q04", clue:"Pour les croyants, Dieu est comparé à cette masse sur laquelle ils peuvent s’appuyer (2 Samuel 22:3).", answer:"ROC" },
        { id:"q05", clue:"Père de Shaphân le secrétaire du roi Yoshiya (2 Rois 22:3, 9).", answer:"ATSALIA" },
        { id:"q06", clue:"Organes de fixation de certaines plantes grimpantes (Isaïe 18:5).", answer:"VRILLES" },
        { id:"q07", clue:"Le berger amoureux compare sa fiancée à cette jolie fleur (Chant de Salomon 2:2).", answer:"LIS" },
        { id:"q08", clue:"Un des territoires sur lesquels Philippe, frère d’Hérode, exerçait le pouvoir (Luc 3:1).", answer:"ITURÉE" },
        { id:"q09", clue:"Elle fit l’objet d’un changement miraculeux (Jean 2:9).", answer:"EAU" },
        { id:"q10", clue:"Édifier (Ézékiel 4:2).", answer:"ÉLEVER" }
      ]
    },
    {
      key: "grille8",
      title: "Grille 8",
      subtitle: "",
      items: [
        { id:"q01", clue:"Ville égyptienne que Dieu voua à la destruction (Ézékiel 30:13, 14).", answer:"NO" },
        { id:"q02", clue:"Semblable (Daniel 12:1).", answer:"TEL" },
        { id:"q03", clue:"Regorge (Jacques 1:21).", answer:"SURABONDE" },
        { id:"q04", clue:"Dieu égyptien (it-1a, p. 643).", answer:"RÂ" },
        { id:"q05", clue:"Affirmation (Psaume 139:22).", answer:"OUI" },
        { id:"q06", clue:"Emploient (1 Corinthiens 7:31).", answer:"USENT" },
        { id:"q07", clue:"Lieu de pêche très fructueuse sur les rives de la mer Morte (en deux mots) (Ézékiel 47:10).", answer:"EN-ÉGLAÏM" },
        { id:"q08", clue:"Une telle femme est une bénédiction de Dieu (Proverbes 19:14).", answer:"AVISÉE" },
        { id:"q09", clue:"Indivisible (1 Corinthiens 3:8).", answer:"UN" },
        { id:"q10", clue:"Abram campa près de cette ville (Genèse 13:2, 3).", answer:"AÏ" }
      ]
    },
    {
      key: "grille9",
      title: "Grille 9",
      subtitle: "",
      items: [
        { id:"q01", clue:"Ne fournira plus d’eau (Hoshéa 13:15).", answer:"TARIRA" },
        { id:"q02", clue:"Jéhovah l’a donné comme domaine aux fils de Lot (Deutéronome 2:9).", answer:"AR" },
        { id:"q03", clue:"Petit groupe (Exode 25:33).", answer:"SÉRIE" },
        { id:"q04", clue:"La neige n’est pas la bienvenue à ce moment-là (Proverbes 26:1).", answer:"ÉTÉ" },
        { id:"q05", clue:"Dépôt d’armes (2 Rois 20:13).", answer:"ARSENAL" },
        { id:"q06", clue:"Tout le monde y va maintenant, mais on en reviendra plus tard (Ecclésiaste 9:10).", answer:"SHÉOL" },
        { id:"q07", clue:"Placées (Exode 8:12).", answer:"MISES" },
        { id:"q08", clue:"Beaucoup (Jérémie 2:12).", answer:"TRÈS" },
        { id:"q09", clue:"Ceux de Saül ne sont pas indiqués pour le début de son règne (1 Samuel 13:1).", answer:"ANS" },
        { id:"q10", clue:"Un des fils de Caleb (1 Chroniques 4:15).", answer:"ÉLA" }
      ]
    },
    {
      key: "grille10",
      title: "Grille 10",
      subtitle: "",
      items: [
        { id:"q01", clue:"Un petit-fils de Juda par Shéla (1 Chroniques 4:21).", answer:"ER" },
        { id:"q02", clue:"Salomon en importait pour embellir son trône (1 Rois 10:18, 22).", answer:"IVOIRE" },
        { id:"q03", clue:"Jésus y opéra une résurrection (Luc 7:11-15).", answer:"NAÏN" },
        { id:"q04", clue:"Impétuosité (Ézékiel 38:19).", answer:"ARDEUR" },
        { id:"q05", clue:"Contrairement à la volonté de Dieu, les Israélites en ont demandé un pour ressembler aux nations païennes (1 Samuel 8:5-7).", answer:"ROI" },
        { id:"q06", clue:"Compagnon de Paul (Galates 2:1).", answer:"TITE" },
        { id:"q07", clue:"Chaque partie de cette fraction fait finalement un tout (Ézékiel 5:2).", answer:"TIERS" },
        { id:"q08", clue:"Celui qui l’injurie est digne de mort (Matthieu 15:4).", answer:"PÈRE" }
      ]
    },
{
  key: "grille11",
  title: "Grille 11",
  subtitle: "",
  items: [
    { id:"q01", clue:"Témoignages de reconnaissance rendus à Dieu (en trois mots) (Psaume 95:2).", answer:"ACTIONS DE GRÂCES" },
    { id:"q02", clue:"Les mamans les prodiguent avec amour à leurs enfants (1 Thessaloniciens 2:7).", answer:"SOINS" },
    { id:"q03", clue:"La plus petite lettre grecque (it-1a, p. 1019).", answer:"IÔTA" },
    { id:"q04", clue:"Se rendent (Yoël 2:7).", answer:"VONT" },
    { id:"q05", clue:"Les troupeaux y paissent l’été (Psaume 65:13).", answer:"PRÈS" },
    { id:"q06", clue:"Indique que la purification était faite selon les règles (Actes 21:26).", answer:"RITUELLE" },
    { id:"q07", clue:"Consigné par écrit (1 Chroniques 5:1).", answer:"ENREGISTRÉ" },
    { id:"q08", clue:"Couleur du 3e cheval de la Révélation, qui annonce la famine (Révélation 6:5, 6).", answer:"NOIR" },
    { id:"q09", clue:"Celui qui est sorti sain et sauf d’une bataille (Josué 8:22).", answer:"RESCAPÉ" },
    { id:"q10", clue:"De la même façon (Isaïe 55:11).", answer:"AINSI" }
  ]
},
{
  key: "grille12",
  title: "Grille 12",
  subtitle: "",
  items: [
    { id:"q01", clue:"Celle qui t’appartient en propre (Psaume 71:16).", answer:"TIENNE" },
    { id:"q02", clue:"Autre nom de Jérusalem (Isaïe 29:1 ; voir la note).", answer:"ARIËL" },
    { id:"q03", clue:"La limite orientale de l’Empire perse (Esther 8:9).", answer:"INDE" },
    { id:"q04", clue:"Un des hommes forts qui appartenaient à David (1 Rois 1:8).", answer:"RÉÏ" },
    { id:"q05", clue:"Le sage ne met pas sa confiance en lui (Job 31:24).", answer:"OR" },
    { id:"q06", clue:"Il valait mieux ne pas le rencontrer en Israël (Amos 5:19).", answer:"OURS" },
    { id:"q07", clue:"Pays d’où sort un chef suprême pour lutter contre le peuple de Dieu (Ézékiel 38:2).", answer:"MAGOG" },
    { id:"q08", clue:"Arrivée (Lévitique 18:9).", answer:"NÉE" },
    { id:"q09", clue:"Un des six fils de Yedouthoun (1 Chroniques 25:3).", answer:"TSERI" },
    { id:"q10", clue:"Liquide extrait par pression (Job 6:6).", answer:"JUS" }
  ]
},
{
  key: "grille13",
  title: "Grille 13",
  subtitle: "",
  items: [
    { id:"q01", clue:"Si on lui donne libre cours, il conduit au péché (Jacques 1:15).", answer:"DÉSIR" },
    { id:"q02", clue:"Ils font aussi partie des péchés (Révélation 9:21).", answer:"VOLS" },
    { id:"q03", clue:"Absorbé (Jérémie 22:15).", answer:"BU" },
    { id:"q04", clue:"Première partie du nouveau nom qui fut donné à Azaria, l’un des compagnons de Daniel (Daniel 1:7).", answer:"ABED" },
    { id:"q05", clue:"Les oiseaux ont cette faculté, mais pas les poissons (Révélation 4:7).", answer:"VOLER" },
    { id:"q06", clue:"Semence reproductrice (Nombres 5:28).", answer:"SPERME" },
    { id:"q07", clue:"Admettent (Exode 4:1).", answer:"CROIENT" },
    { id:"q08", clue:"Parties postérieures des taureaux... (en deux mots) (1 Rois 7:25).", answer:"ARRIÈRE-TRAINS" },
    { id:"q09", clue:"Déclarer irréel (Genèse 18:15).", answer:"NIER" },
    { id:"q10", clue:"Bassin où l’on pouvait stocker le vin (Haggaï 2:16).", answer:"AUGE" }
  ]
},
{
  key: "grille14",
  title: "Grille 14",
  subtitle: "",
  items: [
    { id:"q01", clue:"Ce qui sortit lorsqu’un homme perça le côté de Jésus avec une lance (Matthieu 27:49).", answer:"EAU" },
    { id:"q02", clue:"Faisaient partie des mets servis chaque jour à la table de Salomon (1 Rois 4:22, 23).", answer:"GAZELLES" },
    { id:"q03", clue:"C’est lui qui témoigne aux oints qu’ils sont adoptés comme enfants de Dieu (Romains 8:15, 16).", answer:"ESPRIT" },
    { id:"q04", clue:"Projection sur l’autel d’un liquide spécifique... (en trois mots) (Lévitique 1:5).", answer:"ASPERSION DU SANG" },
    { id:"q05", clue:"Arme redoutable que possèdent certains animaux... (Daniel 7:21).", answer:"CORNE" },
    { id:"q06", clue:"Très grand nombre (Hébreux 12:1).", answer:"NUÉE" },
    { id:"q07", clue:"Invoqua (Actes 9:40).", answer:"PRIA" },
    { id:"q08", clue:"Une partie d’un tout (Ézékiel 5:2).", answer:"TIERS" },
    { id:"q09", clue:"Érigerez (Deutéronome 27:4).", answer:"DRESSEREZ" },
    { id:"q10", clue:"Petits invertébrés pas toujours sympathiques (Isaïe 18:1).", answer:"INSECTES" }
  ]
},
{
  key: "grille15",
  title: "Grille 15",
  subtitle: "",
  items: [
    { id:"q01", clue:"Parfois associé à la moquerie (Ézékiel 23:32).", answer:"RIRE" },
    { id:"q02", clue:"Jéhovah les voit déjà dans le ventre de la femme enceinte (Psaume 139:15).", answer:"OS" },
    { id:"q03", clue:"Guilleret (Esther 5:9).", answer:"GAI" },
    { id:"q04", clue:"Partie de la texture d’un tissu (Lévitique 13:58).", answer:"TRAME" },
    { id:"q05", clue:"Jésus a mentionné ces animaux dangereux... (Matthieu 23:33).", answer:"VIPÈRES" },
    { id:"q06", clue:"Une des pierres précieuses... (Révélation 21:19, 20).", answer:"BÉRYL" },
    { id:"q07", clue:"Réponse favorable (Matthieu 17:25).", answer:"SI" },
    { id:"q08", clue:"Nom d’un rocher... (1 Samuel 14:4).", answer:"SÉNÉ" },
    { id:"q09", clue:"C’est Adam qui lui a donné ce nom (Genèse 3:20).", answer:"ÈVE" },
    { id:"q10", clue:"Fait un somme (1 Rois 18:27).", answer:"DORT" }
  ]
},
{
  key: "grille16",
  title: "Grille 16",
  subtitle: "",
  items: [
    { id:"q01", clue:"Après le déluge, il fut le premier à s’opposer à Jéhovah (Genèse 10:8, 9).", answer:"NIMROD" },
    { id:"q02", clue:"Grande quantité (Juges 15:16).", answer:"TAS" },
    { id:"q03", clue:"Allongée (Isaïe 18:2).", answer:"ÉTIRÉE" },
    { id:"q04", clue:"Condiment dont les Israélites... (Nombres 11:5).", answer:"AIL" },
    { id:"q05", clue:"Qui n’a pas subi de cuisson (Exode 12:9).", answer:"CRU" },
    { id:"q06", clue:"Si on le fait trop, on le rend ingrat... (Proverbes 29:21).", answer:"GÂTE" },
    { id:"q07", clue:"Roi de Bashân (Josué 12:4).", answer:"OG" },
    { id:"q08", clue:"Colère violente (Daniel 3:13).", answer:"RAGE" },
    { id:"q09", clue:"Lui, il savait bien parler (Exode 4:14).", answer:"AARON" },
    { id:"q10", clue:"Lignes de conduite... (Jérémie 18:11).", answer:"VOIES" }
  ]
},
{
  key: "grille17",
  title: "Grille 17",
  subtitle: "",
  items: [
    { id:"q01", clue:"Le futur plus ou moins lointain (1 Timothée 6:19).", answer:"AVENIR" },
    { id:"q02", clue:"Matière de peu de valeur... (1 Corinthiens 3:12).", answer:"FOIN" },
    { id:"q03", clue:"Par rapport à Rome, Philippes jouissait de ce statut (Actes 16:12).", answer:"COLONIE" },
    { id:"q04", clue:"Causer du tort (1 Thessaloniciens 4:6).", answer:"LÉSER" },
    { id:"q05", clue:"Embourbé (Psaume 69:2).", answer:"ENLISÉ" },
    { id:"q06", clue:"Il a couché avec la concubine de son père... (Genèse 35:22).", answer:"RUBEN" },
    { id:"q07", clue:"Cette ville ennemie a été réduite en tell... (Josué 8:28).", answer:"AÏ" },
    { id:"q08", clue:"On appelait ainsi Élisabeth... (Luc 1:7, 36).", answer:"STÉRILE" },
    { id:"q09", clue:"Particulièrement (Galates 6:10).", answer:"SURTOUT" },
    { id:"q10", clue:"Cris spécifiques du 2 horizontal (1er) (Jérémie 8:16).", answer:"HENNISSEMENTS" }
  ]
},
{
  key: "grille18",
  title: "Grille 18",
  subtitle: "",
  items: [
    { id:"q01", clue:"Expression de louange adressée à Dieu dans la prière (en trois mots) (Psaume 28:6).", answer:"BÉNI SOIT JÉHOVAH" },
    { id:"q02", clue:"Reproducteurs chez les équidés (Jérémie 50:11).", answer:"ÉTALONS" },
    { id:"q03", clue:"Ville dans la Shéphéla de Juda (Josué 15:21, 33, 34).", answer:"ÉNAM" },
    { id:"q04", clue:"Lettre hébraïque (Psaume 34:5).", answer:"HÉʼ" },
    { id:"q05", clue:"Aucun prêtre lévitique ne pouvait offrir... (Lévitique 21:21).", answer:"TARE" },
    { id:"q06", clue:"Circonstance favorable ou défavorable (Matthieu 26:16).", answer:"OCCASION" },
    { id:"q07", clue:"Alors qu’il agonisait, Jésus cria... (Matthieu 27:46).", answer:"ÉLI" },
    { id:"q08", clue:"Avant le cadet (Romains 9:12).", answer:"AÎNÉ" },
    { id:"q09", clue:"...devaient travailler dur pour pouvoir en manger (Genèse 3:19).", answer:"PAIN" },
    { id:"q10", clue:"Même dans les mers il y a ces voies (Psaume 8:8).", answer:"SENTIERS" }
  ]
},
{
  key: "grille19",
  title: "Grille 19",
  subtitle: "",
  items: [
    { id:"q01", clue:"Ce que fit Rachel concernant les teraphim... (Genèse 31:19).", answer:"VOLA" },
    { id:"q02", clue:"Un ancêtre de Jésus (Luc 3:28).", answer:"ER" },
    { id:"q03", clue:"...accouchaient sur cet objet (Exode 1:16).", answer:"SIÈGE" },
    { id:"q04", clue:"...ne peuvent pas l’être aussi pour Dieu (2 Timothée 3:4).", answer:"AMIS" },
    { id:"q05", clue:"Période où le grand prêtre entrait... (Hébreux 9:3, 7).", answer:"AN" },
    { id:"q06", clue:"Jéhovah l’a maudit... (Genèse 3:17).", answer:"SOL" },
    { id:"q07", clue:"Ce n’est pas sous cet objet qu’on met une lampe (Luc 8:16).", answer:"LIT" },
    { id:"q08", clue:"La jalousie les fait pourrir (Proverbes 14:30).", answer:"OS" },
    { id:"q09", clue:"Dépouillé en partie de ses vêtements (Matthieu 27:28).", answer:"DÉVÊTU" },
    { id:"q10", clue:"Sans réaction (Job 15:4).", answer:"INERTE" }
  ]
},
{
  key: "grille20",
  title: "Grille 20",
  subtitle: "",
  items: [
    { id:"q01", clue:"Quand vient le crépuscule, il tombe (Isaïe 5:11).", answer:"SOIR" },
    { id:"q02", clue:"Père de Qish (1 Chroniques 8:33).", answer:"NER" },
    { id:"q03", clue:"Appris (Jérémie 15:15).", answer:"SU" },
    { id:"q04", clue:"Ville des Zouzim... (Genèse 14:5).", answer:"HAM" },
    { id:"q05", clue:"Caractérise le combat... (Jude 3).", answer:"DUR" },
    { id:"q06", clue:"Dans le nom que Jacob donna... (Genèse 35:1, 7).", answer:"EL" },
    { id:"q07", clue:"Détruit (Matthieu 23:37).", answer:"TUE" },
    { id:"q08", clue:"Roi d’Israël qui succéda... (1 Rois 16:6).", answer:"ÉLA" },
    { id:"q09", clue:"Dans le nom d’un fleuve frontière de Dân... (Josué 19:40, 41, 46).", answer:"MÉ" },
    { id:"q10", clue:"Père de Gaddiël... (Nombres 13:10).", answer:"SODI" }
  ]
},
{
  key: "grille21",
  title: "Grille 21",
  subtitle: "",
  items: [
    { id:"q01", clue:"Ce que produisent les instruments à cordes (Amos 5:23).", answer:"SON" },
    { id:"q02", clue:"Agir (2 Corinthiens 8:10).", answer:"FAIRE" },
    { id:"q03", clue:"Libérant (Actes 2:24).", answer:"DÉLIANT" },
    { id:"q04", clue:"Sans difficulté (2 Corinthiens 11:4).", answer:"AISÉMENT" },
    { id:"q05", clue:"Ceux dont on parle (Matthieu 24:22).", answer:"CES" },
    { id:"q06", clue:"Ce qui caractérise la végétation (Psaume 58:9).", answer:"VERDURE" },
    { id:"q07", clue:"Les disciples n’en avaient pas besoin... (Matthieu 10:10).", answer:"SAC" },
    { id:"q08", clue:"Les gouvernements les exigent... (Matthieu 17:25).", answer:"TAXES" },
    { id:"q09", clue:"Particularité de l’attente... (Hébreux 11:1).", answer:"ASSURÉE" },
    { id:"q10", clue:"Ce que les Israélites devaient offrir... (en trois mots) (Nombres 28:19).", answer:"BÊTES SANS DÉFAUT" }
  ]
},
{
  key: "grille22",
  title: "Grille 22",
  subtitle: "",
  items: [
    { id:"q01", clue:"Déployé (Psaume 136:6).", answer:"ÉTALÉ" },
    { id:"q02", clue:"Cours d’eau près duquel Daniel a reçu une vision (Daniel 8:1, 2).", answer:"OULAÏ" },
    { id:"q03", clue:"...les femmes d’autrefois y mettaient un anneau (Ézékiel 16:12).", answer:"NARINE" },
    { id:"q04", clue:"Déclarerais (Deutéronome 32:26).", answer:"DIRAIS" },
    { id:"q05", clue:"Au milieu de l’eau (Actes 27:16).", answer:"ÎLE" },
    { id:"q06", clue:"Faire un choix (Ecclésiaste 3:18).", answer:"TRIER" },
    { id:"q07", clue:"Moyen par lequel Jéhovah inspirait ses prophètes (Nombres 12:6).", answer:"RÊVE" },
    { id:"q08", clue:"Roi d’Égypte (2 Rois 17:4).", answer:"SO" },
    { id:"q09", clue:"Confirmation (Matthieu 17:25).", answer:"SI" },
    { id:"q10", clue:"Identiques (Lévitique 4:10).", answer:"MÊMES" }
  ]
},
{
  key: "grille23",
  title: "Grille 23",
  subtitle: "",
  items: [
    { id:"q01", clue:"Vallée des artisans (Nehémia 11:35).", answer:"ONO" },
    { id:"q02", clue:"Nature/somme de la parole de Dieu (Psaume 119:160).", answer:"ESSENCE" },
    { id:"q03", clue:"Fils de Shéla... (1 Chroniques 4:21).", answer:"ER" },
    { id:"q04", clue:"Qualificatif donné à un apôtre... (Luc 22:3).", answer:"ISCARIOTE" },
    { id:"q05", clue:"Limite du territoire du roi Assuérus (Esther 1:1).", answer:"INDE" },
    { id:"q06", clue:"Sculptures d’un métal... (Proverbes 25:11).", answer:"CISELURES" },
    { id:"q07", clue:"N’a rien dit (s’est) (Psaume 39:2).", answer:"TU" },
    { id:"q08", clue:"Homme sans instruction... (Actes 4:13).", answer:"JEAN" },
    { id:"q09", clue:"Ville proche de celle du 6 vertical (Nehémia 11:35).", answer:"LOD" },
    { id:"q10", clue:"Dieu égyptien (it-1a, p. 643).", answer:"RÂ" }
  ]
},
{
  key: "grille24",
  title: "Grille 24",
  subtitle: "",
  items: [
    { id:"q01", clue:"Mets en terre (Genèse 23:6).", answer:"ENSEVELIS" },
    { id:"q02", clue:"Quand il survient... (Matthieu 2:15).", answer:"DÉCÈS" },
    { id:"q03", clue:"Détesté (Proverbes 14:17).", answer:"HAÏ" },
    { id:"q04", clue:"Qui ne sert à rien (1 Corinthiens 15:17).", answer:"INUTILES" },
    { id:"q05", clue:"Partie d’un animal sacrifié... (Deutéronome 18:3).", answer:"OMOPLATE" },
    { id:"q06", clue:"Qui provient (2 Samuel 16:11).", answer:"ISSU" },
    { id:"q07", clue:"Un des fils de Caleb (1 Chroniques 4:15).", answer:"NAAM" },
    { id:"q08", clue:"Un ancêtre de Jésus (Luc 3:27).", answer:"RHÉSA" },
    { id:"q09", clue:"Ville en Moab (Deutéronome 2:18).", answer:"AR" },
    { id:"q10", clue:"Exclamation (Isaïe 48:18).", answer:"AH" }
  ]
},
{
  key: "grille25",
  title: "Grille 25",
  subtitle: "",
  items: [
    { id:"q01", clue:"Lettre grecque (it-1b, p. 1019).", answer:"IÔTA" },
    { id:"q02", clue:"Un des révoltés contre Moïse (Nombres 16:1, 2).", answer:"ÔN" },
    { id:"q03", clue:"Celui dont on parle (Matthieu 24:36).", answer:"CE" },
    { id:"q10", clue:"Menant un combat (Philippiens 1:27).", answer:"LUTTANT" }
    
  ]
},
{
  key: "grille26",
  title: "Grille 26",
  subtitle: "",
  items: [
    { id:"q01", clue:"Envies fallacieuses... (en deux mots) (Éphésiens 4:22).", answer:"DÉSIRS TROMPEURS" },
    { id:"q02", clue:"Réalise (Luc 5:17).", answer:"OPÈRE" },
    { id:"q03", clue:"...celle des vieillards baisse beaucoup (1 Corinthiens 12:17).", answer:"OUÏE" },
    { id:"q04", clue:"Ce n’est pas un don (Deutéronome 24:10).", answer:"PRÊT" },
    { id:"q05", clue:"Assyriens méchants mais repentis... (Luc 11:30).", answer:"NINIVITES" },
    { id:"q06", clue:"Parapha (Daniel 6:9).", answer:"SIGNA" },
    { id:"q07", clue:"Équivalait à 7,33 l (2 Rois 7:1).", answer:"SÉA" },
    { id:"q08", clue:"Mise à plat (Juges 6:37).", answer:"ÉTALÉE" },
    { id:"q09", clue:"De là souffle un vent desséchant (Genèse 41:27).", answer:"EST" },
    { id:"q10", clue:"Pièce de literie (Isaïe 28:20).", answer:"DRAP" }
  ]
},
{
  key: "grille27",
  title: "Grille 27",
  subtitle: "",
  items: [
    { id:"q01", clue:"Se rendit (Genèse 28:9).", answer:"ALLA" },
    { id:"q02", clue:"Pendant ce temps, la Terre fait sa révolution (1 Samuel 1:20).", answer:"ANNÉE" },
    { id:"q03", clue:"Apprécié des Israélites en Égypte (Nombres 11:5).", answer:"AIL" },
    { id:"q04", clue:"Possédé (Jean 4:18).", answer:"EU" },
    { id:"q05", clue:"Lancement d’un projectile (Psaume 7:12).", answer:"TIR" },
    { id:"q06", clue:"Qui ont pris de la hauteur (Psaume 144:12).", answer:"GRANDIES" },
    { id:"q07", clue:"Rend moins pesant (1 Rois 12:4).", answer:"ALLÈGE" },
    { id:"q08", clue:"Coalisés avec les Perses... (Daniel 5:7, 28).", answer:"MÈDES" },
    { id:"q09", clue:"Exact (3 Jean 12).", answer:"VRAI" },
    { id:"q10", clue:"Fuyons (Exode 14:25).", answer:"ÉVITONS" }
  ]
},
{
  key: "grille28",
  title: "Grille 28",
  subtitle: "",
  items: [
    { id:"q01", clue:"Descendant de Sem... (Genèse 10:21, 22, 28).", answer:"ABIMAËL" },
    { id:"q02", clue:"S’est amusé (a) (Proverbes 29:9).", answer:"RI" },
    { id:"q03", clue:"Sortis de la matrice (Matthieu 11:11).", answer:"NÉS" },
    { id:"q04", clue:"Endroit où le cortège funèbre... (Genèse 50:10, 13).", answer:"ATAD" },
    { id:"q05", clue:"Caractère de ce qui blesse la pudeur (Jérémie 23:13).", answer:"INDÉCENCE" },
    { id:"q06", clue:"À une certaine distance (à l’) (Luc 9:10).", answer:"ÉCART" },
    { id:"q07", clue:"L’un des fils de Gad (Genèse 46:16).", answer:"ÉRI" },
    { id:"q08", clue:"Ainsi (Ecclésiaste 10:1).", answer:"TEL" },
    { id:"q09", clue:"Confia (Genèse 32:16).", answer:"REMIT" },
    { id:"q10", clue:"Abram en est sorti (Nehémia 9:7).", answer:"OUR" }
  ]
},
{
  key: "grille29",
  title: "Grille 29",
  subtitle: "",
  items: [
    { id:"q01", clue:"Émet de la lumière (Matthieu 5:16).", answer:"BRILLE" },
    { id:"q02", clue:"Roi de Juda fidèle à Dieu (1 Rois 15:11).", answer:"ASA" },
    { id:"q03", clue:"Lors des repas, Jésus et les apôtres l’utilisaient en commun (Marc 14:20).", answer:"BOL" },
    { id:"q04", clue:"Située en haut (Isaïe 26:5).", answer:"ÉLEVÉE" },
    { id:"q05", clue:"Dans le nom d’une ville des fils de Naphtali (Josué 19:32, 37).", answer:"EN" },
    { id:"q06", clue:"On le met pour investir une place forte (Mika 5:1).", answer:"SIÈGE" },
    { id:"q07", clue:"Causer du tort (1 Thessaloniciens 4:6).", answer:"LÉSER" },
    { id:"q08", clue:"Distance parcourue par un objet qu’on lance (Luc 22:41).", answer:"JET" },
    { id:"q09", clue:"Expressions de la faveur imméritée... (en trois mots) (1 Corinthiens 12:28).", answer:"DONS DE GUÉRISONS" },
    { id:"q10", clue:"Guetter (Jérémie 3:5).", answer:"ÉPIER" }
  ]
},
{
  key: "grille30",
  title: "Grille 30",
  subtitle: "",
  items: [
    { id:"q01", clue:"Il était interdit aux naziréens (Nombres 6:2, 3).", answer:"VIN" },
    { id:"q02", clue:"Plus de 3 000 de ses fils revinrent... (Ezra 2:1, 35).", answer:"SENAA" },
    { id:"q03", clue:"Celui que l’on reçoit dans son intimité (Jean 3:29).", answer:"AMI" },
    { id:"q04", clue:"Ville de Lycaonie où Paul a prêché (Actes 14:6, 7).", answer:"DERBÉ" },
    { id:"q05", clue:"Petit-fils de Benjamin (1 Chroniques 7:6, 7).", answer:"IRI" },
    { id:"q06", clue:"Officier de bouche du roi d’Égypte (Genèse 40:1).", answer:"PANETIER" },
    { id:"q07", clue:"Roi de Bashân (Nehémia 9:22).", answer:"OG" },
    { id:"q08", clue:"Moyen par lequel Jéhovah a averti Joseph... (Matthieu 2:13).", answer:"RÊVE" },
    { id:"q09", clue:"Père d’Ahinadab... (1 Rois 4:7, 14).", answer:"IDDO" },
    { id:"q10", clue:"But que l’on vise... (1 Samuel 20:20).", answer:"CIBLE" }
  ]
},
{
  key: "grille31",
  title: "Grille 31",
  subtitle: "",
  items: [
    { id:"q01", clue:"Nom de la troupe à laquelle appartenait Corneille (Actes 10:1).", answer:"ITALIENNE" },
    { id:"q02", clue:"Au bout du compte (2 Chroniques 3:8).", answer:"TOTAL" },
    { id:"q03", clue:"Primordial (Hébreux 8:1).", answer:"ESSENTIEL" },
    { id:"q04", clue:"Petites voies (Luc 14:21).", answer:"RUELLES" },
    { id:"q05", clue:"Sous cachet (Esther 3:12).", answer:"SCELLÉ" },
    { id:"q06", clue:"Au printemps, il chante agréablement... (Ecclésiaste 12:4).", answer:"OISEAU" },
    { id:"q07", clue:"Se déplace (Lévitique 11:42).", answer:"VA" },
    { id:"q08", clue:"Plusieurs femmes ensemble (Ruth 1:7).", answer:"ELLES" },
    { id:"q09", clue:"Limite de la frontière des fils de Dân... (Josué 19:40, 41, 46).", answer:"MÉ" },
    { id:"q10", clue:"Père d’Anaq (Josué 15:13).", answer:"ARBA" }
  ]
},
{
  key: "grille32",
  title: "Grille 32",
  subtitle: "",
  items: [
    { id:"q01", clue:"Elle fut la première à devenir enceinte (Genèse 4:1).", answer:"ÈVE" },
    { id:"q02", clue:"Ce que dut faire la femme... après avoir accouché (1 Rois 3:21).", answer:"ALLAITER" },
    { id:"q03", clue:"Un ancêtre de Jésus (Luc 3:28).", answer:"ER" },
    { id:"q04", clue:"La gaine de plusieurs graines (Marc 4:28).", answer:"ÉPI" },
    { id:"q05", clue:"Gastéropode détesté des jardiniers (Psaume 58:8).", answer:"LIMACE" },
    { id:"q06", clue:"Pressée (1 Samuel 21:8).", answer:"URGENTE" },
    { id:"q07", clue:"Ville fortifiée de Naphtali (Josué 19:32, 35, 36).", answer:"ADAMA" },
    { id:"q08", clue:"Informe (Ézékiel 43:10).", answer:"RENSEIGNE" },
    { id:"q09", clue:"Rire moqueur (Habaqouq 1:10).", answer:"RISÉE" },
    { id:"q10", clue:"Pièce de monnaie dans la bouche du poisson (Matthieu 17:27).", answer:"STATÈRE" }
  ]
},
{
  key: "grille33",
  title: "Grille 33",
  subtitle: "",
  items: [
    { id:"q01", clue:"Menant un combat (Philippiens 1:27).", answer:"LUTTANT" },
    { id:"q02", clue:"S’égaie (Job 39:7).", answer:"RIT" },
    { id:"q03", clue:"Descendant de Saül par Yonathân (1 Chroniques 9:39-42).", answer:"YARA" },
    { id:"q04", clue:"Au jour de Jéhovah, les cieux passeront dans ce bruit particulier (2 Pierre 3:10).", answer:"SIFFLEMENT" },
    { id:"q05", clue:"Père de Ritspa concubine de Saül (2 Samuel 3:7).", answer:"AÏA" },
    { id:"q06", clue:"Est allé rapidement (a) (Actes 21:1).", answer:"FILÉ" },
    { id:"q07", clue:"Il doit être épuré (Malaki 3:3).", answer:"OR" },
    { id:"q08", clue:"Neboukadnetsar les a pris et mis dans la maison de son dieu à Babylone (Daniel 1:1, 2).", answer:"USTENSILES" },
    { id:"q09", clue:"Mot araméen qui marque l’intimité des membres oints avec le Père (Romains 8:15 ; voir la note).", answer:"ABBA" },
    { id:"q10", clue:"Avis parfois divergent (Philippiens 3:15).", answer:"OPINION" }
  ]
}
  ];
})();

