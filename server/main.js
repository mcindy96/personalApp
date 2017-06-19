import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Activity.remove({});  // clear the database
  Activity.insert({});
  mySearch.remove({});
  mySearch.insert({});
});
