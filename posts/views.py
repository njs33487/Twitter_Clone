from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Post
from .forms import PostForm

# Create your views here.

def index(request):
    # if the method is post
    if request.method =='POST':
        form = PostForm(request.POST)
        # if the form is valid
        if form.is_valid():
            #yes , save
            form.save()
            #redirect to home
            return HttpResponseRedirect('/')
        
        else:
            # no , show error
            return HttpResponseRedirect(form.erros.as_json())

    # Get all the post, limit = 20
    posts = Post.objects.all()[:20]
    
    # show
    return  render(request, 'posts.html',
                    {'posts': posts})

def delete(request, post_id):
    # FIND post
    post = Post.objects.get( id = post_id)
    # delete post
    post.delete()
    # return to home page
    return HttpResponseRedirect('/')