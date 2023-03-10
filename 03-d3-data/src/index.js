import { json } from 'd3-fetch';
import { select, selectAll } from 'd3-selection';

Promise.all([
  json('https://jsonplaceholder.typicode.com/users'),
  json('https://jsonplaceholder.typicode.com/posts')
])
.then(([users, posts]) =>  {

    const postUser = [];
    const idUserMessageLong = posts.reduce((a, b) => a.body.length > b.body.length ? a : b).userId;

    users.forEach(user => {
        const titres_posts = posts.filter(post => post.userId === user.id);
        const objectUser = {id: user.id, nom_utilisateur: user.name, ville: user.address.city, nom_companie: user.company.name, titres_posts: titres_posts.map(post => post.title), nb_post: titres_posts.length};
        postUser.push(objectUser);
    });


    const width = 500;
    const height = 400;

    select("#board")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    const svg = select("svg");

    const nbPost = postUser.map(user => user.nb_post);
    const idUser = postUser.map(user => user.id);

    svg.selectAll("rect")
    .data(nbPost)
    .enter()
    .append("rect")
    .attr('x', (d, i) =>  i * (width/nbPost.length))
    .attr('width', (width/nbPost.length) - 5)
    .attr('y', d => height - d)
    .attr('height', d => d)

    svg.selectAll("text")
    .data(idUser)
    .enter()
    .append("text")
    .text(d => d)
    .attr("x", (d, i) =>  i * (width/nbPost.length))
    .attr("y", "380")

    select("rect:nth-of-type("+ idUserMessageLong +")").attr("fill", "#f33200");


});