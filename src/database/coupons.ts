export const coupons: {
  id: number;
  name: string;
  description: string;
  product_id: number;
  valid_since: string;
  valid_until: string;
}[] = [
  {
    id: 1, //number
    name: "coupon 1", // string
    description: "coupon description", // string
    product_id: 3, // number (product id)
    valid_since: "2020-02-25T00:00:00.000", // string datetime ISO8601 format
    valid_until: "2020-02-25T23:59:00.999", // string datetime ISO8601 format
  },
  {
    id: 2, //number
    name: "coupon 2", // string
    description: "coupon description", // string
    product_id: 3, // number (product id)
    valid_since: "2020-02-25T00:00:00.000", // string datetime ISO8601 format
    valid_until: "2020-02-25T23:59:00.999", // string datetime ISO8601 format
  },
  {
    id: 3, //number
    name: "coupon 3", // string
    description: "coupon description", // string
    product_id: 3, // number (product id)
    valid_since: "2020-02-25T00:00:00.000", // string datetime ISO8601 format
    valid_until: "2020-02-25T23:59:00.999", // string datetime ISO8601 format
  },
  {
    id: 4, //number
    name: "coupon 4", // string
    description: "coupon description", // string
    product_id: 3, // number (product id)
    valid_since: "2020-02-25T00:00:00.000", // string datetime ISO8601 format
    valid_until: "2020-02-25T23:59:00.999", // string datetime ISO8601 format
  },
];
