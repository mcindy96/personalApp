Template.showActivity.helpers({
  activityList() {return Activity.find()},
})

Template.addActivity.events({
  'click button'(elt,instance){
    const activityname = instance.$('#activityname').val();//the $ restricts the name to just that template
    const location = instance.$('#location').val();
    const address = instance.$('#address').val();
    const price = instance.$('#price').val();
    console.log('adding' +activityname);
    instance.$('#activityname').val(""); //erase textbox after reading
    instance.$('#location').val(""); //erase after reading
    instance.$('#address').val("");
    instance.$('#price').val("");
    var activity = {activityname:activityname,location:location,
                    address:address,price:price,
                    owner:Meteor.userId()}
                    //createAt:new Date()}
    Meteor.call('activity.insert',activity);
    //Activity.insert(activity);
    //shorter version: People.insert({name,birthyear})
  }
})

Template.activityrow.events({
  'click span'(elt,instance) {
    console.dir(this); //show you what the object is at the time this line is called. Can look inside object.
    console.log(this.activity._id); //Print the word, don't let you look inside
    if (this.activity.owner==Meteor.userId()){
      Meteor.call('activity.remove',this.activity);
      //Activity.remove(this.activity._id);
    } else {
      alert("Why are you deleting someone else's entry?");
    }
  }
})

Template.activityrow.helpers({
  isOwner() {return this.activity.owner == Meteor.userId()}
})
