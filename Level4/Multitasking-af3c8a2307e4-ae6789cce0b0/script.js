const blogPosts = {
    posts: [
        {
            titel: "Het geheim van Google",
            tags: ["Google", "Business", "Artificial Intelligence"],
            auteurs: ["Bob", "Alice"],
        },
        {
            titel: "IT bepaalt de toekomst",
            tags: ["Filosofie", "Innovatie"],
            auteurs: ["Alice"],
        },
        {
            titel: "Je zal deze 10 redenen dat ik een hekel heb aan clickbait en ironie nooit geloven!!!",
            tags: ["Cultuur", "Opinie"],
            auteurs: ["Bob"],
        },
    ],
};

/**
 * Simuleer het ophalen van data vanuit een API.
 * @returns een promise voor het getPosts object dat hierboven staat.
 */
async function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blogPosts);
        }, 2000);
    });
}

async function BlogPosts() {
    const result = await getPosts();

    result.posts.forEach((post, index) => {
        const titel = document.getElementById(`titel${index}`);
        const auteurs = document.getElementById(`auteurs${index}`);
        const tags = document.getElementById(`tags${index}`);

        titel.textContent = post.titel;
        auteurs.textContent = post.auteurs.join(', ');
        tags.textContent = post.tags.join(', ');
    });
}

BlogPosts();


