from django.db import models
from django.contrib.auth.models import User

class ForumPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(max_length=1000, default=None, null=True, blank=True)
    description = models.TextField(max_length=10000, default=None, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
class Message(models.Model):
    post = models.ForeignKey('ForumPost', on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField(max_length=10000, default=None, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)    


# Create your models here.
