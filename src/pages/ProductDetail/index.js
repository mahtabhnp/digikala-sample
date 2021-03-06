import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "lodash";
import { ShopService } from "src/core/services/shopService";
import Loader from "src/core/components/Loader";
import PriceConvertor from "src/core/components/PriceConvertor";
import LikeIcon from "src/core/components/LikeIcon";
import Rating from "src/core/components/Rating";
import PlusIcon from "src/core/components/Product/PlusIcon";
import { useDispatch } from "react-redux";
import { loadCard } from "src/core/redux/actions";
import style from "./style.module.scss";

export default function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

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
  }, [productId]);
  return (
    <Fragment>
      {isLoading && <Loader />}
      {!isLoading && (
        <article className={classes.detailWrapper}>
          <section className={classes.productInfo}>
            <h1>{get(product, "title")}</h1>
            <div className={classes.rate}>
              <LikeIcon />
              <p>%{get(product, "rating.rate", 0).toLocaleString("fa")}</p>
              <p>از خریداران، این کالا را پیشنهاد کرده‌اند</p>
            </div>
            <div className={classes.rate}>
              <Rating
                count={get(product, "rating.count", 0)}
                rate={get(product, "rating.rate", 0)}
              />
            </div>
            <div className={classes.rate}>
              <PriceConvertor value={get(product, "price.selling_price", 0)} />
            </div>
            <div className={classes.buttonWrapper}>
              <button
                onClick={() => {
                  dispatch(loadCard(product));
                }}
              >
                <p>اضافه کردن به سبد خرید</p>
                <PlusIcon color="#fff" />
              </button>
            </div>
          </section>
          <section className={classes.productGallery}>
            <img src={get(product, "images.main")} alt="product" />
          </section>
        </article>
      )}
    </Fragment>
  );
}
