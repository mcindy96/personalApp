const pastActivities =
  [
    {activity:"Hiking", description: "Mount Lafayette",
    location: "Franconia, NH", price:"Free"},

    {activity:"Biking", description: "Beaver Brook Reservation",
    location: "Mill Street, Belmont, Waltham", price:"Free"},

    {activity:"Picnic", description: "Walden Pond",
    location: "915 Walden St., Concord, Lincoln", price:"Free"},

    {activity:"Snowboarding", description: "Ski Sundown",
    location: "126 Ratlum Rd, New Hartford, CT 06057", price:"$$$"},

    {activity:"Museum", description: "Salem Witch Museum",
    location: "19 1/2 Washington Square, Salem, MA 01970", price:"$"},
  ];


Template.pastActivities.helpers(
 {
   pastActivities
 }
)
