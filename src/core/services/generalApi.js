function generalApi(instance) {
  return {
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
