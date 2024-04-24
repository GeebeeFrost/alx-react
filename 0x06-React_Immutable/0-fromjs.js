const { fromJS } = require("immutable");

const getImmutableObject = (obj) => {
  return fromJS(obj);
};

export default getImmutableObject;
