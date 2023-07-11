(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{6538:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/learning-to-scale",function(){return s(8016)}])},9923:function(e,n,s){"use strict";s.d(n,{Z:function(){return u}});var i=s(5893);s(7294);let r="My detailed reading notes from computer science books",l="/reading-notes";var t=s(1163),a=s(5675),o=s.n(a);let d={logo:(0,i.jsx)(function(){return(0,i.jsx)(o(),{src:"".concat(l,"/logo.png"),alt:"Reading notes homepage",width:30,height:30})},{}),project:{link:"https://github.com/mkrtchian/reading-notes"},docsRepositoryBase:"https://github.com/mkrtchian/reading-notes/blob/main",footer:{text:"Made by Roman Mkrtchian"},head:function(){let e="Reading notes";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:r}),(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{property:"og:description",content:r}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:e}),(0,i.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat(l,"/favicon.ico")})]})},feedback:{content:()=>(0,i.jsx)(i.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,t.useRouter)(),n={description:r};return"/"!==e?n.titleTemplate="%s – Reading notes":n.titleTemplate="%s",n},i18n:[]};var u=d},8016:function(e,n,s){"use strict";s.r(n);var i=s(5893),r=s(2673),l=s(902),t=s(9923);s(9966);var a=s(1151);s(5675);let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/books/learning-to-scale.md",route:"/books/learning-to-scale",headings:[{depth:1,value:"Learning to Scale",id:"learning-to-scale"},{depth:2,value:"1 - Introduction",id:"1---introduction"},{depth:2,value:"2 - Comment nous limitons la croissance",id:"2---comment-nous-limitons-la-croissance"},{depth:2,value:"3 - Faire de l’apprentissage une strat\xe9gie",id:"3---faire-de-lapprentissage-une-strat\xe9gie"},{depth:2,value:"4 - Votre p\xe9riple lean",id:"4---votre-p\xe9riple-lean"},{depth:2,value:"5 - Passez \xe0 la pratique",id:"5---passez-\xe0-la-pratique"},{depth:3,value:"1 - Chercher pour confronter",id:"1---chercher-pour-confronter"},{depth:4,value:"Commencer par le Gemba",id:"commencer-par-le-gemba"}],pageMap:[{kind:"Meta",data:{index:"Introduction",books:"Reading notes"}},{kind:"Folder",name:"books",route:"/books",children:[{kind:"Meta",data:{"continuous-discovery-habits":"Continuous Discovery Habits","designing-data-intensive-applications":"Designing Data-Intensive Applications","effective-kafka":"Effective Kafka","get-your-hands-dirty-on-clean-architecture":"Get Your Hands Dirty on Clean Architecture","learning-domain-driven-design":"Learning Domain-Driven Design","learning-to-scale":"Learning to Scale","monolith-to-microservices":"Monolith to Microservices",refactoring:"Refactoring: Improving the Design of Existing Code","reinventing-organizations":"Reinventing Organizations","team-topologies":"Team Topologies","the-design-of-web-apis":"The Design of Web APIs","unit-testing":"Unit Testing: Principles, Practices, and Patterns"}},{kind:"MdxPage",name:"continuous-discovery-habits",route:"/books/continuous-discovery-habits"},{kind:"MdxPage",name:"designing-data-intensive-applications",route:"/books/designing-data-intensive-applications"},{kind:"MdxPage",name:"effective-kafka",route:"/books/effective-kafka"},{kind:"MdxPage",name:"get-your-hands-dirty-on-clean-architecture",route:"/books/get-your-hands-dirty-on-clean-architecture"},{kind:"MdxPage",name:"learning-domain-driven-design",route:"/books/learning-domain-driven-design"},{kind:"MdxPage",name:"learning-to-scale",route:"/books/learning-to-scale"},{kind:"MdxPage",name:"monolith-to-microservices",route:"/books/monolith-to-microservices"},{kind:"MdxPage",name:"refactoring",route:"/books/refactoring"},{kind:"MdxPage",name:"reinventing-organizations",route:"/books/reinventing-organizations"},{kind:"MdxPage",name:"team-topologies",route:"/books/team-topologies"},{kind:"MdxPage",name:"the-design-of-web-apis",route:"/books/the-design-of-web-apis"},{kind:"MdxPage",name:"unit-testing",route:"/books/unit-testing"}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Learning to Scale"},pageNextRoute:"/books/learning-to-scale",nextraLayout:l.ZP,themeConfig:t.Z};function d(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",strong:"strong",em:"em",h3:"h3",h4:"h4"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Learning to Scale"}),"\n",(0,i.jsx)(n.h2,{id:"1---introduction",children:"1 - Introduction"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On prend souvent de mauvaises d\xe9cisions bas\xe9es sur des ",(0,i.jsx)(n.strong,{children:"id\xe9es fausses"}),", alors qu’on pourrait utiliser l’apprentissage pour les corriger.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Exemples :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Une \xe9quipe choisit un raccourci qui impacte une autre \xe9quipe et l’oblige \xe0 travailler plus et \xe0 recruter pour s’en sortir. Personne ne se rend compte de l’origine du probl\xe8me et du gaspillage global."}),"\n",(0,i.jsx)(n.li,{children:"Une commerciale passe son temps \xe0 affiner son argumentaire, et n’\xe9coute pas les vrais besoins de ses clients. Elle finit par avoir de mauvais r\xe9sultats sans jamais savoir pourquoi."}),"\n",(0,i.jsx)(n.li,{children:"L’\xe9quipe de direction \xe9labore une r\xe9organisation majeure, mais ne se rend pas compte que \xe7a va empirer les choses, et qu’il vaudrait mieux s’appuyer sur les \xe9quipes et faire des changements graduels."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Toyota a invent\xe9 un mod\xe8le permettant de ",(0,i.jsx)(n.strong,{children:"tirer parti de l’intelligence de chacun"})," : le ",(0,i.jsx)(n.strong,{children:"TPS"})," (Toyota Production System).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Elle a commenc\xe9 d\xe8s les ann\xe9es 50, et s’est fait conna\xeetre dans les ann\xe9es 80 de par son succ\xe8s."}),"\n",(0,i.jsxs)(n.li,{children:["En dehors de Toyota, ce mod\xe8le s’appelle ",(0,i.jsx)(n.em,{children:"le lean"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Ce mod\xe8le a influenc\xe9 le mouvement agile et le mouvement lean startup."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le livre ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"The Lean Strategy"})}),", sorti en 2017, constitue une avanc\xe9e majeure et permet de comprendre le lean comme strat\xe9gie d’entreprise globale, plut\xf4t que partielle comme auparavant.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le livre ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Learning to Scale"})})," est une forme d’introduction \xe0 cette version plus compl\xe8te du lean."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2---comment-nous-limitons-la-croissance",children:"2 - Comment nous limitons la croissance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Au moment o\xf9 l’entreprise commence \xe0 grossir fortement, les fondateurs n’ont plus le temps de tout g\xe9rer par eux-m\xeames.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"En g\xe9n\xe9ral, les fondateurs vont essayer d’embaucher des managers pour structurer des r\xf4les de contr\xf4le, mais les employ\xe9s commettent toujours des erreurs et se d\xe9motivent, et l’entreprise se rigidifie."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["La ",(0,i.jsx)(n.strong,{children:"loi d'airain de Ball\xe9"})," dit qu’",(0,i.jsx)(n.em,{children:"en p\xe9riode de forte croissance, les co\xfbts engendr\xe9s par la complexit\xe9 et le travail en silos, augmentent plus vite que le chiffre d’affaires"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il s’agit du “syndr\xf4me des grandes entreprises”."}),"\n",(0,i.jsxs)(n.li,{children:["On peut le d\xe9cliner en 4 points :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Privil\xe9gier les processus plut\xf4t que le client"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les personnes du bas de l’\xe9chelle appliquent les processus faits par les dirigeants sans r\xe9fl\xe9chir, m\xeame si le r\xe9sultat est inefficace."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pr\xe9f\xe9rer les silos au travail d’\xe9quipe"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On peut penser notamment aux diff\xe9rents chefs de service qui se rejettent la faute plut\xf4t que de collaborer autour d’un but commun.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["NDLR : c’est tr\xe8s bien illustr\xe9 dans ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"The Phoenix Project"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"R\xe9compenser l’ob\xe9issance plut\xf4t que l’initiative"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On peut par exemple penser \xe0 un PM qui trouve des solutions issues de sa discovery, mais qui voit toutes ses propositions rejet\xe9es par son chef qui a d\xe9j\xe0 ses id\xe9es \xe0 lui."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Confondre le leg et l’h\xe9ritage technologique"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Chaque entreprise qui a \xe0 un moment une bonne id\xe9e technologique qui perce finit par elle-m\xeame \xeatre d\xe9pass\xe9e par des concurrents qui innovent.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il faut savoir abandonner les technologies qui procuraient un avantage concurrentiel hier et qui n’en procurent plus aujourd’hui."}),"\n",(0,i.jsx)(n.li,{children:"Exemple : les clients lourds se font d\xe9passer par le web."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Les mod\xe8les classiques de management sont bas\xe9s sur les th\xe9ories de personnes comme Taylor ou Ford. Mais elles posent des probl\xe8mes.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Faire correspondre un produit uniforme \xe0 une client\xe8le la plus vaste possible permet d’\xe9conomiser des co\xfbts, mais les clients s’en vont quand la concurrence augmente."}),"\n",(0,i.jsx)(n.li,{children:"D\xe9couper l’activit\xe9 en petites t\xe2ches reproductibles permet d’\xeatre plus efficace, mais d\xe8s que le contexte change, le d\xe9coupage en question ne correspond plus \xe0 ce qu’il faut faire."}),"\n",(0,i.jsx)(n.li,{children:"Sp\xe9cialiser les personnes dans des r\xf4les leur permet d’\xeatre plus performants dans ce qu’ils font, mais ils perdent de vue l’ensemble et peuvent agir contre l’int\xe9r\xeat de l’entreprise sans s’en rendre compte."}),"\n",(0,i.jsx)(n.li,{children:"Le contr\xf4le centralis\xe9 permet d’agir vite, mais quand l’entreprise grossit, les dirigeants perdent le contact avec la r\xe9alit\xe9 du terrain."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dans le management classique de type ",(0,i.jsx)(n.strong,{children:"Command & Control"}),", on applique un processus en ",(0,i.jsx)(n.strong,{children:"4D"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"D\xe9finir"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["L’\xe9quipe dirigeante d\xe9finit les ",(0,i.jsx)(n.strong,{children:"enjeux strat\xe9giques"})," de l’entreprise en s’appuyant \xe9ventuellement sur des conseils externes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"D\xe9cider"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["L’\xe9quipe dirigeante d\xe9finit la ",(0,i.jsx)(n.strong,{children:"strat\xe9gie d’entreprise"}),", c’est-\xe0-dire le plan d’action."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Diriger"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["L’\xe9quipe dirigeante communique le plan aux investisseurs et aux employ\xe9s, et s’occupe de la ",(0,i.jsx)(n.strong,{children:"mise en place"})," en nommant des personnes pour l’ex\xe9cution et en d\xe9finissant des objectifs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"D\xe9m\xealer"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Au bout d’un moment, le plan d’action d\xe9cid\xe9 en dehors des r\xe9alit\xe9s du terrain finit par avoir des cons\xe9quences n\xe9fastes. L’\xe9quipe dirigeante pense alors \xe0 d\xe9finir une ",(0,i.jsx)(n.strong,{children:"nouvelle strat\xe9gie"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le management de type 4D a pour cons\xe9quence :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Une baisse de la motivation."}),"\n",(0,i.jsx)(n.li,{children:"Une innovation limit\xe9e parce qu’on ne s’appuie que sur quelques personnes (qui sont en plus d\xe9connect\xe9es de la r\xe9alit\xe9 du terrain) pour savoir quoi faire."}),"\n",(0,i.jsx)(n.li,{children:"Les meilleurs \xe9l\xe9ments qui partent en burnout."}),"\n",(0,i.jsx)(n.li,{children:"De mauvais r\xe9sultats financiers."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le ",(0,i.jsx)(n.strong,{children:"lean"})," est une ",(0,i.jsx)(n.strong,{children:"alternative radicalement diff\xe9rente"})," des autres approches.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le management de type ",(0,i.jsx)(n.em,{children:"Command & Control"})," est le plus r\xe9pandu parce qu’il d\xe9coule d’un penchant humain naturel vers le contr\xf4le."]}),"\n",(0,i.jsxs)(n.li,{children:["D’autres formes de management tr\xe8s diff\xe9rentes ont \xe9t\xe9 exp\xe9riment\xe9es : en utilisant des m\xe9canismes de r\xe9compense, en allant vers une autonomie totale des employ\xe9s, en mettant en place les entreprises lib\xe9r\xe9es, l’holacratie etc.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mais toutes ces approches ont en commun d’\xeatre toujours sur la notion de ",(0,i.jsx)(n.strong,{children:"contr\xf4le"})," : la question de savoir qui l’exerce et comment."]}),"\n",(0,i.jsxs)(n.li,{children:["Le lean est radicalement diff\xe9rent de toutes ces approches parce qu’il se base sur la mani\xe8re dont les gens ",(0,i.jsx)(n.strong,{children:"apprennent sur le terrain"})," (et non pas sur une histoire de contr\xf4le donc)."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Le lean n’est pas un syst\xe8me de production, c’est un syst\xe8me d’apprentissage."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3---faire-de-lapprentissage-une-strat\xe9gie",children:"3 - Faire de l’apprentissage une strat\xe9gie"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour \xeatre une ",(0,i.jsx)(n.strong,{children:"entreprise apprenante"}),", il y a deux composantes :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"1 - Rechercher activement ce que nous ignorons et qui limite nos performances."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"2 - D\xe9velopper activement les connaissances et comp\xe9tences de chacun."})}),"\n",(0,i.jsxs)(n.li,{children:["Exemple : un CTO arrive dans une entreprise, et la direction met la pression pour d\xe9livrer un projet. Il va se concentrer sur les deux aspects d'apprentissage.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["1 - Il cherche ce que les \xe9quipes ignorent et qui limite les performances.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il commence par les probl\xe8mes de qualit\xe9 : un tiers du temps de dev est pass\xe9 sur des bugs."}),"\n",(0,i.jsx)(n.li,{children:"Il passe du temps avec des devs et des PMs pour identifier l’origine de plusieurs bugs individuellement (plut\xf4t que par statistique)."}),"\n",(0,i.jsx)(n.li,{children:"Il finissent par identifier que les PM ne prennent pas en compte des edge cases probl\xe9matiques, et que les devs ont des pratiques de qualit\xe9 de code qui ne sont pas suffisamment solides."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["2 - Il cr\xe9e un environnement o\xf9 le travail quotidien va permettre une acquisition rapide de comp\xe9tences et de connaissances.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il lance le d\xe9partement produit sur la r\xe9duction des bugs."}),"\n",(0,i.jsx)(n.li,{children:"Il montre aux PMs et \xe0 leur responsable, pendant des s\xe9ances individuelles, comment prendre en compte les cas particuliers dans les sp\xe9cifications."}),"\n",(0,i.jsx)(n.li,{children:"Il met en place une mani\xe8re pour les devs de faire remonter les soucis dans les specs de mani\xe8re r\xe9guli\xe8re aux PMs pour \xe9tablir une discussion entre eux."}),"\n",(0,i.jsx)(n.li,{children:"Il travaille avec les Tech Leads sur l’am\xe9lioration des pratiques de qualit\xe9 de code, \xe0 partir de leur exp\xe9rience mais aussi en passant en revue les articles et livres de r\xe9f\xe9rence sur ces sujets."}),"\n",(0,i.jsx)(n.li,{children:"Les Tech Leads utilisent ces connaissances pour former les devs et trouver des am\xe9liorations importantes pour pas trop d’efforts."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Pour que l’apprentissage soit au cœur de l'entreprise, il faut que les employ\xe9s soient dans un ",(0,i.jsx)(n.strong,{children:"environnement qui les incite \xe0 apprendre"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La question de quelles comp\xe9tences sont les plus utiles sur le moment se pose : par exemple pour d\xe9veloppeur, explorer de nouvelles technos ou apprendre \xe0 faire du code avec peu de bugs."}),"\n",(0,i.jsx)(n.li,{children:"Il faut que le moment de l’apprentissage soit tr\xe8s proche du moment de la mise en pratique."}),"\n",(0,i.jsx)(n.li,{children:"Il faut de l’autonomie pour tester les choses par soi-m\xeame."}),"\n",(0,i.jsx)(n.li,{children:"Il faut de la s\xe9curit\xe9 psychologique."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Au management classique Command & Control, le lean vient opposer le management de type Orient & Support.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le ",(0,i.jsx)(n.strong,{children:"Command and Control"})," consiste \xe0 donner des directives pr\xe9cises, puis \xe0 v\xe9rifier qu’elles sont ex\xe9cut\xe9es.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les employ\xe9s sont l\xe0 pour ex\xe9cuter correctement les ordres et non pas r\xe9fl\xe9chir. De toute fa\xe7on, ils en seraient bien incapables."}),"\n",(0,i.jsxs)(n.li,{children:["Exemple : “",(0,i.jsx)(n.em,{children:"Les chiffres de vente sont d\xe9cevants. Chacun travaille de mani\xe8re diff\xe9rente, donc j’ai repens\xe9 l’argumentaire commercial, \xe9labor\xe9 un nouveau processus de vente et cr\xe9\xe9 un nouveau mod\xe8le de proposition qu’il vous suffit juste de compl\xe9ter pour gagner du temps. J’ai \xe9galement augment\xe9 la part variable de votre r\xe9mun\xe9ration afin que vous soyez pleinement motiv\xe9s. Je vais mettre en place des rendez-vous hebdomadaires avec chacun d’entre vous, d’ici quelques jours, pour r\xe9pondre \xe0 vos questions et vous aider \xe0 appliquer ce nouveau processus avec succ\xe8s."}),"”"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’",(0,i.jsx)(n.strong,{children:"Orient & Support"})," consiste \xe0 d\xe9terminer des objectifs imp\xe9ratifs \xe0 atteindre, puis \xe0 aider les employ\xe9s \xe0 exprimer la mani\xe8re de les atteindre.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La d\xe9termination des objectifs elle-m\xeame vient de l’analyse de ce qui se passe sur le terrain, en compagnie des gens qui sont sur le terrain."}),"\n",(0,i.jsx)(n.li,{children:"On part du principe qu’on a recrut\xe9 des gens comp\xe9tents et impliqu\xe9s, qui, dans de bonnes conditions et avec un peu d’aide, pourront aller chercher les comp\xe9tences et les connaissances dont ils auront besoin pour trouver les solutions."}),"\n",(0,i.jsxs)(n.li,{children:["Exemple : “",(0,i.jsx)(n.em,{children:"Nous avons pris du retard sur nos objectifs de vente, nous avons donc besoin de comprendre ce qui se passe. Comme vous le savez, tous les probl\xe8mes rencontr\xe9s par le client qui ach\xe8te nos produits se traduisent par un cycle de vente plus long. J’ai repens\xe9 notre tableau de ventes afin que chaque commercial puisse se rendre compte du lead time de chaque vente en cours. A partir de demain, je viendrai creuser chaque jour quelques cas de vente afin que nous puissions d\xe9cortiquer des dossiers sp\xe9cifiques. Cela devrait nous aider \xe0 d\xe9couvrir pourquoi il est difficile pour certains clients d’acheter chez nous, et ce que nous pouvons faire pour d\xe9velopper une meilleure relation avec eux."}),"”"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Centrer la strat\xe9gie autour de l’apprentissage ",(0,i.jsx)(n.strong,{children:"commence par la hi\xe9rarchie"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si le CEO et l’\xe9quipe de direction n’adoptent pas la d\xe9marche lean, elle n’aura au mieux qu’un effet marginal dans l’entreprise."}),"\n",(0,i.jsxs)(n.li,{children:["Si la hi\xe9rarchie ne pratique pas l’apprentissage au quotidien \xe0 partir du terrain :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Elle fera des erreurs avec de lourdes cons\xe9quences."}),"\n",(0,i.jsx)(n.li,{children:"Les employ\xe9s finiront par se d\xe9motiver, voyant leurs propositions se faire rejeter par une direction qui a des id\xe9es pr\xe9con\xe7ues."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dans le lean, la strat\xe9gie se d\xe9cline en ",(0,i.jsx)(n.strong,{children:"4C"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Chercher"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L’\xe9quipe dirigeante va fr\xe9quemment sur le terrain pour aider les \xe9quipes \xe0 r\xe9soudre des probl\xe8mes du quotidien."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Confronter"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Elle adopte une “vue d’h\xe9licopt\xe8re” pour d\xe9couvrir les enjeux majeurs.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["L’exercice de l’",(0,i.jsx)(n.strong,{children:"h\xe9licopt\xe8re"})," consiste \xe0 faire des va et vient entre les d\xe9tails des probl\xe8mes du terrain, et le niveau strat\xe9gique o\xf9 il s’agit d’avoir une vision d’ensemble."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cadrer"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Elle d\xe9cline ces enjeux au sein des \xe9quipes pour que chacune contribue \xe0 son niveau \xe0 l’effort d’apprentissage de l’entreprise."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Co-construire"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les managers aident les \xe9quipes \xe0 d\xe9velopper des capacit\xe9s \xe0 trouver des solutions, pour r\xe9pondre aux enjeux qui les concernent."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["La strat\xe9gie 4C implique ",(0,i.jsx)(n.strong,{children:"d’arr\xeater de bouleverser l’entreprise"})," sur des coups de t\xeate.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les managers ont en g\xe9n\xe9ral du mal \xe0 accepter ce point, parce que jouer aux apprentis sorciers est addictif."}),"\n",(0,i.jsxs)(n.li,{children:["Parmi ce qui rentre l\xe0-dedans :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"R\xe9organiser les services."}),"\n",(0,i.jsx)(n.li,{children:"Pousser des id\xe9es de nouveaux produits."}),"\n",(0,i.jsx)(n.li,{children:"D\xe9ployer de nouveaux processus de fonctionnement."}),"\n",(0,i.jsx)(n.li,{children:"Externaliser des parties de l’activit\xe9."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["C\xf4t\xe9 cadre de fonctionnement pour favoriser l’apprentissage, le lean dispose du mod\xe8le ",(0,i.jsx)(n.strong,{children:"TPS"})," (Toyota Production System).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Une partie des anciens de Toyota l’ont renomm\xe9 ",(0,i.jsx)(n.em,{children:"Thinking People System"})," pour mieux communiquer l’intention qu’il y a derri\xe8re."]}),"\n",(0,i.jsx)(n.li,{children:"Il a \xe9t\xe9 \xe9prouv\xe9 dans de nombreuses industries, et pour toutes les tailles d’entreprise."}),"\n",(0,i.jsxs)(n.li,{children:["Il est constitu\xe9 de 4 parties principales :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"La satisfaction client"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"R\xe9pondre au besoin sp\xe9cifique de chaque client."}),"\n",(0,i.jsx)(n.li,{children:"Cr\xe9er de nouveaux produits pour apporter de la valeur aux clients."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Le Jidoka"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["R\xe9ussir \xe0 faire un travail de qualit\xe9, et \xe9liminer la cause des d\xe9fauts ",(0,i.jsx)(n.strong,{children:"d\xe8s qu’ils se pr\xe9sentent"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Le Juste-\xe0-temps"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["R\xe9duire le ",(0,i.jsx)(n.em,{children:"lead time"}),", et avoir un ",(0,i.jsx)(n.strong,{children:"flux continu"})," de valeur."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Le socle de stabilit\xe9"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\xcatre dans un environnement qui favorise la contribution et l’apprentissage de chacun sur le terrain."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le lean n\xe9cessite des mois, voire des ann\xe9es \xe0 \xeatre ma\xeetris\xe9 du fait de nombreux concepts contre-intuitifs","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mais selon l’auteur \xe7a en vaut la peine, parce qu’il r\xe9pond efficacement \xe0 la plupart des questions de management, et permet d’\xeatre efficace tout en cr\xe9ant un environnement agr\xe9able pour les employ\xe9s."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4---votre-p\xe9riple-lean",children:"4 - Votre p\xe9riple lean"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ce qu’il ",(0,i.jsx)(n.strong,{children:"ne faut pas"})," faire (en tant que dirigeant) :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"D\xe9l\xe9guer la mise en place du lean."}),"\n",(0,i.jsxs)(n.li,{children:["Lire quelques ressources sur le sujet et se dire qu’on est bon.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le lean c’est ",(0,i.jsx)(n.strong,{children:"avant tout de la pratique"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Appliquer le lean aux autres plut\xf4t qu’\xe0 soi."}),"\n",(0,i.jsx)(n.li,{children:"Mettre en place plein d’outils lean, et s’assurer que les gens les utilisent."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le lean est une ",(0,i.jsx)(n.strong,{children:"pratique personnelle, comme le tennis ou le piano"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il y a des pratiquants de diff\xe9rents niveaux."}),"\n",(0,i.jsx)(n.li,{children:"Quand on est d\xe9butant, on n’arrive pas \xe0 grand-chose et c’est normal : il faut commencer par des exercices et progresser petit \xe0 petit."}),"\n",(0,i.jsx)(n.li,{children:"Il faut se lancer dans la pratique, et la compr\xe9hension viendra au fur et \xe0 mesure."}),"\n",(0,i.jsxs)(n.li,{children:["Au bout d’un moment on arrive \xe0 un plateau, on peut alors lire une ressource plus avanc\xe9e, ou se faire accompagner par un pratiquant qui a de l’exp\xe9rience (",(0,i.jsx)(n.em,{children:"sense\xef"}),").","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vu la nature du lean (apprendre au quotidien \xe0 partir du terrain), un sense\xef ext\xe9rieur ne pourra que tenir le r\xf4le de coach, en donnant des pistes \xe0 partir de ce qu’il voit, des id\xe9es d’exercice etc. Il ne pourra pas mettre le lean en place dans l’entreprise \xe0 notre place."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On ne peut pas mettre en place le lean dans l’entreprise en l’imposant comme un process \xe0 respecter. \xc7a ne marcherait pas.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Une des raisons c’est que le lean n\xe9cessite une grande implication pour entrer dans un processus d’apprentissage, et on ne peut pas esp\xe9rer que tous les employ\xe9s d’une entreprise aient cette implication en m\xeame temps."}),"\n",(0,i.jsxs)(n.li,{children:["Une des cons\xe9quences c’est que ",(0,i.jsx)(n.strong,{children:"le lean ne se met pas en place en quelques semaines"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["La bonne mani\xe8re de s’y prendre c’est de commencer soi-m\xeame \xe0 appliquer le processus en commen\xe7ant par des exercices (le chapitre suivant en donne).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On peut ensuite embarquer les personnes motiv\xe9es autour de soi, en les aidant \xe0 faire la m\xeame chose de leur c\xf4t\xe9."}),"\n",(0,i.jsx)(n.li,{children:"Au bout d’un moment, de plus en plus de personnes de l’entreprise pratiquent le lean."}),"\n",(0,i.jsx)(n.li,{children:"Il se peut qu’il reste finalement quelques personnes compl\xe8tement r\xe9ticentes \xe0 cette approche : elles trouveront une meilleure opportunit\xe9 professionnelle ailleurs."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5---passez-\xe0-la-pratique",children:"5 - Passez \xe0 la pratique"}),"\n",(0,i.jsx)(n.h3,{id:"1---chercher-pour-confronter",children:"1 - Chercher pour confronter"}),"\n",(0,i.jsx)(n.h4,{id:"commencer-par-le-gemba",children:"Commencer par le Gemba"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Gemba"})," veut dire “l’endroit o\xf9 les choses se passent r\xe9ellement”, c’est “le terrain”.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\xc7a peut \xeatre d’aller voir les clients qui utilisent le produit, les employ\xe9s qui fabriquent le produit, ou encore m\xeame les fournisseurs s’il y en a."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["La posture \xe0 adopter pendant les Gemba walk c’est “",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Aller voir, demander pourquoi, faire preuve de respect"})}),"” : il s’agit en grande partie d’essayer d’",(0,i.jsx)(n.strong,{children:"y apprendre des choses sur la r\xe9alit\xe9 du terrain"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Exercice :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"En tant que cadre / dirigeant, on r\xe9serve des cr\xe9neaux dans son agenda, par exemple un jour par semaine, o\xf9 on va faire un Gemba walk."}),"\n",(0,i.jsxs)(n.li,{children:["On peut commencer par poser des questions ax\xe9es orient and support.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si on va voir un client :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Orient : qu'est-ce que vous essayez d’obtenir avec notre produit ?"}),"\n",(0,i.jsx)(n.li,{children:"Support : qu'est-ce que vous appr\xe9ciez dans notre produit ? Qu’est-ce qui vous aiderait davantage ?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si on va voir une \xe9quipe de delivery :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Orient : qu’est-ce que vous essayez d’am\xe9liorer dans le produit ?"}),"\n",(0,i.jsx)(n.li,{children:"Support : qu’est-ce qui est difficile ? Comment je pourrais vous aider ? Quelle est la prochaine \xe9tape pour r\xe9soudre le probl\xe8me ?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On va ensuite demander \xe0 ",(0,i.jsx)(n.strong,{children:"voir la r\xe9alit\xe9 des faits"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Par exemple, si on a demand\xe9 \xe0 une \xe9quipe de dev de raconter un incident de prod, on peut maintenant demander \xe0 voir le code, les specs, et les tests correspondant \xe0 l’endroit probl\xe9matique."}),"\n",(0,i.jsx)(n.li,{children:"A une \xe9quipe de sales, apr\xe8s les avoir questionn\xe9s sur un client manqu\xe9, on pourra demander \xe0 voir les \xe9changes par mail, les propositions commerciales etc. pour en apprendre plus \xe0 partir des faits."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si on tombe face \xe0 quelque chose qui nous surprend, il faut r\xe9sister \xe0 la tentation “Command & Control” de dire ce qu’il faut faire pour faire “mieux”.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Au lieu de \xe7a, il faut ",(0,i.jsx)(n.strong,{children:"chercher \xe0 comprendre pourquoi"}),", pour essayer de remonter \xe0 la cause du probl\xe8me, et laisser \xe0 l’\xe9quipe la possibilit\xe9 de d\xe9couvrir elle-m\xeame comment le r\xe9gler.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L’id\xe9e c’est qu’elle soit dans un processus d’apprentissage, pour qu’elle sache \xe0 l’avenir r\xe9gler le probl\xe8me elle-m\xeame."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["En tant que dirigeant, on doit aussi \xeatre ",(0,i.jsx)(n.strong,{children:"attentif aux d\xe9rives Command & Control"})," et mauvaises pratiques du genre.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Est-ce que certains employ\xe9s sont mis sous pression ? Est-ce qu’ils en sont r\xe9duits \xe0 suivre des processus au d\xe9triment de l’int\xe9r\xeat du client ? Est-ce qu’ils se battent pour l’int\xe9r\xeat de leur d\xe9partement au d\xe9triment de l’int\xe9r\xeat de l’entreprise ? etc."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Pour que les employ\xe9s osent r\xe9v\xe9ler les vrais probl\xe8mes, il faut les mettre dans un** climat de confiance** et de s\xe9curit\xe9 psychologique. Et donc il faut tol\xe9rer l’erreur.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En revanche, il faut \xeatre moins tol\xe9rant envers le fait de commettre deux fois la m\xeame erreur, pour qu’ils ne s’imaginent pas que c’est la f\xeate non plus.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NDLR : “La confiance mais pas trop”..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Les probl\xe8mes pertinents \xe0 r\xe9soudre sont regroup\xe9s autour de 4 axes, et sont d\xe9crits par le TPS."}),"\n"]})]})}n.default=(0,r.j)(o)}},function(e){e.O(0,[774,105,888,179],function(){return e(e.s=6538)}),_N_E=e.O()}]);