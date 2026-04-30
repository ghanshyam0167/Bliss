from django.db import models


class Search(models.Model):
    S_image = models.ImageField(upload_to="search/", max_length=500, null=True, blank=True)
    s_title = models.CharField(max_length=100, null=True, blank=True)
    s_lng = models.CharField(max_length=30, null=True, blank=True)
    s_author = models.CharField(max_length=100, null=True, blank=True)
    s_pdate = models.IntegerField(null=True, blank=True)
    s_desc = models.CharField(max_length=250, null=True, blank=True)

    def __str__(self):
        return self.s_title or f"Search Item #{self.pk}"
