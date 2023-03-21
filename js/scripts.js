


function AddressBook(){
  this.contacts={};
}


AddressBook.prototype.addContact = function(contact){
  this.contacts[contact.firstName] = contact;
};


function Contact(firstName, lastName, phoneNum){
  this.firstName=firstName;
  this.lastName=lastName;
  this.phoneNum=phoneNum;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};

