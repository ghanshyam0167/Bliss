from django.shortcuts import render , redirect
from django.http import HttpResponse ,HttpResponseRedirect
from django.contrib.auth.models import User, auth
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.decorators import login_required
from .forms import LoginForm , RegisterForm, Uploadinput
from marque_feature.models import marquee_feature_1,marquee_feature_2,marquee_feature_3
from home_card.models import home_card_1, home_card_2, home_card_3, home_card_4, home_card_5,home_card_6, book_card_1,book_card_2, book_card_3, book_card_4, book_card_5,sport_card_1,sport_card_2, sport_card_3, sport_card_4, sport_card_5
from main_videos.models import news_video, blogs_video, sports_video
from user.models import Post , Comment, Story , Userdetails , Events , Stories
from search.models import Search
from forum.models import ForumPost, Message
from django.http import JsonResponse
from django.core.paginator import Paginator



def register(request):
    books_image = marquee_feature_1.objects.all()
    magazines_image=marquee_feature_2.objects.all()
    books_image_2=marquee_feature_3.objects.all()
    try:
        if request.method == "POST":
            name = request.POST.get('FullName')
            email = request.POST.get('UserName')
            password = request.POST.get('PassWord1')
            if User.objects.filter(username=name).exists():
                form = RegisterForm()
                return render(request, "register.html" ,{'show' : True,'form2' : form,'books_image':books_image,'magazines_image':magazines_image,'books_image_2':books_image_2})
            elif User.objects.filter(email=email).exists():
                form = RegisterForm()
                return render(request, "register.html" ,{'show' : True,'form2' : form,'books_image':books_image,'magazines_image':magazines_image,'books_image_2':books_image_2})
            else:
                user = User.objects.create_user(username=email, email=email, password = password)
                user.first_name = name
                user.save()
                auth_login(request, user)
                return redirect("home")
        else:
            form = RegisterForm()
    except:
        pass        
    return render(request, "register.html" , {'form2' : form ,'books_image':books_image,'magazines_image':magazines_image,'books_image_2':books_image_2})

def loginpage(request):
    books_image = marquee_feature_1.objects.all()
    magazines_image=marquee_feature_2.objects.all()
    books_image_2=marquee_feature_3.objects.all()
    try:
        if request.method =='POST':
            email=request.POST.get('UserName')
            password=request.POST.get('PassWord')
            user = authenticate(username=email, password = password)
            print(user)
            if user is not None:
                auth_login(request, user)
                return redirect("interest")
            else:
                form = LoginForm()
                return render(request, "login.html", {'show' : True,'form1' : form,'books_image':books_image,'magazines_image':magazines_image,'books_image_2':books_image_2})
        else:
            form = LoginForm()
    except:
        pass    
    return render(request, "login.html", {'form1' : form ,'books_image':books_image,'magazines_image':magazines_image,'books_image_2':books_image_2})

@login_required(login_url='login')
def home(request):
    subscribedata = request.GET.get('pk')
    subscribed = False
    if subscribedata == "1":
        subscribed = True
     
    Posts1 = Post.objects.order_by("-created_at")[0::2]
    Posts2 = Post.objects.order_by("-created_at")[1::2]
    story = Story.objects.order_by("-created_at")  
    poststory = Stories.objects.order_by("-created_at") 
    Postform = Uploadinput()
    postcomment = Comment.objects.all()
    Userdetail = Userdetails.objects.all()
    eventdata = Events.objects.all()
    if 'postupload_submit' in request.POST:
        if request.method == "POST":
            content = request.POST.get("Textinput")
            imgvid = request.FILES.get("imgVidfield")
            en = Post(content=content,image=imgvid)
            en.user = request.user
            en.save()
            return redirect("/home")
    if "deletepost" in request.POST:    
        if request.method == "POST" :    
            post_id = request.POST.get("deletepost")
            post = Post.objects.filter(id=post_id).first()
            if post and post.user == request.user:
                post.delete()
                return redirect("/home")


    if 'commentform_submit' in request.POST:
        if request.method == "POST":
            post_id_C = request.POST.get("commentform_submit")
            post_C = Post.objects.filter(id=post_id_C).first()
            if post_C:
                comment = request.POST.get("commentvalue")
            
                # Create a new Comment object and associate it with the post and user
                cn = Comment(text=comment, user=request.user, post=post_C)
                cn.save()  # Save the new comment to the database
            
                return redirect("/home")
        return redirect("/home")    
    if "storyfieldsubmit" in request.POST:
        if request.method == "POST":
            contenttext = request.POST.get("storytextcontent")
            contentbackground = request.POST.get("storybackground") 
            contentfstyle = request.POST.get("storyfontstyle")
            storyfile = request.FILES.get("storyfilecontent")
            print(storyfile)
            sn = Story(contenttext= contenttext, contentbackground = contentbackground, contentfstyle= contentfstyle , storyfile = storyfile)
            sn.user = request.user
            sn.save()
            return redirect("/home")
    
    if "eventformverify" in request.POST:
        if request.method == 'POST':
            eventtitle = request.POST.get("eventformverify")
            eventcat = request.POST.get("InputCategory")
            eventdesc = request.POST.get("eventdesc")
            month = request.POST.get("month")
            day = request.POST.get("day")
            year = request.POST.get("year")
            fhour = request.POST.get("fhour")
            fmin = request.POST.get("fmin")
            fampm = request.POST.get("fampm")
            thour = request.POST.get("thour")
            tmin = request.POST.get("tmin")
            tampm = request.POST.get("tampm")
            every = request.POST.get("every")
            basis = request.POST.get("basis")
            tillmonth = request.POST.get("tillmonth")
            tillday = request.POST.get("tillday")
            tillyear = request.POST.get("tillyear")
            addressp = request.POST.get("physical")
            addressv = request.POST.get("url-adress")
            guest = request.POST.get("guest")
            fee = request.POST.get("fee")
            req = request.POST.get("req")
            eventimg = request.FILES.get("eventimg")
            fn = Events(eventtitle = eventtitle , eventcat = eventcat , eventdesc =eventdesc,eventdmonth = month,eventdday = day, eventdyear =year,eventfhr = fhour , eventfmin = fmin , eventfampm = fampm , eventthr = thour , eventtmin = tmin , eventtampm = tampm , eventfr_every = every , eventfr_basis = basis ,eventfr_tillday = tillday,eventfr_tillyear = tillyear, eventfr_tillmonth = tillmonth , eventaddressp = addressp , eventaddressv = addressv , event_guest = guest , event_fee = fee , event_req = req , eventimg = eventimg ) 
            fn.user = request.user
            fn.save()
            return redirect('/home')
    if "storyvalue" in request.POST:
        if request.method == "POST":  
            post_id_C = request.POST.get("storyform_submit")
            post_C = Post.objects.filter(id=post_id_C).first()
            if post_C:
                storyval = request.POST.get("storyvalue")   
                sv = Stories(text = storyval, user=request.user, post=post_C)
                sv.save()  
                return redirect("/home")
    return render(request, "home.html" ,{'user': request.user, "Uploadform" : Postform, "post1": Posts1,"post2": Posts2, "comment": postcomment , "story": story, "Userdetail":Userdetail, "eventdata" : eventdata , "pstory": poststory,"subscribed": subscribed})

def logging_out(request):
    logout(request)
    return redirect('/')

def myprofile_lg(request):
    user_id = request.GET.get('pk')
    user = User.objects.get(id=user_id)
    userdet =  Userdetails.objects.get(user = user)
    data = {
        'username' : user.first_name,
        'userprofileimage': userdet.Profileimage,
    }
    print(userdet.Profileimage)
    print(user.first_name)
    Posts = Post.objects.filter(user=user).order_by("-created_at")  
    Postform = Uploadinput()
    Userdetail = Userdetails.objects.all()
    print(request.user.id)

    if 'postupload_submit' in request.POST:
        if request.method == "POST":
            content = request.POST.get("Textinput")
            imgvid = request.FILES.get("imgVidfield")
            en = Post(content=content,image=imgvid)
            en.user = request.user
            en.save()
            return redirect("/myprofile-lg")
    if "deletepost" in request.POST:    
        if request.method == "POST" :    
            post_id = request.POST.get("deletepost")
            post = Post.objects.filter(id=post_id).first()
            if post and post.user == request.user:
                post.delete()
                return redirect("/myprofile-lg")  
               
    return render(request, "myprofile-login.html", {"Uploadform" : Postform, "post": Posts,"Userdetail":Userdetail, "profiledetail": data,})

def search(request):
    search_content = Search.objects.all()
    popularsearch = Search.objects.all()[0::2]
    data= {
        "searchdata": search_content,
        "popularsearch":popularsearch
        }    
    print(len(data))    
    return render(request, "search.html" , data)
def blogs(request):
    videoen = blogs_video.objects.all()
    entry1 = home_card_1.objects.all()
    entry2 = home_card_2.objects.all()
    entry3 = home_card_3.objects.all()
    entry4 = home_card_4.objects.all()
    entry5 = home_card_5.objects.all()
    entry6 = home_card_5.objects.all()
    data={'entry1':entry1, 'entry2':entry2, 'entry3':entry3, 'entry4':entry4,'entry5':entry5,'entry6':entry6 ,'videos': videoen}
    return render(request, "blogs.html", data)


def news(request):
    videoen = news_video.objects.all()
    entry1 = book_card_1.objects.all()
    entry2 = book_card_2.objects.all()
    entry3 = book_card_3.objects.all()
    entry4 = book_card_4.objects.all()
    entry5 = book_card_5.objects.all()
    data={'entry1':entry1, 'entry2':entry2, 'entry3':entry3, 'entry4':entry4,'entry5':entry5,'videos': videoen}

    return render(request, "news.html", data)
def sports(request):
    videoen = sports_video.objects.all()
    entry1 = sport_card_1.objects.all()
    entry2 = sport_card_2.objects.all()
    entry3 = sport_card_3.objects.all()
    entry4 = sport_card_4.objects.all()
    entry5 = sport_card_5.objects.all()
    data={'entry1':entry1, 'entry2':entry2, 'entry3':entry3, 'entry4':entry4,'entry5':entry5,'videos': videoen}
    return render(request, "sports.html", data)


def content(request):
    return render(request, "content.html")

def content0(request):
    return render(request, "content0.html")


def eventform(request):
    return render(request , "eventForm.html")

def subscribe(request):
    return render(request , "premium.html")


def mindfulness(request):
  
    return render(request , "mindfullness.html", )
def yoga(request):
    return render(request , "yoga.html",)
def workout(request):
    return render(request , "workout.html",)
def dashboard(request):
    Userdetail = Userdetails.objects.all()[0:4]
    return render(request , "dashboard.html",{"Userdetail": Userdetail})
def meditation(request):
    return render(request , "meditation.html",)
def interest(request):
    return render(request , "interest.html",)


def community(request, pk):
    Userdetail = Userdetails.objects.all()
    Roomchat = Message.objects.order_by("-created_at")
    # global subscribedada
    # subscribedada = request.GET.get
    # print(subscribedada)

    if request.method == "POST":
        post_id_C = request.POST.get("messagesubmit")
        post_C = ForumPost.objects.filter(id=post_id_C).first()
        if post_C:
            message = request.POST.get("message")              
            cn = Message.objects.create(message=message, user=request.user, post=post_C)
            cn.save()
            return redirect('/community/' + pk ) 
    community = ForumPost.objects.get(id=pk) 
    # if subscribedada:
    #     # Redirect to the same URL without the 'sub' query parameter
    #     return HttpResponseRedirect('/community/{}'.format(pk))      
    return render(request, "community.html", {"Userdetail": Userdetail, "community": community, "Roomchat": Roomchat,})

def getMessages(request, pk):
    messages = Message.objects.filter(post=pk)
    message_data = []
    for message in messages:
        user = message.user
        user_detail = Userdetails.objects.get(user=user)
        profile_picture_url = user_detail.Profileimage.url if user_detail.Profileimage else None
        message_data.append({
            'user': {
                'user_id': user.id,
                'first_name': user.first_name,
                'profile_picture': profile_picture_url
            },
            'message': message.message,
            'created_at': message.created_at.strftime('%Y-%m-%d %H:%M:%S')
        })
    
    return JsonResponse({'messages': message_data})

def upcomings(request):
    entry1 = home_card_1.objects.all()
    entry2 = home_card_2.objects.all()
    entry3 = book_card_1.objects.all()
    entry4 = book_card_2.objects.all()
    Userdetail = Userdetails.objects.all()
    eventdata = Events.objects.all()
    return render(request, "upcoming.html" ,{"entry1":entry1,"entry2":entry2,"entry3":entry3,"entry4":entry4,"eventdata":eventdata,"Userdetail":Userdetail})

def forum(request):
    Userdetail = Userdetails.objects.all()
    FPdetailed = ForumPost.objects.order_by("-created_at")
    paginator = Paginator(FPdetailed,5)
    page_number = request.GET.get('page')
    FPdetailedfinal = paginator.get_page(page_number)
    

    if 'createforumpost' in request.POST:
        if request.method == "POST":
            ForumTitle = request.POST.get("ForumTitle")
            Desc = request.POST.get("forumdesc")
            en = ForumPost(title =ForumTitle, description=Desc)
            en.user = request.user
            en.save()
            return redirect("/forum")
    # global subscribedada    
    # getin = subscribedada   
    return render(request , "forum.html",{"Userdetail": Userdetail, "FPdetailed":FPdetailedfinal,})

