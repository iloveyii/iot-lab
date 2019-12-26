var data = {};
var historicData = [];
// Your web app's Firebase configuration - ALI
const firebaseConfig2 = {
    apiKey: "AIzaSyAD2NGFLbN8DiwjuAknJ8veLSN4LG50VjY",
    authDomain: "iot-sensors-data.firebaseapp.com",
    databaseURL: "https://iot-sensors-data.firebaseio.com",
    projectId: "iot-sensors-data",
    storageBucket: "iot-sensors-data.appspot.com",
    messagingSenderId: "469619601022",
    appId: "1:469619601022:web:d410d8a49049c46f41322f",
    measurementId: "G-55BF16R4Z9"
};
// Your web app's Firebase configuration - REACT
var firebaseConfig = {
    apiKey: "AIzaSyAzKwB5AcIED54V4toqf5Icvn6Cx5GhgIc",
    authDomain: "hkr-iot-lab1.firebaseapp.com",
    databaseURL: "https://hkr-iot-lab1.firebaseio.com",
    projectId: "hkr-iot-lab1",
    storageBucket: "hkr-iot-lab1.appspot.com",
    messagingSenderId: "689144959624",
    appId: "1:689144959624:web:9571d87e2e5cd41298853d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var mydb = firebase.database().ref().child('mydb');
mydb.on("child_added", function (snap) {
    data = snap.val();
    displayData(snap.val());
});

function displayData(data) {
    historicData.push(data);
    const dataToShow = historicData.slice(-5);
    showDataInTable(dataToShow.reverse());

}



function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function showDataInTable(d) {
    const table = document.getElementById('data-table');
    table.innerHTML = '';

    let count = 1;

    d.forEach(row => {
        const tr = document.createElement('tr');
        row.heading = row.heading;// ? parseFloat(Number(row.heading)).toFixed(2) : 'na';
        let td = null;
        td = document.createElement('td');
        td.innerHTML = count++;
        tr.appendChild(td);

        Object.keys(row).map(key => {
            if (['temperature', 'pressure', 'humidity', 'eco2', 'tvoc', 'heading', 'color'].includes(key)) {
                td = document.createElement('td');
                if (key === 'color' && row[key]) {
                    const color = rgbToHex(row[key].red % 255, row[key].green % 255, row[key].blue % 255);
                    td.innerHTML = "<div style='background-color: " + color+ " '>" + color + "</div>";
                } else {
                    td.innerText = (row[key]);
                }
                tr.appendChild(td);
            }
        });
        table.appendChild(tr);
    })
}







