//Made to fix removing insecure package

Meteor.methods({
  'activity.insert': function(activity) {
    Activity.insert(activity);
  },
  'activity.remove': function(activity){
    if (this.userId == activity.owner)
      Activity.remove(activity._id);
  },
  's.insert': function(searches) {
    mySearch.insert(searches);
  },
  's.remove': function(searches) {
    mySearch.remove(searches);
  }
});
