from django.db import models
from django.contrib.auth.models import User


class ForumPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="forum_posts")
    title = models.TextField(max_length=1000, null=True, blank=True)
    description = models.TextField(max_length=10000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title or f"Forum Post #{self.pk}"


class Message(models.Model):
    post = models.ForeignKey(
        "ForumPost", on_delete=models.CASCADE, related_name="messages"
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField(max_length=10000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"Message by {self.user.username} in '{self.post}'"
