import React, { useEffect, useState, Fragment } from "react";
import { get } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import Product from "src/core/components/Product";
import { ShopService } from "src/core/services/shopService";
import Loader from "src/core/components/Loader";
import style from "./style.module.scss";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [filter, setFilter] = useState({ page: 1, rows: 30 });

  const classes = style;

  const fetchData = async (filters) => {
    try {
      const data = await ShopService.search({ ...filters });
      setIsLoading(false);
      if (filters.page > 1) {
        setItems([...items, ...get(data, "data.products", [])]);
      } else {
        setItems(get(data, "data.products"));
      }
      if (data.data.pager.total_pages > filter.page) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log({ err });
      setIsLoading(false);
    }
  };

  const fetchMoreData = async () => {
    setFilter({ ...filter, page: filter.page + 1 });
  };

  useEffect(() => {
    fetchData(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    setIsLoading(true);
    fetchData(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className={classes.infiniteScrollWrapper}>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Loader />}
            scrollableTarget="scrollableDiv"
            endMessage={
              <p style={{ textAlign: "center" }}>همه موارد مشاهده شد</p>
            }
            refreshFunction={() => {}}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
          >
            <ul className={style.items}>
              {items.length > 0 ? (
                items.map((item) => <Product key={item.id} data={item} />)
              ) : (
                <p>هیچ محصولی وجود ندارد</p>
              )}
            </ul>
          </InfiniteScroll>
        </div>
      )}
    </Fragment>
  );
}
