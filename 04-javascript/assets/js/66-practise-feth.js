import {searchShow} from "./66-movies-api.js";
document.querySelector("#txtSearch").addEventListener("input", (e)=>{
    const val = e.target.value;
    if(val.length<3) return;
    searchShow(val, (shows)=>{
        let htmlShows = "";
        shows.forEach(item => {
            console.log(item);
            htmlShows += `
            <div class="col-md-6 col-lg-4 p-3">
                <div class="card">
                    <img src="${item.show.image ? item.show.image.medium : "assets/img/no-image.png"}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `;
        });
        document.querySelector("#tvshows").innerHTML = htmlShows;
    });
});
