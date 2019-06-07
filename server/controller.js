module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get("db");
    db.get_houses().then(houses => {
      res.status(200).send(houses);
    });
  },
  addHouse: (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zipcode, pic_url } = req.body;
    db.add_house([name, address, city, state, zipcode, pic_url])
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => {
        console.error("Error in add house in SQL file", err);
        res.status(500).send({ message: "Error on SERVER" });
      });
  },
  deleteHouse: (req, res) => {
    let { id } = req.params;

    if (!parseInt(id, 10)) {
      return res
        .status(400)
        .send({ message: "Invalid or missing ID on request" });
    }

    id = parseInt(id, 10);

    const db = req.app.get("db");
    db.delete_house([id])
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => {
        console.error("Error in delete_house sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
  },
  editHouse: (req, res) => {
    console.log(req.body, "REQ.BODY from controller.editHouse");
    let { house_id } = req.params;
    if (!house_id) {
      house_id = req.query.id;
    }

    if (!house_id) {
      return res.status(400).send({ message: "Invalid or missing id" });
    }
    const db = req.app.get("db");

    const {
      name,
      address,
      city,
      state,
      zipcode,
      pic_url,
      monthly_mortgage_amount,
      desired_rent
    } = req.body;
    console.log(req.body);
    db.edit_house([
      name,
      address,
      city,
      state,
      zipcode,
      pic_url,
      monthly_mortgage_amount,
      desired_rent,
      house_id
    ]).then(house => {
      res.status(200).send(house);
    });
  }
};
