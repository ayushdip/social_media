let btnPost = $('#btnPost')
let inpTitle = $('#inpTitle')
let inpBody = $('#inpBody')

btnPost.click(()=>{
    let title = inpTitle.val();
    let body = inpBody.val();
    let userId = (JSON.parse(window.localStorage.user)).id
    console.log("sdfdgfh");
    $.post('/api/posts',{
        userId : userId,
        body : body,
        title : title
    },
    (post)=>{
        console.log(post);
    })
})