# Adapter
## Definition
Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

## Participants
The objects participating in this pattern are:
- Client -- In sample code: the run() function.
    - calls into Adapter to request a service
- Adapter -- In sample code: ShippingAdapter
    - implements the interface that the client expects or knows
- Adaptee -- In sample code: AdvancedShipping
    - the object being adapted
    - has a different interface from what the client expects or knows

## General Formula
``` js
function Client() {
    this.request = function (v1, v2, v3) {
        //...
        return "old interface";
    }
}

function Adaptee() {
    this.setV1 = function (v1) {

    };
    this.setV2 = function (v2) {

    };
    this.getV3 = function (v3) {
        return "new interface";
    }
}

function Adapter() {
    var tmp = new Adaptee();
    return {
        request: function (v1, v2, v3) {
            tmp.setV1(v1);
            tmp.setV2(v2);
            return tmp.getV3(v3);
        }
    }

}

var client = new Client();
var request = client.request('A', 'B', 'C');
console.log(request);//old interface

var adapter = new Adapter();
var request2 = adapter.request('A', 'B', 'C');
console.log(request2);//new interface
```