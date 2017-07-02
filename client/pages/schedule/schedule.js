Template.mySearch.helpers({
  searchList() {return mySearch.find()},
})

Template.schedule.helpers({
  priceList() {
     console.log("in priceList");
     return [' Free! ', ' $ ', ' $$ ', ' $$$ ', ' $$$$ ']
   },

  environmentList() {
    console.log("in environmentList");
    return [' Outdoors ', ' Indoors ']
  },

  transportList() {
    console.log("in transportList");
    return [' Car ', ' Public Transportation ', ' Bike ', ' Walking ']
  },
})

Template.schedule.events({
  'click button'(elt,instance){
    const findDate = instance.$('#findDate').val();
    const findTimeOne = instance.$('#findTimeOne').val();
    const findTimeTwo = instance.$('#findTimeTwo').val();
    transportinputs = instance.$("#transportList input");
    transport = [];
    transportinputs.each(function(a,b){
      if (b.checked) {transport.push(b.value);}
    });
    //const transportation = instance.$('.transportation').val();
    const zipCode = instance.$('#zipCode').val();
    const discount = instance.$('#discount').val();
    priceinputs = instance.$("#priceList input");
    price = [];
    priceinputs.each(function(a,b){
      if (b.checked) {price.push(b.value);}
    });
    //const price = instance.$('.price').val();
    const num = instance.$('#numPeople').val();
    const numPeople = parseInt(num);
    environmentinputs = instance.$("#environmentList input");
    environment = [];
    environmentinputs.each(function(a,b){
      if (b.checked) {environment.push(b.value);}
    });
    //const environment = instance.$('.environment').val();
    console.log('adding search');
    instance.$('#findDate').val("");
    instance.$('#findTimeOne').val("");
    instance.$('#findTimeTwo').val("");
    instance.$('#transport').val("");
    instance.$('#zipCode').val("");
    instance.$('#discount').val("");
    instance.$('#price').val("");
    instance.$('#numPeople').val("");
    instance.$('#environment').val("");
    var searches = {findDate,findTimeOne,findTimeTwo,transport,zipCode,
      discount,price,numPeople,environment,
      owner:Meteor.userId()}
    Meteor.call('s.insert', searches);
    //mySearch.insert(searches);

  }
})

Template.mySearch.onCreated(function() {
  Meteor.subscribe('mySearch');
});

Template.searchrow.events({
  'click span'(elt,instance) {
    console.dir(this); //show you what the object is at the time this line is called. Can look inside object.
    console.log(this.s._id); //Print the word, don't let you look inside
    //if (this.s.owner==Meteor.userId()){
      //mySearch.remove(this.s._id);
      Meteor.call('s.remove',this.s);
    //} else {
  //    alert("Why are you deleting someone else's entry?");
    //}
  }
})

Template.searchrow.helpers({
  isOwner() {return this.s.owner == Meteor.userId()}
})
