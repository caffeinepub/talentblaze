import Text "mo:core/Text";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Principal "mo:core/Principal";

actor {
  type ContactRequest = {
    id : Nat;
    name : Text;
    email : Text;
    companyName : Text;
    inquiry : Text;
  };

  let contactRequests = Map.empty<Nat, ContactRequest>();
  var currentId = 0;

  public shared ({ caller }) func submitContactRequest(name : Text, email : Text, companyName : Text, inquiry : Text) : async () {
    let contactRequest : ContactRequest = {
      id = currentId;
      name;
      email;
      companyName;
      inquiry;
    };

    contactRequests.add(currentId, contactRequest);
    currentId += 1;
  };

  public query ({ caller }) func getContactRequest(id : Nat) : async ?ContactRequest {
    contactRequests.get(id);
  };

  public query ({ caller }) func getAllContactRequests() : async [ContactRequest] {
    contactRequests.values().toArray();
  };
};
