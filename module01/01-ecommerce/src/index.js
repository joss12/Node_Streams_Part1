import Payment from "./events/payment.js";
import Marketing from "./observers/marketing.js";
import Shipment from "./observers/shipment.js";
import PaymentSubject from "./subjects/paymentSubject.js";

const subject = new PaymentSubject();

const marketing = new Marketing();
subject.subscribe(marketing);

const shipment = new Shipment();
subject.subscribe(shipment);

const payment = new Payment(subject);
payment.creditCard({id: 1, userName: 'Eddy', age: 33});


subject.unsubscribe(marketing);

//This will trigger only the shipment ares
payment.creditCard({
    id:2,
    userName: 'Joss',
    age:32
})
