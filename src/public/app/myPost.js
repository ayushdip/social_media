function loadArticles(){
    $.get('/api/posts',{
        userId : (JSON.parse(window.localStorage.user)).id
    },(posts)=>{
        console.log(posts);
        for(post of posts){
            let article = post.body.substr(0,300);
            $('#postList').append(`
            
            <div class="card-deck col-md-4 my-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${post.user.username}</h6>
                        <p class="card-text">${article}
                        <a href="#">read more ..</a></p>
                        <a href="#" class="card-link">Like</a>
                        <a href="#" class="card-link">Comment</a>
                    </div>
                </div>
            </div>
            `)
        }
    })
}
loadArticles();