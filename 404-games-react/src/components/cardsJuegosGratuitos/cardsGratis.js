import React from "react";
import CardGratis from "./CardGratis";

const cards = [
  {
      id: 1,
      title: "Dogs of War Online",
      price: "0",
      image: "https://www.freetogame.com/g/239/thumbnail.jpg",
      description: "Based on the famous miniature board game Confrontation, Dogs of War Online is a unique free-to-play, turn-based tactical game that sets players in a three way conflict between the forces of Light, Dark, and Destiny. Players will have to engage in fierce battles on behalf of their employers.",
  },
  
  {
    id: 2,
      title: "The Banner Saga: Factions",
      price: "0",
      image: "https://www.freetogame.com/g/236/thumbnail.jpg",
      description: "The Banner Saga: Factions is a free to play fantasy 2D multiplayer strategy game with RPG elements and stunning hand-animated artwork. Set in a Viking-styled realm of fantasy, The Banner Saga: Factions has been hailed by many as one of the best multiplayer role-playing games in recent memory.",
  },
  {
    id: 3,
      title: "Kingdom Wars",
      price: "0",
      image: "https://www.freetogame.com/g/233/thumbnail.jpg",
      description: "Kingdom Wars is a free to play 3D MMORTS developed by Reverie World Studios. Inc. Battle your way through the amazing online world with real-time siege combat as you construct strongholds, command citizens, complete quests, and manage a gigantic empire.",
  },
  {
    id: 4,
      title: "Forza Motorsport 6: Apex",
      price: "0",
      image: "https://www.freetogame.com/g/121/thumbnail.jpg",
      description: "Forza Motorsport 6: Apex is a free-to-play multiplayer online racing game that comes from makers of one of the most popular video game racing series ever. It marks the first entry for the series on PC, after a decade on consoles.",
  },
  {
    id: 5,
      title: "Riding Club Championships",
      price: "0",
      image: "https://www.freetogame.com/g/93/thumbnail.jpg",
      description: "Riding Club Championships is an online competitive horse riding game inspired by traditional equestrian disciplines. As with real world riding championships, players will participate in activities like show jumping, barrel racing, pole bending, and more.",
  },
  {
    id: 6,
      title: "Grand Prix Racing Online",
      price: "0",
      image: "https://www.freetogame.com/g/351/thumbnail.jpg",
      description: "Grand Prix Racing Online Is a free-to-play web-based motorsport management game. Build and control a racing team of your very own, starting with a basic car and working your way through the ranks by winning races and prepare your vehicle for qualification.",
  },
  {
    id: 7,
      title: "Brawlhalla",
      price: "0",
      image: "https://www.freetogame.com/g/212/thumbnail.jpg",
      description: "An epic battle awaits you in Brawlhalla, a free-to-play 2D platform fighter from Blue Mammoth Games. Inspired by the Smash Bros,family of Nintendo games, Brawlhalla is a fast-and-furious smash-em-up featuring a bunch of colorful characters.",
  },
  {
    id: 8,
      title: "Archeblade",
      price: "0",
      image: "https://www.freetogame.com/g/213/thumbnail.jpg",
      description: "ArcheBlade is a team-based fighting game powered by Unreal 3 and developd by CodeBrush Games. Choose from a large selection of characters and take control of a great combination fighting system to come out on top in ArcheBlade.",
  },
  {
    id: 9,
      title: "Dungeon Fighter Online",
      price: "0",
      image: "https://www.freetogame.com/g/177/thumbnail.jpg",
      description: "Dungeon Fighter Online is a 2D free to play multiplayer arcade-style beat’em up game developed by Neople. It features 2D side-scrolling action fighting with some roleplaying elements including, along with multiple unique classes and some PvP.",
  },
  {
    id: 10,
      title: "The Ultimatest Battle",
      price: "0",
      image: "https://www.freetogame.com/g/58/thumbnail.jpg",
      description: "The Ultimatest Battle is a free-to-play 2D plaform game that pits two teams of players against each other in a variety of modes. The game features real-time combat and an (almost) completely destructible environment.",
  },
  {
    id: 11,
      title: "SoulWorker",
      price: "0",
      image: "https://www.freetogame.com/g/45/thumbnail.jpg",
      description: "SoulWorker is a free to play anime action MMO based on the popular anime of the same title. Developed by Lion Games, the game is being handled by a publishers. The game is a third-person action MMO designed in the same style as the anime.",
  },
];


  const CardsGratis = ({ titulo }) => {
  return (
    
    <div className="container">
      <h1 className="title">{titulo}</h1>
      <div className="row">
        {cards.map(({ title, image, url, id ,description}) => (
          <div className="col-md-4" key={id}>
            <CardGratis imageSource={image} title={title} url={url} description={description}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsGratis;