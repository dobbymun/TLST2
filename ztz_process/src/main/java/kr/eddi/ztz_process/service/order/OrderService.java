package kr.eddi.ztz_process.service.order;

import com.siot.IamportRestClient.exception.IamportResponseException;
import kr.eddi.ztz_process.controller.order.request.RefundRequest;
import kr.eddi.ztz_process.entity.order.OrderInfo;
import kr.eddi.ztz_process.entity.order.Payment;
import kr.eddi.ztz_process.service.order.request.PaymentRegisterRequest;

import java.io.IOException;
import java.util.List;

public interface OrderService {

    public Boolean registerOrderInfo(PaymentRegisterRequest paymentRegisterRequest);

    public Boolean CancelAllOrder(CancelRequest cancelRequest);


    public List<OrderInfo> readAllOrders(Long PaymentId);


    public List<Payment> readAllPayment(String token);
}
