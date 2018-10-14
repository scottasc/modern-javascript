var moment = require('moment');
var math = require('mathjs');
import swal from 'sweetalert';


console.log("Pilates have taken over the browser.");

var dateTime = moment().startOf('hour').fromNow();  
console.log(dateTime);

console.log(math.sqrt(-4));

var name = "Rimes";

console.log(`Hello ${name}. It's ${dateTime} from the last hour.`)

window.addEventListener("load", function(event) {
    swal({
          title: "You are verboten!",
          text: "Are you sure that you want to leave this page?",
          icon: "warning",
          dangerMode: true,
         })
        .then(willDelete => {
            if (willDelete) {
              swal("Deleted!", "Your imaginary file has been deleted!", "success");
         }
    });
});