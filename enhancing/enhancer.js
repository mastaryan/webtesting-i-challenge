module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
      return {...item, enhancement: item.enhancement + 1 };
  } else if (item.enhancement === 20) {
      return {...item }
  } else {
      item.enhancement += 1;
      return {...item }
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15 && item.enhancement <= 16) {
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement > 16) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      durability: item.durability - 10
    };
  }
}

function repair(item) {
  if (item) {
      item.durability = 100;
      return {...item };
  }
}

function get(item) {
  return {...item };
}