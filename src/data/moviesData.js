const movies = [
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once Upon a Time in Hollywood",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 4,
    price: 150,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-story.jpg",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Drama/Romance",
    rating: 4,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Drama/Thriller",
    rating: 4,
    price: 180,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    genre: "Action/Adventure/Sci-Fi",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "avatar.png",
    title: "Avatar",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    genre: "Action/Adventure/Fantasy/Sci-Fi",
    rating: 5,
    price: 120,
  },
];

function getAllMovies() {
  return movies;
}

export { getAllMovies };
