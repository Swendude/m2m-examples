const Users = require("./models").User;
const Events = require("./models").Event;

// EXAMPLE 0

const getUser = async (id) => {
  try {
    const oneUser = await Users.findByPk(id, {
      include: ["organizing"],
      raw: true,
      nest: true
    });
    console.log(oneUser);
    return;
  } catch (e) {
    console.log(e);
  }
};

const getEvent = async (id) => {
  try {
    const oneEvent = await Events.findByPk(id, {
      include: ["organizer"],
      raw: true,
      nest: true
    });
    console.log(oneEvent);
    return;
  } catch (e) {
    console.log(e);
  }
};

getUser(1);
getEvent(1);
