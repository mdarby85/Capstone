# ⛰️ Meridian: Capstone Management System

<p align="center">
    <img src="https://i.imgur.com/gSbd0DD.png" width="500" alt="Meridian Logo">
</p>

- [⛰️ Meridian: Capstone Management System](#%e2%9b%b0%ef%b8%8f-meridian-capstone-management-system)
  - [Project Description](#project-description)
  - [Contributors](#contributors)
    - [CSI 43C9 Section 02 Group 01 Spring 2019](#csi-43c9-section-02-group-01-spring-2019)
    - [CSI 43C9 Section 01 Group 02 Spring 2020](#csi-43c9-section-01-group-02-spring-2020)
  - [Project Structure](#project-structure)
    - [Front-End](#front-end)
    - [Back-End](#back-end)
  - [Installation Guide](#installation-guide)
    - [Prerequisites](#prerequisites)
    - [Optional:](#optional)
    - [Run Front-End Only:](#run-front-end-only)
    - [Build & Deploy Containers (Run Front-End, Middleware, and Back-End Locally):](#build--deploy-containers-run-front-end-middleware-and-back-end-locally)
    - [Default Hosts/Ports:](#default-hostsports)

## Project Description

Capstone programs offer opportunities for students to demonstrate the culmination of their learnings in an education institution or environment. The entire spectrum of departments, programs, degrees, etc. across universities have the ability to design a capstone program which produces some sort of tangible asset or intellectual property. For example, art degrees culminate in a final major piece of work; life science degrees have some sort of research, engineering is some sort of research or product, computer science is software, literature is books/novels/etc., and on and on.

Many times, universities and other organizations have limited marketing material and information rolled into their existing organization wide Content Management Systems (CMS) on a single or few pages that are buried beneath the department’s own pages. The information is not centralized, and the features are lacking in depth that could be possible for a dedicated platform for hosting, managing, and showcasing the capstone programs.

Meridian aims to solve these issues.

## Contributors

### CSI 43C9 Section 02 Group 01 Spring 2019

|        Name        |     Role      |
| :----------------: | :-----------: |
| Prof. Michael Aars |    Advisor    |
| Prof. David Engfer | Product Owner |
|    Stephen Tate    |   Developer   |
|   Parker Wagner    |   Developer   |
|     Ryan Cave      |   Developer   |
|   Brenden Detels   |   Developer   |

Most (95%) of the original code was purged. We decided it would take more time to re-factor code than to start from scratch with much more robust/cleaner code. Their version can be found on the [legacy branch](#to-do).

### CSI 43C9 Section 01 Group 02 Spring 2020

|            Name             |       Role        |
| :-------------------------: | :---------------: |
|     Prof. Michael Aars      |      Advisor      |
|     Prof. David Engfer      |   Product Owner   |
|      Christopher Holle      | Liaison/Developer |
|        Matthew Darby        | Deputy/Developer  |
|       Elisa Gonzales        |     Developer     |
| Mario Arturo Lopez Martinez |     Developer     |
|       Brandon Wilcox        |     Developer     |

## Project Structure

### Front-End

Cappy's front-end consists of a React.js application build around GatsbyJS with GraphQL for dynamically loading data from our data-store.

<p align="center">
    <img src="https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png" width="75" alt="ReactJS Logo">
    <img src="https://www.gatsbyjs.org/Gatsby-Monogram.svg" width="75" alt="GatsbyJS Logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" width="75" alt="GraphQL Logo">
</p>
             
### Back-End

Meridian's backend consists of a Strapi instance running atop of a MongoDB instance. These are both run out of docker containers, and provide a persistent data store with which Meridian's front-end may interact.

Strapi provides an API to mediate this access, and even provides the API calls for dynamically configurable types, so site admins who are managing Meridian can even get creative and make new content types if they wish.

<p align="center">
    <img src="https://seeklogo.com/images/S/strapi-logo-3566BEBAAE-seeklogo.com.png" width="75" alt="Strapi Logo">
    <img src="https://www.pngitem.com/pimgs/m/385-3850359_icon-mongodb-logo-hd-png-download.png" width="75" alt="GraphQL Logo">
</p>

## Installation Guide

This configuration has been tested on Windows 10 (Pro Build 1909), MacOS 10.15 Catalina, and Ubuntu Server (18.04 LTS). It should work on all of these platforms without issue, if it doesn't, you probably broke something.

### Prerequisites

- NodeJS + NPM Installed (https://nodejs.org/en/download/)

- Gatsby Installed (https://www.gatsbyjs.org/tutorial/part-zero/)

- Docker Installed (https://docs.docker.com/install/)

  - We deploy our services (Front-end, APIs, DBs) using Docker containers to easily package, ship, and run our applications as portable light-weight containers.

- Ensure `wait-for-strapi.sh` and `strapi/strapi.sh` have `LF` (\*NIX-style) line endings and not `CRLF` (Windows-style) line endings

  - Without the correct line endings, you won't be able to run these scripts in your docker container.
  - Most modern text editors (VSCode, Sublime, Notepad++) allow you to change the line-endings on a file.

### Optional:

- Install Yarn Package Manager (https://classic.yarnpkg.com/en/docs/install)
  - Alternate package manager to NPM
  - Faster, more secure, cleaner output, more functionality, cross-platform...
  - More info: https://www.sitepoint.com/yarn-vs-npm/

### Run Front-End Only:

- Run the following command: `npm install` or `yarn`
- Run the following command: `npm start` or `yarn start`

### Build & Deploy Containers (Run Front-End, Middleware, and Back-End Locally):

- Ensure you're in the project root directory

- Run the following command: `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`
  - If images have not been built, this will build images using the various `docker-compose` and `Dockerfile` configurations (usually takes around 5-10 minutes)
    - You only have to build once, after that, the same script will simply start up the containers
  - If images have already been built, it usually takes about 1-3 minutes for containers to spin up, be patient
  - All `Dockerfile` and `docker-compose` files are heavily documented, you can feel free to modify/update your containers as needed
- To shut down the containers simply run `docker-compose down`

Note: Strapi and MongoDB containers will be 'empty' upon building for the first time, you have to import the schema yourself [Docs on that found here.](#to-do)

### Default Hosts/Ports:

- Meridian front-end defaults to [`localhost:8000`](http://localhost:8000)
- GraphiQL panel defaults to [localhost:8000/\_\_graphql](http://locahost:8000/__graphql)
- Strapi Admin Panel defaults to [localhost:1337/admin](http://localhost:1337/admin)
