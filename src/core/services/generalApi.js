let filters = [];
let orderBy = [];
let page = 1;
let size = 10;

function generalApi(instance) {
  return {
    /**
     * make filter array
     * @param {string} field
     * @param {string} operator
     * @param {mix} value
     * @param {undefined | boolean} or
     * @return {BaseServices}
     */
    makeFilters: function (field, operator, value, or) {
      if (value) {
        filters.push({
          field,
          operator: operator.toUpperCase(),
          value,
          or: !!or,
        });
      }

      return this;
    },
    /**
     * clear filter array
     */
    clearFilter: function () {
      filters = [];
      return this;
    },
    /**
     * clear filter array
     */
    clearOrderBy: function () {
      orderBy = [];
      return this;
    },
    /**
     * make order by array
     * @param {string} name
     * @param {boolean} asc
     * @return {BaseServices}
     */
    makeOrderBy: function (name, asc) {
      orderBy.push({
        name,
        asc,
      });

      return this;
    },

    getSize: function () {
      return size;
    },
    /**
     * get search filter object
     * @return {{size: BaseServices._size, orderBy: BaseServices.orderBy, filters: BaseServices.filters, page: BaseServices._page}}
     */
    getSearchFilter: function () {
      return {
        filters,
        orderBy,
        page,
        size,
      };
    },
    /**
     * Search Api
     * @param {any} filters
     * @param {object} config
     * @param {string} searchPath
     * @return {Promise}
     */
    search: function (filters, config) {
      const searchConfig = Boolean(config) ? config : {};
      return instance.get("/search/", { params: filters }, searchConfig);
    },
    /**
     * Load Api
     * @param {string} id
     * @param {object} config
     * @return {Promise}
     */
    load: function (id, config = {}) {
      return instance.get(`/product/${id}/`, config);
    },
  };
}

export default generalApi;
