import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type OldBooking = {
    id : Nat;
    customerName : Text;
    phone : Text;
    vehicle : Text;
    serviceType : Text;
    date : Text;
    time : Text;
    notes : Text;
  };

  type OldEnquiry = {
    id : Nat;
    customerName : Text;
    phone : Text;
    email : Text;
    message : Text;
  };

  type OldActor = {
    nextBookingId : Map.Map<Nat, OldBooking>;
    nextEnquiryId : Map.Map<Nat, OldEnquiry>;
  };

  type NewContact = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    serviceType : Text;
  };

  type NewBooking = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    date : Text;
    serviceType : Text;
    vehicle : Text;
  };

  type NewActor = {
    contacts : Map.Map<Nat, NewContact>;
    bookings : Map.Map<Nat, NewBooking>;
    nextContactId : Nat;
    nextBookingId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    let newContacts = Map.empty<Nat, NewContact>();
    let newBookings = Map.empty<Nat, NewBooking>();
    {
      contacts = newContacts;
      bookings = newBookings;
      nextContactId = 0;
      nextBookingId = 0;
    };
  };
};
