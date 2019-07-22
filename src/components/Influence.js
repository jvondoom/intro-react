import React from 'react';

const Influence = props => {
  const imgStyle = {
    maxWidth: 265,
  };

  const linkStyle = {
    color: '#cecece',
    textDecoration: 'underline',
  };

  return (
    <div className="influence">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4">Influences</h2>
            <p className="mb-4">
              Before we start talking about work realted stuff let's focus first
              in the nice bits.
            </p>
            <h3 className="mb-4 text-center">The Marvel Universe</h3>
            <p className="px-5">
              Since I was a child, got influenced by the TV Shows and Comics
              about Marvel Super Heroes. I've always read as much as possible
              about my favorite characters and keep in mind their personality
              and accomplishments.
            </p>
            <p className="px-5">
              Amogst all the characters I learned to love, one stands out among
              the others: <b>Victor von Doom</b>.
            </p>
            <img
              className="img-fluid d-block mx-auto my-4"
              alt="Doctor Doom"
              src="https://upload.wikimedia.org/wikipedia/en/7/79/Doctor_Doom_Thor_Vol_1_600.png"
            />
            <p className="px-5 mb-4">
              The man who calls himself Doctor Doom is a genius that combines
              the most advance technology with ancient magic. His own armor is
              the greatest master piece of this achievement.
            </p>
            <h3 className="mb-4 text-center">Warhammer 40k</h3>
            <p className="px-5">
              Orignally a tabletop turn-based miniature strategy game created in
              the 1980s, ended up as one of the greatest franchises with several
              video games, hundreds of books and lots of lore.
            </p>
            <p className="px-5">
              Setup in the year 40,000, humanity fights a galaxy-wide war for
              survival against all kinds of harms: Alien races, Ancient races,
              psychic foes, traitor forces, and more... In this universe, there
              are several factions each with its own set of stories, heroes,
              losses and tragedies; one of the least popular, however most
              important for the survival of the Human Race, are the Tech Priests
              of Mars: the <b>Adeptus Mechanicus</b>
            </p>
            <img
              className="img-fluid d-block mx-auto my-4"
              src="https://pre07.deviantart.net/8bf6/th/pre/f/2015/174/e/8/mehanikus_by_baklaher-d8yfc8i.jpg"
              alt="Tech Priest"
              style={imgStyle}
            />
            <p className="px-5">
              In a time where humanity has forgotten how to develop new tools
              after conquering the galaxy, the martians are the ones in charge
              of keeping the remaining knowledge and repairing all existing
              technology.
            </p>
            <p>
              These are some of the geek topics I could literally speak for
              hours and hours without repeating a single bit of information.
              When I say that I define myself as a <b>geek</b> is not because it
              has become something trendy; it is because I have spend months
              dedicating to enjoy the material and trying to get inspired by the
              fiction I consume.{' '}
              <a style={linkStyle} href="https://www.comicbookgirl19.com/">
                Comic Book Girl 19
              </a>
              , an internet influencer, said in her{' '}
              <a style={linkStyle} href="https://youtu.be/LGtNFHtM81A">
                TED Talk
              </a>{' '}
              that a way to get in touch with the true self is by how you
              interact with the stories; this means that if you love or hate a
              fictional character in becuase you like or dislike parts of
              yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Influence;
