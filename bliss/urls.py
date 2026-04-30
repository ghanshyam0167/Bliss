"""
URL configuration for bliss project.
"""

from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),

    # ── Authentication ───────────────────────────────────────────
    path("", views.loginpage, name="login"),
    path("register/", views.register, name="register"),
    path("logout/", views.logging_out, name="logout"),

    # ── Core pages ───────────────────────────────────────────────
    path("home/", views.home, name="home"),
    path("interest/", views.interest, name="interest"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("myprofile-lg/", views.myprofile_lg, name="myprofile-lg"),
    path("search/", views.search, name="search"),

    # ── Content sections ─────────────────────────────────────────
    path("blogs/", views.blogs, name="blogs"),
    path("news/", views.news, name="news"),
    path("sports/", views.sports, name="sports"),
    path("content/", views.content, name="content"),
    path("content0/", views.content0, name="content0"),
    path("upcomings/", views.upcomings, name="upcomings"),

    # ── Wellness ─────────────────────────────────────────────────
    path("mindfulness/", views.mindfulness, name="mindfulness"),
    path("yoga/", views.yoga, name="yoga"),
    path("workout/", views.workout, name="workout"),
    path("meditation/", views.meditation, name="meditation"),

    # ── Events & subscriptions ───────────────────────────────────
    path("events/", views.eventform, name="event"),
    path("subscribe/", views.subscribe, name="subscribe"),

    # ── Forum & community ────────────────────────────────────────
    path("forum/", views.forum, name="forum"),
    path("community/<str:pk>/", views.community, name="community"),
    path("getMessages/<str:pk>/", views.getMessages, name="getMessages"),
]

# Serve media files during development only.
# In production, WhiteNoise handles static files; media should use cloud storage.
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)