Template.mySearch.helpers({
  searchList() {return mySearch.find()},
})

Template.schedule.helpers({
  priceList() {
     console.log("in priceList");
     return ['Free!','$','$$','$$$','$$$$']},
})

Template.schedule.events({
  'click button'(elt,instance){
    const findDate = instance.$('#findDate').val();
    const findTimeOne = instance.$('#findTimeOne').val();
    const findTimeTwo = instance.$('#findTimeTwo').val();
    const transportation = instance.$('.transportation').val();
    const zipCode = instance.$('#zipCode').val();
    const discount = instance.$('.discount').val();
    priceinputs = instance.$("#priceList input");
    price = [];
    priceinputs.each(function(a,b){
      if (b.checked) {price.push(b.value);}
    });
    //const price = instance.$('.price').val();
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
    var searches = {findDate,findTimeOne,findTimeTwo,transportation,zipCode,
      discount,price,numPeople,environment,
      owner:Meteor.userId()}
    Meteor.call('searches.insert', searches);
    //mySearch.insert(searches);

  }
})

Template.searchrow.events({
  'click span'(elt,instance) {
    console.dir(this); //show you what the object is at the time this line is called. Can look inside object.
    console.log(this.s._id); //Print the word, don't let you look inside
    //if (this.s.owner==Meteor.userId()){
      //mySearch.remove(this.s._id);
      Meteor.call('mySearch.remove',this.s);
    //} else {
  //    alert("Why are you deleting someone else's entry?");
    //}
  }
})

Template.searchrow.helpers({
  isOwner() {return this.s.owner == Meteor.userId()}
})
