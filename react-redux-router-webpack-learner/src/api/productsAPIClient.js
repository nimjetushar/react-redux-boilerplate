const url = "http://localhost:8000/products";

const productsAPIClient = {
  getAllProducts: function() {
    const promise = new Promise((resolve, reject) => {
      return fetch(url)
        .then(res => {
          const result = res.json();
          result.then(
            jResult => {
              resolve(jResult);
            },
            () => {
              reject("JSON Parse Error");
            }
          );
        })
        .catch(() => {
          reject("Error connecting to Service");
        });
    });

    return promise;
  },

  insertProduct: function(p) {
    const request = new Request(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(p)
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return error;
      });
  },

  updateProduct: function(p) {
    const request = new Request(url + "/" + p.id, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(p)
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return error;
      });
  },

  deleteProduct: function(p) {
    const request = new Request(url + "/" + p.id, {
      method: "DELETE"
    });

    return fetch(request)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        return error;
      });
  }
};

export default productsAPIClient;
