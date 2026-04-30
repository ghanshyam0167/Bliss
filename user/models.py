"""
user/models.py

Changes:
  - UserProfile: unchanged (M2M followers)
  - Userdetails → UserDetails (PascalCase) with profile_image (snake_case)
  - Post, Story, Comment, Stories: added __str__ methods
  - Events: unchanged structure (template-driven date fields kept as-is to avoid
    breaking existing templates; type is documented for future refactor)
"""

from django.contrib.auth.models import User
from django.db import models


class UserProfile(models.Model):
    """Stores follower/following relationships for a user."""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    followers = models.ManyToManyField(User, related_name="following", blank=True)

    def __str__(self):
        return f"Profile of {self.user.username}"


class UserDetails(models.Model):
    """Extended user details including profile image."""
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Renamed from Profileimage → profile_image (snake_case convention)
    profile_image = models.FileField(
        upload_to="profiles/",
        max_length=500,
        null=True,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "User Detail"
        verbose_name_plural = "User Details"

    def __str__(self):
        return f"Details for {self.user.username}"


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(null=True, blank=True)
    image = models.FileField(upload_to="posts/", max_length=500, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"Post by {self.user.username} at {self.created_at:%Y-%m-%d %H:%M}"


class Story(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_stories")
    contenttext = models.TextField(null=True, blank=True)
    contentbackground = models.TextField(null=True, blank=True)
    contentfstyle = models.TextField(null=True, blank=True)
    storyfile = models.FileField(
        upload_to="stories/", max_length=500, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Stories"

    def __str__(self):
        return f"Story by {self.user.username} at {self.created_at:%Y-%m-%d %H:%M}"


class Events(models.Model):
    """
    Event created by a user.
    Note: date/time fields are stored as text to match existing template inputs.
    A future migration can convert them to DateField / TimeField once templates
    are updated to send ISO-format values.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="events")
    eventtitle = models.TextField(null=True, blank=True)
    eventcat = models.TextField(null=True, blank=True)
    eventdesc = models.TextField(null=True, blank=True)
    eventdmonth = models.TextField(null=True, blank=True)
    eventdday = models.TextField(null=True, blank=True)
    eventdyear = models.TextField(null=True, blank=True)
    eventfhr = models.TextField(null=True, blank=True)
    eventfmin = models.TextField(null=True, blank=True)
    eventfampm = models.TextField(null=True, blank=True)
    eventthr = models.TextField(null=True, blank=True)
    eventtmin = models.TextField(null=True, blank=True)
    eventtampm = models.TextField(null=True, blank=True)
    eventfr_every = models.TextField(null=True, blank=True)
    eventfr_basis = models.TextField(null=True, blank=True)
    eventfr_tillmonth = models.TextField(null=True, blank=True)
    eventfr_tillday = models.TextField(null=True, blank=True)
    eventfr_tillyear = models.TextField(null=True, blank=True)
    eventaddressp = models.TextField(null=True, blank=True)
    eventaddressv = models.TextField(null=True, blank=True)
    event_guest = models.TextField(null=True, blank=True)
    event_fee = models.TextField(null=True, blank=True)
    event_req = models.TextField(null=True, blank=True)
    eventimg = models.FileField(
        upload_to="events/", max_length=500, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Events"

    def __str__(self):
        return f"{self.eventtitle or 'Untitled Event'} by {self.user.username}"


class Comment(models.Model):
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name="comments")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on Post #{self.post_id}"


class Stories(models.Model):
    """Reaction/story text attached to a Post."""
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name="poststories")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_post_stories")
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Post Stories"

    def __str__(self):
        return f"Story by {self.user.username} on Post #{self.post_id}"