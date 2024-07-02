const job = (from, to, jobTitle, company, location, description, tags) => ({
  type: 'hist',
  class: 'content',
  hasText: true,
  from,
  to,
  title: jobTitle,
  company,
  location,
  txt: description,
  techs: tags
})
const headerData = {
  name: 'Thiago Paiva',
  desc: 'Developer since 2005, with a professional journey starting with Delphi and PHP and since 2014 with Java. Committed, creative, and an enthusiast of agile methodologies, loves finding new ways to automate processes and to research for new languages and frameworks.',
  links: [
    {
      ico: 'fab fa-linkedin-in',
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/paivathiago'
    },
    { ico: 'fab fa-github', title: 'GitHub', url: 'https://github.com/paiva-thiago' },
    { ico: 'fab fa-codepen', title: 'Codepen', url: 'https://codepen.io/paivacodes/' },
    {
      ico: '',
      title: 'Lattes',
      url: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4453321T3'
    }
  ]
}
const jobs = [
  job(
    '12/2023',
    '',
    'Sr. Software Engineer',
    'Thales Edisoft Portugal',
    'Oeiras, Lisbon, Portugal',
    `<p>Development and maintenance of AIS - Aeronautical Information System, used by several airports in the world in order to exchange flying information, like routes, flight plans and meteorological data.</p>
    <p>Acting in all agile rites, like dailies, retros and sprint reviews, with part of the team in France, and other part in Portugal, with
    all the communication in english.</p>
    <p>This job was based in corrective and evolutionary maintenance of the systems, adding new features or changing them, or
    correcting some errors concerning the system working. The creation and maintenance of the features evolves data
    management, API Creations, and screen corrections/implementations (on a swing desktop application)</p>`,
    'Java 17, Spring Boot, Spring Data JPA, Microservices, RabbitMQ, Gradle, Scrum, Kanban.'
  ),
  job(
    '08/2022',
    '12/2022',
    'Coder (Development Teacher)',
    "Ada (Previously Let's code)",
    'Brazil, Remote',
    'Teaching development of systems in Java, and using of design patterns and java resources and frameworks like time API, Spring Framework and Quarkus.',
    'Java, Spring, Quarkus'
  ),
  job(
    '01/2022',
    '02/2022',
    'Content Producer',
    'Trybe',
    'Remote',
    'Development of material for java spring framework course.',
    'Java, Spring'
  ),
  job(
    '09/2021',
    '11/2023',
    'Sr. Software Developer',
    'Integer Consulting',
    'Oeiras, Lisbon, Portugal',
    `<p>Inside the Instituto de Informatica da Segurança Social, in the development and maintenance of systems focused on
    managing professional risks for workers’ health, focusing on both evolutionary enhancements and corrective measures to
    improve system functionality and performance.</p>
    <p>Collaborated closely with a cross-functional team of 3 developers and 2 testers to ensure seamless integration and
    high-quality deliverables.</p>
    <p>Introduced and implemented agile methodologies, specifically Scrum, to enhance team productivity and project efficiency.</p>
    <p>Into the agile context, also worked as a scrum master, facilitating sprint planning, daily stand-ups, sprint reviews, and
    retrospectives, fostering a collaborative and transparent team environment.</p>
    `,
    'Java5, Java6, EJB, Swing, Jenkins, SVN'
  ),
  job(
    '03/2021',
    '09-2021',
    'Senior IT Analyst',
    'CRECI-SP',
    'São Paulo, Brazil',
    `<p>Contributions to the development of systems for the company, a professional association for real estate workers.</p>
    <p> Additionally, I conducted research on new functionalities and technologies to enhance their offerings.</p>`,
    '.NET, EF, nodeJs, PHP, C#, ASP, PHP'
  ),
  job(
    '04/2018',
    '03/2021',
    'Sr. Systems Analyst',
    'São Bernardo do Campo City Hall - Third Project',
    'São Bernardo do Campo, Brazil',
    `<p>I led the team in gathering requirements, meeting with suppliers, and defining the tech stack and
    architecture for a REST web service designed for online registration of bank slips. We successfully developed this web
    service including a CI/CD job on Jenkins to deploy it. This webservice included an administrative dashboard for token
    management and log visualizations.</p>
    `,
    'Java 11. Spring Boot, API, Spring Data JPA, Spring Web MVC, Tomcat Thymeleaf. JUnit, Mockito, CI/CD, Maven, GitLab, Jenkins. Oracle. JavaScript,    CSS, HTML. Kanban.'
  ),
  job(
    '04/2018',
    '03/2021',
    'Sr. Systems Analyst',
    'São Bernardo do Campo City Hall - Second Project',
    'São Bernardo do Campo, Brazil',
    `<p>I contributed to the development and maintenance of tax management systems. I met with users to align
    improvements, correct code, and create new features. I developed modules for contract management for habitation
    programs, including contract printing and an API web service for systems integrations. I also facilitated the system
    migration from Java 6 to Java 10. It was a web based system, developed with a framework designed for migration from
    mainframe-based systems.</p>
    `,
    'Java 6, Java 10, Oracle, JavaScript, Jquery, CSS, HTML, Node JS, API, NPM, Kanban.'
  ),
  job(
    '04/2018',
    '03/2021',
    'Sr. Systems Analyst',
    'São Bernardo do Campo City Hall - First Project',
    'São Bernardo do Campo, Brazil',
    `<p>Development and maintenance of budget control systems for the city administration,
    utilized by the budget department of the city hall. It was a web based system, based on Struts and EJB, using jenkins to
    manage the deployment.</p>`,
    'Java 6, Oracle, Node JS, Jenkins, NPM, Struts, EJB, JBoss'
  ),
  job(
    '01/2017',
    '03/2018',
    'Sr. Analyst Java EE',
    'Meta',
    'São Paulo, Brazil',
    `<p>Working at a support team based on an important insurance company in São Paulo downtown. While acting on find solutions in a Car Insurance Budget Calculation System bugs, I've developed some tools to help in this process.</p>`,
    'Java 8, JSF, RichFaces, JPA, Hibernate, EJB, Websphere, RTC, Javascript, CSS, HTML. Scrum, Kanban.'
  ),

  job(
    '04/2015',
    '12/2016',
    'Substitute Teacher',
    'IFSP - Cubatão Campus',
    'Cubatão, Brazil',
    'Teaching some development courses in web, like JavaScript, Jquery, HTML5, CSS3, and Java EE. Used to help on my classes some tools like LMS (Moodle) and Webquests.',
    "Teaching JavaScript, Jquery, HTML5, CSS3, and Java EE. Using Moodle to student's activities."
  ),
  job(
    '08/2012',
    '05/2016',
    'Sr Programmer Analyst',
    'Virtus Informática',
    'Santos, Brazil',
    '<ul><li>Maintenance of the ERP System for meal ticket companies.</li> <li>Migration project when one of our customer was sold, moving all data from our system to the new owner.</li><li>Migration from the old Delphi desktop system to a new version, in Java EE</li></ul> ',
    'Delphi/Oracle/XML(Maintenance of Legacy System); Java/JPA/Hibernate/JSF/Primefaces '
  ),
  job(
    '03/2008',
    '08/2012',
    'Pl Programmer Analyst',
    'Virtus Informática',
    'Cubatão, Brazil',
    'Entered in a new project. A CMS and a Virtual Agency for a public sanitation authority. With the web agency, their users could get water bills or make order for water connections in a faster way than using telephones or getting in person. ',
    'PHP/Oracle/Smarty Templates/HTML/Javascript'
  ),
  job(
    '06/2006',
    '02/2008',
    'Jr Programmer Analyst',
    'Virtus Informática',
    'Cubatão, Brazil',
    "Now as a permanent member of the team, started developing a web portal for meal ticket companies. That was a part of a solution composed by an ERP Desktop System and a web portal for the company's clients make the orders or consulting ticket statements. That was a huge increase in the solution value creating a more interative way of relationship with our clients.",
    'PHP/Oracle/Smarty Templates/HTML/Javascript'
  ),
  job(
    '08/2005',
    '05/2006',
    'Intern',
    'Virtus Informática',
    'Cubatão, Brazil',
    'Starting developing in a small IT consulting based in Cubatão. Entered in a Desktop System Maintanence team, starting creating and fixing reports.',
    'Delphi/Oracle/QReport'
  )
]
export default {
  headerData: headerData,
  jobs
}
