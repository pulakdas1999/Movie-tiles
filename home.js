const search_button = document.querySelector(".search-button")

search_button.addEventListener('click', (e) => {
    e.preventDefault()

    const searchText = document.querySelector(".search-text").value
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(character => {
            console.log(character)
            console.log(character['results'].length)
            let rows = Math.ceil((character['results'].length) / 4)
            let myHTML = ``
            let c = 0
            
            for (let i = 0; i < rows; i++) {
                myHTML += `<div class="row">
                                <div class="col" style="padding: 10px">
                                
                                <h6>${character['results'][c]['original_title']}</h6>
                                <div class="card" style="width: 18rem;">
                                <img style="height: 410px;"
                                src="https://image.tmdb.org/t/p/original/${character['results'][c]['poster_path']}" 
                                class="card-img-top" alt="">
                                <div style="overflow: auto; padding: 5px; text-align: justify; text-justify: inter-word; height: 100px;">
                                    <p class="card-text">
                                        ${character['results'][c++]['overview']}
                                    </p>
                                </div>
                                </div>
                                
                                </div>
                                <div class="col" style="padding: 10px">
                                
                                <h6>${character['results'][c]['original_title']}</h6>
                                <div class="card" style="width: 18rem;">
                                <img style="height: 410px;"
                                src="https://image.tmdb.org/t/p/original/${character['results'][c]['poster_path']}" 
                                class="card-img-top" alt="">
                                <div style="overflow: auto; padding: 5px; text-align: justify; text-justify: inter-word; height: 100px;">
                                    <p class="card-text">
                                        ${character['results'][c++]['overview']}
                                    </p>
                                </div>
                                </div>
                                
                                </div>
                                <div class="col" style="padding: 10px">
                                
                                <h6>${character['results'][c]['original_title']}</h6>
                                <div class="card" style="width: 18rem;">
                                <img style="height: 410px;"
                                src="https://image.tmdb.org/t/p/original/${character['results'][c]['poster_path']}" 
                                class="card-img-top" alt="">
                                <div style="overflow: auto; padding: 5px; text-align: justify; text-justify: inter-word; height: 100px;">
                                    <p class="card-text">
                                        ${character['results'][c++]['overview']}
                                    </p>
                                </div>
                                </div>
                                
                                </div>
                                <div class="col" style="padding: 10px">
                                
                                <h6>${character['results'][c]['original_title']}</h6>
                                <div class="card" style="width: 18rem;">
                                <img style="height: 410px;"
                                src="https://image.tmdb.org/t/p/original/${character['results'][c]['poster_path']}" 
                                class="card-img-top" alt="">
                                <div style="overflow: auto; padding: 5px; text-align: justify; text-justify: inter-word; height: 100px;">
                                    <p class="card-text">
                                        ${character['results'][c++]['overview']}
                                    </p>
                                </div>
                                </div>
                                
                                </div>
                            </div>`
            }
            document.querySelector(".container").innerHTML = myHTML
        })
        document.querySelector(".search-text").value = ""
    })