function updateMap(){
    //console.log('updating data ')
    fetch('/data.json')
    .then(response=>response.json())
    .then(rsp=>{
       // console.log(rsp.data) // get thte data form json
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.infected;

            if (cases >255){
                color = "rgb(255,0,0)" ;

            }
            else
            {
                color = `rgb(${cases},0,0)`;
            }

            //mark on mapp
            new mapboxgl.Marker({
                draggable :false,
                color:color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
            
        });

    })
}
let interval = 20000; //update funtion call after 20 sec 
setInterval(updateMap, interval);
