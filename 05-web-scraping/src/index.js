import jsdom from "jsdom";
import fetch from "isomorphic-fetch"
import puppeteer from "puppeteer"

const wikipedia = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://fr.wikipedia.org/wiki/Canton_(Suisse)#Donn%C3%A9es_cantonales');

    ///////// Prend un screenshot de la page
    await page.screenshot({
        path: '/screenshots/screenshot.jpg'
    });

    ///////// Affiche le nom de tous les cantons dans la console
    // Première façon de faire avec $eval
    const noms = await page.$$('#mw-content-text div table.wikitable tbody tr td:nth-of-type(1)');
    const populations = await page.$$('#mw-content-text div table.wikitable tbody tr td:nth-of-type(4)');

    for (let i = 0; i < noms.length; i++) {
        const nom = await noms[i].$eval('a', el => el.textContent);
        const population = await populations[i].$eval('bdi', el => el.innerText);
        console.log(nom, ":", population);
    }

    // Deuxième façon de faire avec evaluate
    // const cantons = await page.$$('#mw-content-text div table.wikitable tbody tr td:first-of-type a');

    // for (let i = 0; i < cantons.length; i++) {
    //     const result = await cantons[i].evaluate(canton => canton.textContent);
    //     console.log(result);
    // }

  
    await browser.close();
  }

  //wikipedia();


  const ecommerce = async () => {
    const requete = await fetch('https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
    const reponseTexte = await requete.text();
    const creationDOM = await new jsdom.JSDOM(reponseTexte);

    const produits = creationDOM.window.document.querySelectorAll("div.container.test-site div.thumbnail");

    const listeProduits = [];

    for (let i = 0; i < produits.length; i++) {
        const produit = produits[i];

        const nom = produit.querySelector("a.title").title;
        const prix = produit.querySelector("h4.price").textContent;
        const etoiles = produit.querySelector("div.ratings p[data-rating]").dataset.rating;

        listeProduits.push({
            "produit": nom,
            "prix": prix,
            "etoiles": Number(etoiles)
        });
        
    }

    console.log(listeProduits);
  }

  ecommerce();