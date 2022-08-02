const submitFrom = document.getElementById("submit-btn");

let formData = {
  gener: [],
  rpg_sub: [],
  shooting_sub: [],
  time_spend: [],
  device_used: [],
};
const formIDs = [
  "name",
  "email",
  "phoneNumber",
  "dob",
  "gamer_classification",
  "gender",
  "gener",
  "rpg_sub",
  "shooting_sub",
  "games_list",
  "time_spend",
  "device_used",
];

submitFrom.addEventListener("click", (event) => {
  event.preventDefault();
  formIDs.forEach((id) => getFormElementValue(id));
  formData["games_list"] = document.getElementById("games_list").value.split(",");
  console.log(formData);
});

const getFormElementValue = (id) => {
  let formDataElement = document.getElementsByName(id);
  if (formDataElement.length !== 0) {
    formDataElement.forEach((data) => {
      if (data.type === "radio") {
        if (data.checked) {
          formData[id] = data.value;
        }
      } 
      if (data.type === 'checkbox') {
        if (data.checked) {
          formData[id].push(data.value);
        }
      }
      if (data.type !== "checkbox" && data.type !== "radio") {
        formData[id] = data.value;
      } else {
      }
    });
  }
};
