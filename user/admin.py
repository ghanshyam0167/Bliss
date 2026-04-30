from django.contrib import admin
from .models import UserProfile, UserDetails, Post, Comment, Story, Events, Stories


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "followers_count", "following_count")
    search_fields = ("user__username",)

    @admin.display(description="Followers")
    def followers_count(self, obj):
        return obj.followers.count()

    @admin.display(description="Following")
    def following_count(self, obj):
        # Fixed: original code called obj.following.count() which doesn't exist
        # on UserProfile — it's a reverse relation on User. Correct:
        return obj.user.following.count()


@admin.register(UserDetails)
class UserDetailsAdmin(admin.ModelAdmin):
    list_display = ("user", "profile_image", "created_at")
    search_fields = ("user__username",)
    raw_id_fields = ("user",)


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "content", "created_at")
    search_fields = ("user__username", "content")
    raw_id_fields = ("user",)


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "post", "text", "created_at")
    search_fields = ("user__username", "text")
    raw_id_fields = ("user", "post")


@admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "contenttext", "contentbackground", "created_at")
    raw_id_fields = ("user",)


@admin.register(Stories)
class PostStoriesAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "post", "text", "created_at")
    raw_id_fields = ("user", "post")


@admin.register(Events)
class EventsAdmin(admin.ModelAdmin):
    list_display = ("eventtitle", "eventcat", "user", "created_at")
    search_fields = ("eventtitle", "user__username")
    raw_id_fields = ("user",)