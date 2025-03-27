/*
    This file contains the data of the movies that will be displayed in the application.
    Each movie has the following properties:
    - id: The unique identifier of the movie.
    - title: The title of the movie.
    - director: The director of the movie.
    - year: The year the movie was released.
    - image: The image of the movie.
    - genre: The genre of the movie.
    - runtime: The runtime of the movie.
    - rating: The rating of the movie.
    - plot: The plot of the movie.
    - slug: The slug of the movie.

    This file will be imported to Google Firebase Cloud database to store the data of the movies upon initialization.

*/

import imageMovie1 from './components/Assets/1.jpg';
import imageMovie2 from './components/Assets/2.jpg';
import imageMovie3 from './components/Assets/3.jpg';
import imageMovie4 from './components/Assets/4.jpg';
import imageMovie5 from './components/Assets/5.jpg';
import imageMovie6 from './components/Assets/6.jpg';
import imageMovie7 from './components/Assets/7.jpg';
import imageMovie8 from './components/Assets/8.jpg';
import imageMovie9 from './components/Assets/9.jpg';
import imageMovie10 from './components/Assets/10.jpg';

export const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        image: imageMovie1,
        genre: "Drama",
        runtime: "142 min",
        rating: 9.3,
        plot: "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
        slug: "the-shawshank-redemption"
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        image: imageMovie2,
        genre: "Crime, Drama",
        runtime: "175 min",
        rating: 9.2,
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        slug: "the-godfather"
    },
    {
        id: 3,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        image: imageMovie3,
        genre: "Action, Crime, Drama",
        runtime: "152 min",
        rating: 9.0,
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        slug: "the-dark-knight"
    },
    {
        id: 4,
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        year: 2003,
        image: imageMovie4,
        genre: "Action, Adventure, Drama",
        runtime: "201 min",
        rating: 8.9,
        plot: " Frodo and Sam follow Gollum toward Mount Doom to destroy the One Ring, unaware of Gollum's intentions to betray the duo to take the ring for himself, while Merry, Pippin, Gandalf, Aragorn, Legolas, Gimli and their allies join forces against Sauron and his legions from Mordor.",
        slug: "the-lord-of-the-rings-the-return-of-the-king"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        image: imageMovie5,
        genre: "Crime, Drama",
        runtime: "154 min",
        rating: 8.9,
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        slug: "pulp-fiction"
    },
    {
        id: 6,
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        image: imageMovie6,
        genre: "Drama, Romance",
        runtime: "142 min",
        rating: 8.8,
        plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man",
        slug: "forrest-gump"
    },
    {
        id: 7,
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        image: imageMovie7,
        genre: "Action, Adventure, Sci-Fi",
        runtime: "148 min",
        rating: 8.8,
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        slug: "inception"
    },
    {
        id: 8,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        year: 2001,
        image: imageMovie8,
        genre: "Action, Adventure, Drama",
        runtime: "178 min",
        rating: 8.8,
        plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        slug: "the-lord-of-the-rings-the-fellowship-of-the-ring"
    },
    {
        id: 9,
        title: "The Lord of the Rings: The Two Towers",
        director: "Peter Jackson",
        year: 2002,
        image: imageMovie9,
        genre: "Action, Adventure, Drama",
        runtime: "179 min",
        rating: 8.7,
        plot: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        slug: "the-lord-of-the-rings-the-two-towers"
    },
    {
        id: 10,
        title: "Fight Club",
        director: "David Fincher",
        year: 1999,
        image: imageMovie10,
        genre: "Drama",
        runtime: "139 min",
        rating: 8.8,
        plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        slug: "fight-club"
    }
];