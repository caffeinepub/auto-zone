import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Contact = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    serviceType : Text;
  };

  type Booking = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    date : Text;
    serviceType : Text;
    vehicle : Text;
  };

  let contacts = Map.empty<Nat, Contact>();
  let bookings = Map.empty<Nat, Booking>();
  var nextContactId = 0;
  var nextBookingId = 0;

  public shared ({ caller }) func submitContact(name : Text, phone : Text, email : Text, message : Text, serviceType : Text) : async Nat {
    let id = nextContactId;
    let contact : Contact = {
      id;
      name;
      phone;
      email;
      message;
      serviceType;
    };
    contacts.add(id, contact);
    nextContactId += 1;
    id;
  };

  public shared ({ caller }) func bookService(name : Text, phone : Text, email : Text, date : Text, serviceType : Text, vehicle : Text) : async Nat {
    let id = nextBookingId;
    let booking : Booking = {
      id;
      name;
      phone;
      email;
      date;
      serviceType;
      vehicle;
    };
    bookings.add(id, booking);
    nextBookingId += 1;
    id;
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray();
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    contacts.values().toArray();
  };
};
