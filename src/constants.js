/*
Filename: constants.js
Contributors:
  - Spring 2019:
    -- Parker Wagner - Initially created the file and extracted things that should have been constants.
    -- Stephen Tate - added the school colors and homepageBackground functionality

  - Spring 2020:
    -- Mario Arturo Lopez Martinez - Added strapiURL for local testing
 */

import Strapi from "strapi-sdk-javascript/build/main";

// Uncomment this for testing with ECS server
// export const strapiURL = "http://192.168.3.202:1337";

// Uncomment this for local testing
export const strapiURL = "http://localhost:1337";

export var strapi = new Strapi(strapiURL);

//Put the name of your university here
export const university = "Baylor University";

//These colors make up the theme of the website. Use a site like https://www.hexcolortool.com/ to find your school's colors in hex
export let schoolColorPrimary = "#003015";
export let schoolColorSecondary = "#fecb00";

export let homepageBackground =
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Baylor_University_June_2016_19_%28Founders_Mall_and_Pat_Neff_Hall%29.jpg";
