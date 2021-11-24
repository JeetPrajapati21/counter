import axios from "axios";

export async function UpdateValue(prop) {
  let val;
  await axios
    .put(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      prop
    )
    .then((res) => (val = res));
  return val.data.json;
}

export async function FetchValue() {
  let val;
  await axios
    .get(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/jeet.json"
    )
    .then((res) => (val = res));
  return val.data;
}
