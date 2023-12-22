<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/icons/512.png" alt="Logo" width="320" height="320">
  </a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


ManagerApp is a soccer score and data tracking app created in response to a local sports facilities application having consistent operational issues. Currently being used by roughly 30 users across 4 teams. This application tracks player rosters, game scores and goals across any number of teams. With simple functionality and ease of use by admins this is a great improvement of the alternative system.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Redux][Redux.js]][Redux-url]
* [![Express][Express.js]][Express-url]
* [![Node][Node.js]][Node-url]
* [![Prisma][Prisma.io]][Prisma-url]
* [![Tailwind][Tailwind.css]][Tailwind-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:ManagerAppAfrims/ManagerApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create your local database
   ```sh
   createdb your_database_name
   ```
4. Initialize Prisma / Confirm there is a .env file
   ```sh
   npx prisma init
   ```
5. Update DATABASE_URL in `.env`
   ```js
   DATABASE_URL = "postgres://username:password@localhost:5432/your_database_name"
   ```
6. Migrate database
   ```sh
   npx prisma migrate dev
   ```
7. Run application in Developer mode
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Incorporate individual player statistics
- [ ] Improve styling for larger devices


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-20232A?style=for-the-badge&logo=redux&logoColor=%23764ABC
[Redux-url]: https://redux.js.org/
[Express.js]: https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=%23FFFFFF
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/node-20232A?style=for-the-badge&logo=nodedotjs&logoColor=%23339933
[Node-url]: https://nodejs.org/en
[Prisma.io]: https://img.shields.io/badge/prisma-20232A?style=for-the-badge&logo=prisma&logoColor=%232D3748
[Prisma-url]: https://www.prisma.io/
[Tailwind.css]:https://img.shields.io/badge/tailwind.css-20232A?style=for-the-badge&logo=tailwindcss&logoColor=%2306B6D4
[Tailwind-url]: https://www.tailwindcss.com/







