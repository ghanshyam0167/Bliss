"""
URL configuration for bliss project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.loginpage, name="login"), 
    path("register/", views.register, name="register"), 
    path("logout/", views.logging_out, name="logout"),
    path("home/", views.home, name="home"), 
    path("myprofile-lg/", views.myprofile_lg, name="myprofile-lg"),
    path("search/", views.search, name="search"),
    path("blogs/", views.blogs, name="blogs"),
    path("news/", views.news, name="news"),
    path("sports/", views.sports, name="sports"),
    path("content/", views.content, name="content"),
    path("content0/", views.content0, name="content0"),
    path("events/", views.eventform , name="event"),
    path("subscribe/", views.subscribe, name="subscribe"),
    path("mindfulness/", views.mindfulness, name="mindfulness"),
    path("yoga/", views.yoga, name="yoga"),
    path("workout/", views.workout, name="workout"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("meditation/", views.meditation, name="meditation"),
    path("interest/", views.interest, name="interest"),
    path("forum/", views.forum, name="forum"),
    path("community/<str:pk>", views.community, name="community"),
    path('getMessages/<str:pk>/', views.getMessages, name='getMessages'),
    path('upcomings/', views.upcomings, name='upcomings'),
    
]


urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns+=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)