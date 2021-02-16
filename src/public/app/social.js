function isLoginNeeded(){
    let curr_user = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    if(curr_user==null){
        const user = $.post('/api/users',(user)=>{
            window.localStorage.user = JSON.stringify(user);
            $('#userName').text(user.username);
        }) 
    }
    else{
        $('#userName').text(curr_user.username);
    }
}

$(()=>{
    $('#navbar').load('/components/navbar.html',isLoginNeeded)
    $('#footer').load('/components/footer.html')
    
})