Meteor.publish('mySearch',function(){
  return mySearch.find();
})

Meteor.publish('activity',function(){
  return Activity.find();
})
