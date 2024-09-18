import {expect, describe, test, jest} from '@jest/globals';
import Payment from '../src/events/payment';
import PaymentSubject from '../src/subjects/paymentSubject';
import Marketing from '../src/observers/marketing';
import Shipment from '../src/observers/shipment';


describe('Test Suite for Observer Pattern', ()=>{
    test('#PaymentSubject notify observers', ()=>{
        const subject = new PaymentSubject()
        const observer = {
            update:jest.fn()
        }
        const data = 'hello world'
        const expected = data

        subject.subscribe(observer)
        subject.notify(data)

        expect(observer.update).toBeCalledWith(expected)
    })
    test('#PaymentSubject should not notify unsubscribe observers', ()=>{
        const subject = new PaymentSubject()
        const observer = {
            update:jest.fn()
        }
        const data = 'hello world'

        subject.subscribe(observer)
        subject.unsubscribe(observer)
        subject.notify(data)

        expect(observer.update).not.toHaveBeenCalled()
    })
    test('#PaymentSubject should notify subject after a credit card transaction', ()=>{
        const subject = new PaymentSubject();
        const payment = new Payment(subject);

        const paymentSubjectNotifierSpy = jest.spyOn(
            subject,
            subject.notify.name,
        )

        const data  = {userName: 'Joss', id: 3};
        payment.creditCard(data);

        expect(paymentSubjectNotifierSpy).toBeCalledWith(data);
    })
    test('#All should notify subscribes after a credit card payment', ()=>{
        const subject = new PaymentSubject();
        const shipment = new Shipment();
        const marketing = new Marketing();

        const shipmentUpdateFnSpy = jest.spyOn(shipment, shipment.update.name);
        const marketingUpdateFnSpy = jest.spyOn(marketing, marketing.update.name);
        
        subject.subscribe(shipment)
        subject.subscribe(marketing)

        const payment = new Payment(subject);
        const data = {
            id:4,
            userName: 'Eddy'
        }
        payment.creditCard(data)
        expect(shipmentUpdateFnSpy).toBeCalledWith(data);
        expect(marketingUpdateFnSpy).toBeCalledWith(data);

    })
});