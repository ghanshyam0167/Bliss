from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    followers = models.ManyToManyField(User, related_name='following')
class Userdetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Profileimage = models.FileField(upload_to="profiles/",max_length=500, default=None, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(null=True, default=None, blank=True)
    image = models.FileField(upload_to="posts/",max_length=500, default=None, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Story(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    contenttext = models.TextField(null=True, default=None, blank=True)
    contentbackground = models.TextField(null = True, default=None, blank = True)
    contentfstyle = models.TextField(null = True, default=None, blank = True)
    storyfile = models.FileField(upload_to="stories/",max_length=500, default=None, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
class Events(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    eventtitle = models.TextField(null=True, default=None, blank=True)
    eventcat = models.TextField(null = True, default=None, blank = True)
    eventdesc = models.TextField(null = True, default=None, blank = True)
    eventdmonth = models.TextField(null=True, default=None, blank=True)
    eventdday = models.TextField(null=True, default=None, blank=True)
    eventdyear = models.TextField(null=True, default=None, blank=True)
    eventfhr = models.TextField(null = True, default=None, blank = True)
    eventfmin = models.TextField(null = True, default=None, blank = True)
    eventfampm = models.TextField(null = True, default=None, blank = True)
    eventthr = models.TextField(null = True, default=None, blank = True)
    eventtmin = models.TextField(null = True, default=None, blank = True)
    eventtampm = models.TextField(null = True, default=None, blank = True)
    eventfr_every = models.TextField(null = True, default=None, blank = True)
    eventfr_basis = models.TextField(null = True, default=None, blank = True)
    eventfr_tillmonth = models.TextField(null = True, default=None, blank = True)
    eventfr_tillday = models.TextField(null = True, default=None, blank = True)
    eventfr_tillyear = models.TextField(null = True, default=None, blank = True)
    eventaddressp = models.TextField(null = True, default=None, blank = True)
    eventaddressv = models.TextField(null = True, default=None, blank = True)
    event_guest = models.TextField(null = True, default=None, blank = True)
    event_fee = models.TextField(null = True, default=None, blank = True)
    event_req = models.TextField(null = True, default=None, blank = True)
    eventimg = models.FileField(upload_to="stories/",max_length=500, default=None, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.post}"

class Stories(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='stories')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.post}"