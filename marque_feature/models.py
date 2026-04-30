from django.db import models


class marquee_feature_1(models.Model):
    book_image = models.ImageField(
        upload_to="book_image/", max_length=250, null=True, blank=True
    )

    def __str__(self):
        return f"Book Image #{self.pk}"


class marquee_feature_2(models.Model):
    magazines_image = models.ImageField(
        upload_to="magazines_image/", max_length=250, null=True, blank=True
    )

    def __str__(self):
        return f"Magazine Image #{self.pk}"


class marquee_feature_3(models.Model):
    book_image_2 = models.ImageField(
        upload_to="book_image_2/", max_length=250, null=True, blank=True
    )

    def __str__(self):
        return f"Book Image 2 #{self.pk}"
