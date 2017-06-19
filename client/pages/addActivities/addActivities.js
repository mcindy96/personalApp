Template.showActivity.helpers({
  activityList() {return Activity.find()},
})
Template.addActivity.events({
  'click button'(elt,instance){
    const activityname = instance.$('#activityname').val();//the $ restricts the name to just that template
    const description = instance.$('#description').val();
    const location = instance.$('#location').val();
    const price = instance.$('#price').val();
    console.log('adding' +activityname);
    instance.$('#activityname').val(""); //erase textbox after reading
    instance.$('#description').val(""); //erase after reading
    instance.$('#location').val("");
    instance.$('#price').val("");
    Activity.insert({activityname:activityname,description:description,location:location,price:price,
                     owner:Meteor.userId(),
                     createAt:new Date()});
    //shorter version: People.insert({name,birthyear})
  }
})

Template.activityrow.events({
  'click span'(elt,instance) {
    console.dir(this); //show you what the object is at the time this line is called. Can look inside object.
    console.log(this.activity._id); //Print the word, don't let you look inside
    if (this.activity.owner==Meteor.userId()){
      Activity.remove(this.activity._id);
    } else {
      alert("Why are you deleting someone else's entry?");
    }
    Activity.remove(this.activity._id);
  }
})

Template.activityrow.helpers({
  isOwner() {return this.activity.owner == Meteor.userId()}
})
