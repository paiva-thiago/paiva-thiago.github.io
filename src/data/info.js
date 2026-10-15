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
  desc: 'Full-stack software engineer with two decades of experience, focused on Java (8–21) and Spring Boot since 2014. Proven track record building RESTful APIs and microservices for high-volume, mission-critical production systems — including financial platforms and investor-data systems demanding strict data-model compliance and reliability. Skilled in production root-cause analysis, system monitoring, Docker-based deployments, and Agile/Scrum delivery within international, distributed teams. Experienced mentoring junior engineers and continuously expanding into new frameworks and cloud practices to keep pace with a fast-moving stack.',
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
    '04/2025',
    '10/2026',
    'Full Stack Developer',
    'act digital (@ SLIB)',
    'Lisbon, Portugal — Hybrid 2x/week',
    `<ul>
      <li>Contributed to the greenfield development of a Registered Investor Management System for capital markets, within an international Agile (Scrum) team — a business-critical, compliance-driven system.</li>
      <li>Built Java Spring Boot microservices and RESTful APIs managing sensitive investor registration, eligibility, and holding data, under strict data-model compliance.</li>
      <li>Applied TDD and Hexagonal Architecture to decouple core domain logic from frameworks and infrastructure, improving testability and long-term maintainability.</li>
      <li>Developed batch processes to validate and parse text files for reliable, high-volume data ingestion.</li>
      <li>Designed a reusable library for parsing text/CSV files, cutting development time for file-parsing features by 50% and reducing duplication across services.</li>
      <li>Collaborated on front-end service loading and i18n, delivering the application in English and French.</li>
    </ul>`,
    'Java 21, Maven, Spring Boot, RESTful APIs, Microservices, Hexagonal Architecture, TDD, PostgreSQL, AngularJs, PrimeNG, XLDeploy, Jenkins (CI/CD), Jira, BitBucket.'
  ),
  job(
    '09/2024',
    '03/2025',
    'Full Stack Developer',
    'Innotech (@ Transportes Metropolitanos de Lisboa)',
    'Lisbon, Portugal — Hybrid 2x/week',
    `<ul>
      <li>Owned and evolved a suite of Java Spring Boot microservices forming the core high-volume invoicing and payment engine for Lisbon's metropolitan mobility system (metro, bus, tram, train) — a real-time, business-critical production system.</li>
      <li>Performed root-cause analysis and delivered corrective fixes for production incidents in critical, high-throughput financial flows, ensuring reliability, data integrity, and revenue assurance.</li>
      <li>Monitored system performance and data flow with Grafana, enabling proactive detection of issues before they impacted financial operations.</li>
      <li>Maintained a legacy transport-card management system (Java 7, JSF, Oracle) alongside the microservices platform.</li>
      <li>Collaborated within a national Agile team, hybrid model, on-site 2x/week.</li>
    </ul>`,
    'Java 7/11/17, Spring Boot, Microservices, PostgreSQL, Oracle, HTML, CSS, JavaScript, Angular, Jenkins, Grafana, Maven'
  ),
  job(
    '12/2023',
    '06/2024',
    'Solution Systems Engineer',
    'Thales Edisoft',
    'Oeiras, Lisbon, Portugal — Hybrid 1x/week',
    `<ul>
      <li><strong>Project 1 — Flight Data Dashboard</strong></li>
      <li>Developed a dashboard from the ground up — architecture through implementation — to visualize airport flight-plan data.</li>
      <li>Owned the full project lifecycle as sole/lead developer, from design through delivery.</li>
      <li>Led knowledge transfer to junior developers at handoff, including documentation and onboarding support — demonstrating a track record of mentoring.</li>
      <li><strong>Project 2 — Aeronautical Information System (AIS)</strong></li>
      <li>Maintained and evolved the AIS, used by multiple airports worldwide to exchange flight routes, plans, and meteorological data — corrective and evolutionary work across data management, API development, and UI on a Java Swing desktop application (chosen to meet the client's desktop-deployment requirement).</li>
      <li>Worked full Agile ceremonies (dailies, retrospectives, sprint reviews) within a distributed France/Portugal team, communicating fully in English.</li>
    </ul>`,
    'Java 16/17, Spring Boot, Spring Data JPA, RESTful APIs, Microservices, PostgreSQL, Docker, Linux, Tomcat, RabbitMQ, Gradle, Scrum, Kanban, HTML, CSS, JavaScript, Maven'
  ),
  job(
    '09/2021',
    '11/2023',
    'Software Developer',
    'Integer Consulting',
    'Oeiras, Lisbon, Portugal — Remote',
    `<ul>
      <li>Developed and maintained occupational health & safety risk-data systems, delivering evolutionary enhancements and corrective fixes.</li>
      <li>Collaborated with a cross-functional team of 3 developers and 2 testers to ensure seamless integration and high-quality delivery.</li>
      <li>Introduced and implemented Scrum methodology to improve team productivity and delivery efficiency; acted as Scrum Master facilitating stand-ups and fostering a transparent team environment.</li>
    </ul>`,
    'Java 5/7, Maven, Swing, Oracle 12, EJB, Jenkins, Glassfish, Scrum, Kanban'
  ),
  job(
    '03/2021',
    '09/2021',
    'IT Analyst',
    'CRECI',
    'São Paulo, Brazil — Remote',
    `<ul>
      <li>Built and maintained a .NET (C#) back-office system exposing properties for sale with broker contact information for more dynamic sales.</li>
      <li>Researched and developed a next-generation customer-service chat MVP: evaluated Tiledesk, implemented a scalable backend with Node.js and RabbitMQ, and delivered a functional prototype with integration guidelines, plus an alternative PHP/Laravel prototype for stakeholder comparison.</li>
    </ul>`,
    '.NET, EF, C#, ASP, Node.js, RabbitMQ, PHP, Laravel'
  ),
  job(
    '04/2018',
    '03/2021',
    'Senior Systems Analyst',
    'IT Department, Municipality of São Bernardo do Campo',
    'São Bernardo do Campo, Brazil — On site',
    `<ul>
      <li><strong>Project 1 — Budget Control System</strong></li>
      <ul>
        <li>Contributed to development and maintenance of a web-based budget-control system (Struts, EJB) for the city's budget department, with Jenkins-managed deployment.</li>
      </ul>  
      <li><strong>Project 2 — Tax Management System</strong></li>
      <ul>
        <li>Met with users to align improvements, fix code, and build new features; developed contract-management modules for housing programs, including an API web service for system integrations; led migration from Java 6 to Java 10.</li>
      </ul>
      <li><strong>Project 3 — Bank-Slip Registration REST Service</strong></li>
      <ul>
        <li>Led requirements gathering, supplier meetings, and tech-stack/architecture definition for a REST web service for online bank-slip registration, including a CI/CD pipeline on Jenkins and an admin dashboard for token management and log visualization.</li>
      </ul>
    </ul>`,
    'Java 6/10/11, Spring Boot, Spring Data JPA, Spring Web MVC, RESTful APIs, Oracle, Node.js, Jenkins, NPM, Struts, EJB, JBoss, Tomcat, Thymeleaf, JUnit, Mockito, CI/CD, Maven, GitLab, JavaScript, jQuery, CSS, HTML, Kanban'
  ),
  job(
    '01/2017',
    '03/2018',
    'Senior Systems Analyst',
    'Meta Informática',
    'São Paulo, Brazil — On site',
    `<ul>
      <li>Member of a support team at a leading Brazilian insurance company; significantly improved incident-resolution times using Agile practices (daily stand-ups, Kanban).</li>
    </ul>`,
    'Java 8, JSF, RichFaces, JPA, Hibernate, EJB, WebSphere, RTC, JavaScript, CSS, HTML, Scrum, Kanban'
  ),
  job(
    '04/2015',
    '12/2016',
    'Substitute Teacher',
    'IFSP',
    'Cubatão, Brazil',
    `<ul>
      <li>Taught web development and introductory algorithm courses in systems analysis and development.</li>
    </ul>`,
    'HTML5, CSS, JavaScript, Java EE, JSF, JPA, PrimeFaces, C#, PHP'
  ),
  job(
    '08/2005',
    '05/2016',
    'Programmer Analyst',
    'Virtus Informática',
    'Santos, Brazil',
    `<ul>
      <li>Developed desktop and web CMS systems for a public sanitation authority and a meal-ticket product line, including barcode-reader integration and a customer-facing PHP web portal (7 years).</li>
      <li>Migrated the meal-ticket desktop system (Delphi) to a Java/JSF web portal using MVC architecture (4 years).</li>
    </ul>`,
    'Delphi 5/7, Java 8, JSF, PrimeFaces, JPA, Hibernate, Tomcat, PHP5, Oracle, JavaScript, jQuery, CSS, HTML5, Smarty, Flash'
  )
]

const partTimes = [
  job(
    'Since 09/2026',
    '',
    'Teacher',
    'Sharkcoders',
    'Algés Lisbon, Portugal',
    `<ul>
      <li>Teaching programming and game development skills for kids and teenagers from 4 to 16 years old.</li>
    </ul>`,
    'Python, Lua, Defold, GDevelop, Minecraft Education'
  )
]

export default {
  headerData: headerData,
  jobs,
  partTimes
}