var api_key = 'u1eaJG2HTmfGAQ26AfcAShz7ZV-Lj5ml';

function getCategories(){
    $.get('https://api.mlab.com/api/1/databases/taskmanager/collections/categories?apiKey='+api_key, function(data){
        var output = '<ul class="list-group">';
        $.each(data, function(key, data){
            output += '<li class="list-group-item category">'+
            data.category_name + '<div><a class="btn btn-primary btn-edit-category" data-category-id="'+data._id.$oid+'">Edit</a> <a class="btn btn-danger btn-delete-category" data-category-id="'+data._id.$oid+'">Delete</a></div>'
            '</li>';
        });
        output += '</ul>'
        $('#categories').html(output)
    });
}
