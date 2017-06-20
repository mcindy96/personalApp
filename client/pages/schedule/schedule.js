Template.mySearch.helpers({
  searchList() {return mySearch.find()},
})

Template.schedule.events({
  'click button'(elt,instance){
    const findDate = instance.$('#findDate').val();
    const findTimeOne = instance.$('#findTimeOne').val();
    const findTimeTwo = instance.$('#findTimeTwo').val();
    const transportation = instance.$('.transportation').val();
    const zipCode = instance.$('#zipCode').val();
    const discount = instance.$('.discount').val();
    const price = instance.$('.price').val();
    const num = instance.$('#numPeople').val();
    const numPeople = parseInt(num);
    const environment = instance.$('.environment').val();
    console.log('adding search');
    instance.$('#findDate').val("");
    instance.$('#findTimeOne').val("");
    instance.$('#findTimeTwo').val("");
    instance.$('.transportation').val("");
    instance.$('#zipCode').val("");
    instance.$('.discount').val("");
    instance.$('.price').val("");
    instance.$('#numPeople').val("");
    instance.$('.environment').val("");
    mySearch.insert({findDate,findTimeOne,findTimeTwo,transportation,zipCode,
      discount,price,numPeople,environment,
      owner:Meteor.userId(),
      createAt:new Date()});

  }
})

Template.searchrow.events({
  'click span'(elt,instance) {
    console.dir(this); //show you what the object is at the time this line is called. Can look inside object.
    console.log(this.s._id); //Print the word, don't let you look inside
    if (this.s.owner==Meteor.userId()){
      mySearch.remove(this.s._id);
    } else {
      alert("Why are you deleting someone else's entry?");
    }
  }
})

Template.searchrow.helpers({
  isOwner() {return this.s.owner == Meteor.userId()}
})
