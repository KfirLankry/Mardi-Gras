var sponsors = [
  {
    name: "Ace Hotel",
    description:
      "Ace Hotel is a chain of hotels headquartered in Los Angeles and New York City. Founded in 1999 in Seattle, it operates hotels primarily in the United States, with locations in Portland, Oregon; New York City; Palm Springs, California; Seattle; Pittsburgh; Los Angeles; and New Orleans.",
    site: "https://acehotel.com/",
    img: "../images/logos/acehotel.png",
  },
  {
    name: "Haunted Museum",
    description:
      "Haunted museum & Voodoo spirit shop in a documented 200 year old French Quarter Haunted House! Museum tours by day, Ghost Hunts by night! Come shop curios, hoodoo, crystals, bones, tarot, Voodoo art & make your own Voodoo dolls. Come get a psychic reading & catch a free Pop up class! Then Pass through the Hall of altars where we honor the dead, relax at our luxurious haunted courtyard & feel paranormal presence in the Haunted attic.",
    site: "https://www.bloodymarystours.com/hauntedmuseum.html",
    img: "../images/logos/hauntedmuseum.png",
  },
  {
    name: "Louisiana Children's Museum",
    description:
      "When you make a child’s potential visible, wonderful things happen. So we created a place where kids use play, shared exploration, and conversation to connect with the people and world around them. A place where kids can be the amazing humans they are. A place where wonderful things happen daily.",
    site: "https://lcm.org/",
    img: "../images/logos/kidsmuseum.png",
  },
  {
    name: "Museum of Death New Orleans",
    description:
      "Museum of Death is a museum with locations on Hollywood Boulevard in Hollywood, Los Angeles, and New Orleans. It was established in June 1995 by J. D. Healy and Catherine Shultz with the museum's stated goal being to make people happy to be alive.",
    site: "http://www.museumofdeath.net/",
    img: "../images/logos/MuseumofDeath.png",
  },
  {
    name: "Premium Parking",
    description:
      "We live at the intersection of parking and technology. We are a technology company, a parking operator, and network of parking advisors to bring it all together. We built our own custom cloud-based parking management software to run our locations—now you can use it to upgrade yours. We offer an enterprise-class agile solution that's simpler, more powerful and more affordable than the disconnected hardware and app-based offerings of the legacy parking industry giants and venture capital dorm room startups.",
    site: "https://www.premiumparking.com/",
    img: "../images/logos/ppp.png",
  },
  {
    name: "Sheraton New Orleans",
    description:
      "Sheraton New Orleans is a 49-story, 490-foot tall skyscraper that is located at 500 Canal Street in the Central Business District of New Orleans, Louisiana. The Sheraton is the 6th tallest building in New Orleans, and the hotel is part of Marriott International.",
    site: "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/",
    img: "../images/logos/sheraton.png",
  },
  {
    name: "The Ritz-Carlton, New Orleans",
    description:
      "Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.",
    site: "https://www.ritzcarlton.com/en/hotels/new-orleans",
    img: "../images/logos/theritz.png",
  },
  {
    name: "Walk-On's Bistreaux and Bar",
    description:
      "There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering, Cajun cuisine to life. And whether you’re here for dinner with the family, date night, cocktails with the girls or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.",
    site: "https://walk-ons.com/",
    img: "../images/logos/walkonslogo.png",
  },
];

function show(number) {
  document.getElementById("staticBackdropLabel").innerHTML =
    sponsors[number].name;
  document.getElementById("sponsor-img").src = sponsors[number].img;
  document.getElementById("sponsor-description").innerText =
    sponsors[number].description;
  document.getElementById("sponsor-site").href = `${sponsors[number].site}`;
}
