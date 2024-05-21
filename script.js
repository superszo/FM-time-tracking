const data = fetch("./data.json")
                .then(res => res.json())
               

function showData (id) {
    data.then(data => {
        for (let item of data) {
            console.log(id)
            let cat = item.title.toLowerCase();
            let current;
            let previous;
            console.log(id)
            

            if (id === 'daily') {
                
                current = item.timeframes.daily.current;
                previous = item.timeframes.daily.previous;
                document.getElementById(`${cat}-cur`).innerHTML = current + "hrs";
                document.getElementById(`${cat}-prev`).innerHTML = `Last Day - ${previous}hrs`
            } else if (id === 'weekly') {
                current = item.timeframes.weekly.current;
                previous = item.timeframes.weekly.previous;
                document.getElementById(`${cat}-cur`).innerHTML = current + "hrs";
                document.getElementById(`${cat}-prev`).innerHTML = `Last Week - ${previous}hrs`
            } else {
                current = item.timeframes.monthly.current;
                previous = item.timeframes.monthly.previous;
                document.getElementById(`${cat}-cur`).innerHTML = current + "hrs";
                document.getElementById(`${cat}-prev`).innerHTML = `Last Month - ${previous}hrs`
            }
        }
        
    })
}



window.onload = function () {
    document.getElementById('daily').addEventListener('click', (e) => { showData(e.target.id)})
    document.getElementById('weekly').addEventListener('click', (e) => { showData(e.target.id)})
    document.getElementById('monthly').addEventListener('click', (e) => { showData(e.target.id)})
}

