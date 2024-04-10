const appState = "loading";
const isMember = "computer";
const app = {
  [appState]: true,
};
app[isMember] = false;
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

const updateValue = (key, value) =>{
    state[key] = value
}

updateValue("name","john")
updateValue('age',20)
console.log(state)

