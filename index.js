const getApiData = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (apiDatas) => {
  const fild = document.getElementById('qut-display');
  fild.innerText = apiDatas.quote;
};
document.getElementById("relode-btn").addEventListener("click", getApiData);
