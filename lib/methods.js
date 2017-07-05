//Made to fix removing insecure package

Meteor.methods({
  'activity.insert': function(activity) {
    Activity.insert(activity);
  },
  'activity.remove': function(activity){
    if (this.userId == activity.owner)
      Activity.remove(activity._id);
  },
  'activity.update2':function(activity, newlocation, newprice, newaddress){
    Activity.update(activity._id, {$set:{location: newlocation, price:newprice, address:newaddress}});
  },
  's.insert': function(searches) {
    mySearch.insert(searches);
  },
  's.remove': function(searches) {
    mySearch.remove(searches);
  }
});
