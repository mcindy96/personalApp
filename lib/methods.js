//Made to fix removing insecure package

Meteor.methods({
  'activity.insert'(activity) {
    Activity.insert(activity);
  },
  'activity.remove'(activity){
    if (this.userId == activity.owner)
      Activity.remove(activity._id);
  },
  'searches.insert'(searches) {
    mySearch.insert(searches);
  },
});
