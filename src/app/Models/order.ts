import { OrderProduct } from "./order-product";
import { Product } from "./product";

export class Order {
    public customerId !: number;
    public detailsOrder !: OrderProduct;
}
