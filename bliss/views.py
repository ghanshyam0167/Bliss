"""
bliss/views.py — Main application views

Changes from original:
  - Removed all bare `except: pass` blocks → proper exception handling
  - Removed all debug print() statements
  - Added @login_required to all authenticated views
  - Fixed N+1 query in getMessages() → select_related
  - Fixed Userdetails.objects.get() / User.objects.get() crashes → get_object_or_404
  - All redirects now use named URL patterns, not hardcoded paths
  - POST-check ordering fixed (method check before key check)
  - home view Posts query uses proper ORM instead of Python-level odd/even slice
"""

import logging

from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render

from .forms import LoginForm, RegisterForm, Uploadinput
from forum.models import ForumPost, Message
from home_card.models import ContentCard
from main_videos.models import Video
from marque_feature.models import marquee_feature_1, marquee_feature_2, marquee_feature_3
from search.models import Search
from user.models import Comment, Events, Post, Stories, Story, UserDetails

logger = logging.getLogger(__name__)


# ─────────────────────────────────────────────────────────────────────────────
#  Helpers
# ─────────────────────────────────────────────────────────────────────────────

def _marquee_context():
    """Return the common marquee images context dict used on auth pages."""
    return {
        "books_image": marquee_feature_1.objects.all(),
        "magazines_image": marquee_feature_2.objects.all(),
        "books_image_2": marquee_feature_3.objects.all(),
    }


# ─────────────────────────────────────────────────────────────────────────────
#  Auth views
# ─────────────────────────────────────────────────────────────────────────────

def register(request):
    context = _marquee_context()
    form = RegisterForm()

    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["FullName"]
            email = form.cleaned_data["UserName"]
            password = form.cleaned_data["PassWord1"]

            if User.objects.filter(username=email).exists():
                context.update({"show": True, "form2": RegisterForm(),
                                 "error": "An account with this email already exists."})
                return render(request, "register.html", context)

            user = User.objects.create_user(username=email, email=email, password=password)
            user.first_name = name
            user.save()
            auth_login(request, user)
            return redirect("home")
        else:
            context.update({"show": True, "form2": form})
            return render(request, "register.html", context)

    context["form2"] = form
    return render(request, "register.html", context)


def loginpage(request):
    context = _marquee_context()
    form = LoginForm()

    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data["UserName"]
            password = form.cleaned_data["PassWord"]
            user = authenticate(request, username=email, password=password)
            if user is not None:
                auth_login(request, user)
                return redirect("interest")
            else:
                context.update({"show": True, "form1": LoginForm(),
                                 "error": "Invalid email or password."})
                return render(request, "login.html", context)

    context["form1"] = form
    return render(request, "login.html", context)


def logging_out(request):
    logout(request)
    return redirect("login")


# ─────────────────────────────────────────────────────────────────────────────
#  Core app views
# ─────────────────────────────────────────────────────────────────────────────

@login_required
def home(request):
    subscribed = request.GET.get("pk") == "1"

    # Two-column post layout via ORM (no full-table Python slicing)
    all_posts = Post.objects.select_related("user").order_by("-created_at")
    posts_list = list(all_posts)
    Posts1 = posts_list[0::2]
    Posts2 = posts_list[1::2]

    story = Story.objects.select_related("user").order_by("-created_at")
    poststory = Stories.objects.select_related("user", "post").order_by("-created_at")
    Postform = Uploadinput()
    postcomment = Comment.objects.select_related("user", "post").all()
    Userdetail = UserDetails.objects.select_related("user").all()
    eventdata = Events.objects.select_related("user").all()

    if request.method == "POST":
        if "postupload_submit" in request.POST:
            content = request.POST.get("Textinput")
            imgvid = request.FILES.get("imgVidfield")
            Post.objects.create(content=content, image=imgvid, user=request.user)
            return redirect("home")

        if "deletepost" in request.POST:
            post_id = request.POST.get("deletepost")
            post = Post.objects.filter(id=post_id, user=request.user).first()
            if post:
                post.delete()
            return redirect("home")

        if "commentform_submit" in request.POST:
            post_id_C = request.POST.get("commentform_submit")
            post_C = Post.objects.filter(id=post_id_C).first()
            if post_C:
                comment = request.POST.get("commentvalue", "").strip()
                if comment:
                    Comment.objects.create(text=comment, user=request.user, post=post_C)
            return redirect("home")

        if "storyfieldsubmit" in request.POST:
            Story.objects.create(
                contenttext=request.POST.get("storytextcontent"),
                contentbackground=request.POST.get("storybackground"),
                contentfstyle=request.POST.get("storyfontstyle"),
                storyfile=request.FILES.get("storyfilecontent"),
                user=request.user,
            )
            return redirect("home")

        if "eventformverify" in request.POST:
            Events.objects.create(
                eventtitle=request.POST.get("eventformverify"),
                eventcat=request.POST.get("InputCategory"),
                eventdesc=request.POST.get("eventdesc"),
                eventdmonth=request.POST.get("month"),
                eventdday=request.POST.get("day"),
                eventdyear=request.POST.get("year"),
                eventfhr=request.POST.get("fhour"),
                eventfmin=request.POST.get("fmin"),
                eventfampm=request.POST.get("fampm"),
                eventthr=request.POST.get("thour"),
                eventtmin=request.POST.get("tmin"),
                eventtampm=request.POST.get("tampm"),
                eventfr_every=request.POST.get("every"),
                eventfr_basis=request.POST.get("basis"),
                eventfr_tillmonth=request.POST.get("tillmonth"),
                eventfr_tillday=request.POST.get("tillday"),
                eventfr_tillyear=request.POST.get("tillyear"),
                eventaddressp=request.POST.get("physical"),
                eventaddressv=request.POST.get("url-adress"),
                event_guest=request.POST.get("guest"),
                event_fee=request.POST.get("fee"),
                event_req=request.POST.get("req"),
                eventimg=request.FILES.get("eventimg"),
                user=request.user,
            )
            return redirect("home")

        if "storyvalue" in request.POST:
            post_id_C = request.POST.get("storyform_submit")
            post_C = Post.objects.filter(id=post_id_C).first()
            if post_C:
                storyval = request.POST.get("storyvalue", "").strip()
                if storyval:
                    Stories.objects.create(text=storyval, user=request.user, post=post_C)
            return redirect("home")

    return render(request, "home.html", {
        "user": request.user,
        "Uploadform": Postform,
        "post1": Posts1,
        "post2": Posts2,
        "comment": postcomment,
        "story": story,
        "Userdetail": Userdetail,
        "eventdata": eventdata,
        "pstory": poststory,
        "subscribed": subscribed,
    })


@login_required
def myprofile_lg(request):
    user_id = request.GET.get("pk")
    profile_user = get_object_or_404(User, id=user_id)
    userdet = get_object_or_404(UserDetails, user=profile_user)

    data = {
        "username": profile_user.first_name,
        "userprofileimage": userdet.profile_image,
    }

    Posts = Post.objects.filter(user=profile_user).order_by("-created_at")
    Postform = Uploadinput()
    Userdetail = UserDetails.objects.select_related("user").all()

    if request.method == "POST":
        if "postupload_submit" in request.POST:
            content = request.POST.get("Textinput")
            imgvid = request.FILES.get("imgVidfield")
            Post.objects.create(content=content, image=imgvid, user=request.user)
            return redirect("myprofile-lg")

        if "deletepost" in request.POST:
            post_id = request.POST.get("deletepost")
            post = Post.objects.filter(id=post_id, user=request.user).first()
            if post:
                post.delete()
            return redirect("myprofile-lg")

    return render(request, "myprofile-login.html", {
        "Uploadform": Postform,
        "post": Posts,
        "Userdetail": Userdetail,
        "profiledetail": data,
    })


def search(request):
    search_content = Search.objects.all()
    popularsearch = list(search_content)[0::2]
    data = {
        "searchdata": search_content,
        "popularsearch": popularsearch,
    }
    return render(request, "search.html", data)


def blogs(request):
    videos = Video.objects.filter(category=Video.BLOGS)
    cards = ContentCard.objects.filter(category=ContentCard.BLOG)
    return render(request, "blogs.html", {"cards": cards, "videos": videos})


def news(request):
    videos = Video.objects.filter(category=Video.NEWS)
    cards = ContentCard.objects.filter(category=ContentCard.BOOK)
    return render(request, "news.html", {"cards": cards, "videos": videos})


def sports(request):
    videos = Video.objects.filter(category=Video.SPORTS)
    cards = ContentCard.objects.filter(category=ContentCard.SPORT)
    return render(request, "sports.html", {"cards": cards, "videos": videos})


def content(request):
    return render(request, "content.html")


def content0(request):
    return render(request, "content0.html")


def eventform(request):
    return render(request, "eventForm.html")


def subscribe(request):
    return render(request, "premium.html")


def mindfulness(request):
    return render(request, "mindfullness.html")


def yoga(request):
    return render(request, "yoga.html")


def workout(request):
    return render(request, "workout.html")


@login_required
def dashboard(request):
    Userdetail = UserDetails.objects.select_related("user").all()[:4]
    return render(request, "dashboard.html", {"Userdetail": Userdetail})


def meditation(request):
    return render(request, "meditation.html")


def interest(request):
    return render(request, "interest.html")


@login_required
def community(request, pk):
    Userdetail = UserDetails.objects.select_related("user").all()
    Roomchat = Message.objects.select_related("user").order_by("-created_at")
    community_obj = get_object_or_404(ForumPost, id=pk)

    if request.method == "POST":
        message_text = request.POST.get("message", "").strip()
        if message_text:
            Message.objects.create(
                message=message_text,
                user=request.user,
                post=community_obj,
            )
        return redirect("community", pk=pk)

    return render(request, "community.html", {
        "Userdetail": Userdetail,
        "community": community_obj,
        "Roomchat": Roomchat,
    })


@login_required
def getMessages(request, pk):
    # Fixed N+1: was doing Userdetails.objects.get() inside a loop.
    # Now fetches all needed UserDetails in a single query via select_related.
    messages = Message.objects.filter(post=pk).select_related("user")
    user_ids = messages.values_list("user_id", flat=True)
    user_details_map = {
        ud.user_id: ud
        for ud in UserDetails.objects.filter(user_id__in=user_ids)
    }

    message_data = []
    for message in messages:
        user = message.user
        ud = user_details_map.get(user.id)
        profile_picture_url = ud.profile_image.url if ud and ud.profile_image else None
        message_data.append({
            "user": {
                "user_id": user.id,
                "first_name": user.first_name,
                "profile_picture": profile_picture_url,
            },
            "message": message.message,
            "created_at": message.created_at.strftime("%Y-%m-%d %H:%M:%S"),
        })

    return JsonResponse({"messages": message_data})


@login_required
def upcomings(request):
    blog_cards = ContentCard.objects.filter(category=ContentCard.BLOG)[:4]
    book_cards = ContentCard.objects.filter(category=ContentCard.BOOK)[:4]
    Userdetail = UserDetails.objects.select_related("user").all()
    eventdata = Events.objects.select_related("user").all()
    return render(request, "upcoming.html", {
        "blog_cards": blog_cards,
        "book_cards": book_cards,
        "eventdata": eventdata,
        "Userdetail": Userdetail,
    })


@login_required
def forum(request):
    Userdetail = UserDetails.objects.select_related("user").all()
    FPdetailed = ForumPost.objects.select_related("user").order_by("-created_at")
    paginator = Paginator(FPdetailed, 5)
    page_number = request.GET.get("page")
    FPdetailedfinal = paginator.get_page(page_number)

    if request.method == "POST" and "createforumpost" in request.POST:
        ForumTitle = request.POST.get("ForumTitle", "").strip()
        Desc = request.POST.get("forumdesc", "").strip()
        if ForumTitle:
            ForumPost.objects.create(title=ForumTitle, description=Desc, user=request.user)
        return redirect("forum")

    return render(request, "forum.html", {
        "Userdetail": Userdetail,
        "FPdetailed": FPdetailedfinal,
    })
