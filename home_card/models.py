"""
home_card/models.py

Consolidates 16 identical model classes (home_card_1..6, book_card_1..5,
sport_card_1..5) into a single ContentCard model with a category field.
A data migration (0002_consolidate_cards.py) migrates all existing rows.
"""

from django.db import models


class ContentCard(models.Model):
    BLOG = "blog"
    BOOK = "book"
    SPORT = "sport"

    CATEGORY_CHOICES = [
        (BLOG, "Blog"),
        (BOOK, "Book / News"),
        (SPORT, "Sport"),
    ]

    category = models.CharField(
        max_length=10,
        choices=CATEGORY_CHOICES,
        default=BLOG,
        db_index=True,
    )
    card_desc = models.CharField(max_length=250, null=True, blank=True)
    card_image = models.ImageField(
        upload_to="homecard/",
        max_length=250,
        null=True,
        blank=True,
    )

    class Meta:
        ordering = ["id"]
        verbose_name = "Content Card"
        verbose_name_plural = "Content Cards"

    def __str__(self):
        return f"[{self.get_category_display()}] {self.card_desc or 'No description'}"
