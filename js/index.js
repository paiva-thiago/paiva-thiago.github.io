var cabecalho  = new Vue({
	el: '#header',
	data:{
	  name:'Thiago Paiva',
	  desc:'Developer with more then 13 years of experience. Started studying computing as a hobby, when was a teenager, after some courses discovered the passion about finding faster ways to automatize processes and sharing the knowledge of the discoveries with the people. Worked in public and private sectors, likes Java and Loves JavaScript!',
	  PPT:'Professional Projects Timeline',
	  links:[
		 {ico:'fab fa-linkedin',title:'Linkedin',url:'https://www.linkedin.com/in/thiagormp'},              
		 {ico:'fab fa-github',title:'GitHub',url:'https://github.com/paiva-thiago'},
		 {ico:'fab fa-codepen',title:'Codepen',url:'https://codepen.io/paivacodes/'},
		 {ico:'fas fa-user-graduate',title:'Lattes',url:'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4453321T3'},
		 {ico:'fab fa-flickr',title:'Flickr (I LOVE taking pictures!)',url:'http://www.flickr.com/thiago_paiva'}
		
	  ]
	}   
  });
  var linhaTempo = new Vue({
	el: '#timeline',
	data: {
	  ages: [
		{ type: 'place', class:"sign place", hasText:false, title:'Cubatão'},
		{ type: 'hist',  class:"content", hasText:true, title:'2005', pos:'container left', sTitle1:'Intern', sTitle2:'Virtus Informática - Cubatão/SP', txt:'Starting developing in a small IT consulting based in Cubatão. Entered in a Desktop System Maintanence team, starting creating new reports and fixing old reports.', techs:'Delphi/Oracle/QReport'},
		{ type: 'status', class:"sign status", hasText:false, title:'2006 Technologist in Data Processing FATEC/BS'},
		{ type: 'hist',  class:"content", hasText:true, title:'2006-2008', pos:'container right', sTitle1:'Programmer Analyst', sTitle2:'Virtus Informática - Cubatão/SP', txt:'Now as a permanent member of the team, started developing a web portal for meal ticket companies. That was a part of a solution composed by an ERP Desktop System and a web portal for the company\'s clients make the orders or consulting ticket statements. That was a huge increase in the solution value creating a more interative way of relationship with our clients.', techs:'PHP/Oracle/Smarty Templates/HTML/Javascript'},     
		{ type: 'status', class:"sign status", hasText:false, title:'2008 Technological Aesthetics Specialist PUC/SP'},
		{ type: 'hist',  class:"content", hasText:true, title:'2008-2012', pos:'container left', sTitle1:'Pl Programmer Analyst', sTitle2:'Virtus Informática - Cubatão/SP', txt:'Entered in a new project. A CMS and a Virtual Agency for a public sanitation authority. With the web agency, their users could get water bills or make order for water connections in a faster way than using telephones or getting in person. ',  techs:'PHP/Oracle/Smarty Templates/HTML/Javascript'},
		{ type: 'place', class:"sign place", hasText:false, title:'Santos'},
		{ type: 'hist',  class:"content", hasText:true, title:'2012-2014', pos:'container right', sTitle1:'Sr Programmer Analyst', sTitle2:'Virtus Informática - Santos/SP', txt:'New city, new projects but same company. Maintenance of the ERP System for meal ticket companies. Also worked on a migration project when one of our customer was sold, moving all data from our system to the new owner. ',  techs:'Delphi/Oracle/XML'},
		{ type: 'hist',  class:"content", hasText:true, title:'2014-2016', pos:'container left', sTitle1:'Sr Programmer Analyst', sTitle2:'Virtus Informática - Santos/SP', txt:'New city, but same company and new projects. <ul><li>Maintenance of the ERP System for meal ticket companies.</li> <li>Migration project when one of our customer was sold, moving all data from our system to the new owner.</li><li>Migration from the old Delphi desktop system to a new version, in Java EE</li></ul> ',  techs:'Delphi/Oracle/XML(Maintenance of the old ERP System); Java/JPA/Hibernate/JSF/Primefaces (new Web System)'},
		{type:'place', class:'sign place', hasText:false, title:'Back to Cubatão... and Santos.'},
		{type:'hist', class:'content', hasText:true, title:'2015-2016', pos:'container right', sTitle1:'Substitute Teacher', sTitle2:'IFSP - Cubatão/SP', txt:'While working at Virtus, I have Discovered new habilities working as a Substitute Teacher (temporary contract) in a Federal Institute of Techology (Instituto Federal de Educação, Ciência e Tecnologia de São Paulo). I\'ve teach some disciplines in web, like JavaScript, Jquery, HTML5, CSS3, and Java EE. Used to help on my classes some tools like LMS (Moodle) and Webquests.', techs:'Teaching JavaScript, Jquery, HTML5, CSS3, and Java EE. Using Moodle to student\'s homework.' },
		{ type: 'status', class:"sign status", hasText:false, title:'2016 Licensed in Professional Education Centro Paula Souza'},
		{type:'place', class:'sign place', hasText:false, title:'São Paulo'},
		{type:'hist', class:'content', hasText:true, title:'2017-2018', pos:'container left', sTitle1:'Senior Analyst Java EE', sTitle2:'Meta - São Paulo/SP', txt:'After the end of the contract with IFSP, I started in a sustentation team at Meta, based on an important insurance company in São Paulo downtown. While acting on find solutions in a Car Insurance Budget Calculation System bugs, I\'ve developed some tools to help in this process.', techs:'JSF, EJB, JPA, RichFaces, Hibernate, Javascript, HTML, CSS.' },
		{type:'place', class:'sign place', hasText:false, title:'São Bernardo do Campo'},
		{type:'hist', class:'content', hasText:true, title:'2018', pos:'container right', sTitle1:'Senior Systems Analyst', sTitle2:'Prefeitura Municipal de São Bernardo do Campo/SP', txt:'Working in development of tax systems of the city hall.', techs:'Struts1, EJB1, Javascript, HTML, CSS.' }
	  ]
	}
  })