import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "lodash";
import { ShopService } from "../../core/services/shopService";
import Loader from "../../core/components/Loader";
import style from "./style.module.scss";

const ProductDetail = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const classes = style;

  const fetchData = async () => {
    try {
      const data = await ShopService.load(productId);
      setIsLoading(false);
      setProduct(get(data, "data.product", {}));
    } catch (err) {
      console.log({ err });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading && <Loader />}</>;
};

export default ProductDetail;
