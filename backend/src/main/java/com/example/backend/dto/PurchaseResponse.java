package com.example.backend.dto;

import lombok.Data;

@Data
//@Data ===> بتعمل constructor تلقائي فلازم اكتب فاينل تحت عشان اعرف استخدمها من غير ما اقابل مشاكل
public class PurchaseResponse {

    private final String orderTrackingNumber;

}
