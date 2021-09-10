import { getInstance } from "./generalInstance";
import generalApi from "./generalApi";

const shopInstance = getInstance();

export const ShopService = {
  ...generalApi(shopInstance),
};
