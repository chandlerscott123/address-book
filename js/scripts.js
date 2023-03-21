
//Business logic for AddressBook

function AddressBook(){
  this.contacts={};
  this.currentId = 0;
}

//assign id to contact, add to the AddressBook object
AddressBook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

//create unique Ids through incrementing currentId
//on every call to the assignId function
AddressBook.prototype.assignId = function(){
  this.currentId+=1;
  return this.currentId;
}

//if contact found in AddressBook, return
//contact object
AddressBook.prototype.findContact = function(id){

  if(this.contacts[id]!== undefined){
    return this.contacts[id];
  }
  return false;
};


//deletes contact from AddressBook if found
AddressBook.prototype.deleteContact = function(id){
  if(this.contacts[id]===undefined){
    return false;
  }
  delete this.contacts[id];
  return true;
};

//Business logic for Contact
function Contact(firstName, lastName, phoneNum){
  this.firstName=firstName;
  this.lastName=lastName;
  this.phoneNum=phoneNum;
}

//returns string of concatenated name properties
Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};

